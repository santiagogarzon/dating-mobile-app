// @ts-nocheck
import React, { FC, ReactElement, useState } from "react";
import {
  Layout,
  useTheme,
  Spinner,
  Text,
  Icon,
  Modal,
  Card,
} from "@ui-kitten/components";
import { useQuery, useMutation } from "react-query";
import Swiper from "react-native-deck-swiper";
import {
  View,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { calculateIcon } from "../../utils/calculateIcon";
import { emulateLike, emulateDontLike, fetchProfiles } from "../../utils/api";
import { Profile, ProfilesData, Error } from "./types";
import styles from "./styles";
import { ValueRow } from "../../components/atoms/value-row";

const Discovery: FC = (): ReactElement => {
  const theme = useTheme();
  const swiperRef = React.useRef();
  const [showIcon, setShowIcon] = useState(false);
  const [iconName, setIconName] = useState("heart");
  const [cards, setCards] = useState<Profile[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [cardDetailIndex, setCardDetailIndex] = useState(0);

  const { data, error, isError, isLoading, refetch } = useQuery<
    ProfilesData,
    Error
  >("peopleDiscovered", fetchProfiles, {
    onSuccess: (successData: ProfilesData) => {
      setCards(successData.data);
      swiperRef?.current?.jumpToCardIndex(0);
    },
  });

  const { mutate: likeMutate } = useMutation(emulateLike, {
    onSuccess: (LikeData) => {
      console.log(LikeData);
    },
  });

  const { mutate: dontLikeMutate } = useMutation(emulateDontLike, {
    onSuccess: (dontLikeData) => {
      console.log(dontLikeData);
    },
  });

  if (isLoading) {
    return (
      <Layout style={styles.loadingContainer}>
        <Spinner size="giant" />
      </Layout>
    );
  }

  if (isError) {
    return <Text>Error! {error?.message ?? ""}</Text>;
  }

  const renderCard = (profile: Profile, index: number) => (
    <View style={styles.card} key={index}>
      <ImageBackground
        source={{ uri: profile?.photos[0].url }}
        style={styles.cardImages}
        resizeMode="cover"
      >
        <View style={styles.textView}>
          <>
            <Text style={[styles.imageText, styles.cardNameText]}>
              {profile?.info?.name} - {profile?.info?.gender}
            </Text>
            <Text style={styles.imageText}>{profile?.info?.age} years old</Text>
          </>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <>
      {data && (
        <Layout style={styles.container}>
          {showIcon && (
            <View style={styles.actionIcon}>
              <Icon
                name={iconName}
                width={100}
                height={100}
                fill={theme["color-primary-default"]}
              />
            </View>
          )}
          <Modal
            style={styles.modal}
            backdropStyle={styles.backdrop}
            visible={modalVisible}
            onBackdropPress={() => setModalVisible(false)}
          >
            <Card status="primary" style={styles.cardContainer}>
              <TouchableHighlight
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Icon
                  name="close"
                  width={30}
                  height={30}
                  fill={theme["color-primary-default"]}
                />
              </TouchableHighlight>
              <View>
                <Text style={styles.nameText}>
                  {cards[cardDetailIndex]?.info?.name}
                </Text>
                <SliderBox
                  images={cards[cardDetailIndex]?.photos}
                  sliderBoxHeight={Dimensions.get("window").height / 2 - 50}
                  ImageComponentStyle={styles.sliderBox}
                />
                <ValueRow
                  style={styles.setting}
                  hint="Sexuality"
                  value={cards[cardDetailIndex]?.info?.sexuality}
                />
                <ValueRow
                  style={styles.setting}
                  hint="Status"
                  value={cards[cardDetailIndex]?.info?.type}
                />
                {cards[cardDetailIndex]?.info?.about && (
                  <ValueRow
                    style={styles.setting}
                    hint="About"
                    value={
                      cards[cardDetailIndex]?.info?.about?.toString() ?? ""
                    }
                  />
                )}
                {cards[cardDetailIndex]?.info?.interests && (
                  <ValueRow
                    style={styles.setting}
                    hint="Interests"
                    value={
                      cards[cardDetailIndex]?.info?.interests?.toString() ?? ""
                    }
                  />
                )}
                {cards[cardDetailIndex]?.info?.desires && (
                  <ValueRow
                    style={styles.setting}
                    hint="Desires"
                    value={
                      cards[cardDetailIndex]?.info?.desires?.toString() ?? ""
                    }
                  />
                )}
              </View>
            </Card>
          </Modal>
          <Swiper
            ref={swiperRef}
            cards={cards}
            renderCard={(profile, index) => renderCard(profile, index)}
            goBackToPreviousCardOnSwipeLeft={cardDetailIndex > 0}
            onSwiping={(x: number, y: number) => {
              setIconName(calculateIcon(x, y));
            }}
            dragStart={() => {
              setShowIcon(true);
            }}
            dragEnd={() => {
              setShowIcon(false);
            }}
            onSwipedBottom={(cardIndex) => {
              dontLikeMutate(cardIndex);
            }}
            onSwipedTop={(cardIndex) => {
              likeMutate(cardIndex);
            }}
            onSwipedAll={() => {
              refetch();
            }}
            onSwiped={(cardIndex) => {
              setCardDetailIndex(cardIndex + 1);
            }}
            onTapCard={() => {
              setModalVisible(true);
            }}
            swipeAnimationDuration={500}
            backgroundColor={theme["color-primary-100"]}
            stackSize={3}
            cardVerticalMargin={20}
          />
        </Layout>
      )}
    </>
  );
};

export default Discovery;
