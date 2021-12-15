import React from "react";
import { ScrollView } from "react-native";
import { Button, Text, useStyleSheet } from "@ui-kitten/components";

import { profileData } from "./extra/profile";
import { ValueRow } from "../../components/atoms/value-row";
import { ProfileAvatar } from "../../components/atoms/profile-avatar";
import { CameraIcon } from "../../components/atoms/icons";
import themedStyles from "./styles";

export default (props: {
  navigation: { navigate: (arg0: string) => void };
}): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);

  const onDoneButtonPress = (): void => {
    props.navigation?.navigate("Discovery");
  };

  const renderPhotoButton = (): React.ReactElement => (
    <Button
      style={styles.photoButton}
      status="basic"
      accessoryLeft={CameraIcon}
    />
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <ProfileAvatar
        style={styles.photo as any}
        source={profileData.photo}
        editButton={renderPhotoButton}
      />
      <Text style={[styles.description, styles.section]} appearance="hint">
        {profileData.description}
      </Text>
      <ValueRow
        style={[styles.setting, styles.section]}
        hint="First Name"
        value={profileData.firstName}
      />
      <ValueRow
        style={styles.setting}
        hint="Last Name"
        value={profileData.lastName}
      />
      <ValueRow
        style={styles.setting}
        hint="Gender"
        value={profileData.gender}
      />
      <ValueRow
        style={styles.setting}
        hint="Age"
        value={`${profileData.age}`}
      />
      <ValueRow
        style={styles.setting}
        hint="Weight"
        value={`${profileData.weight} kg`}
      />
      <ValueRow
        style={styles.setting}
        hint="Height"
        value={`${profileData.height} cm`}
      />
      <ValueRow
        style={[styles.setting, styles.section]}
        hint="Email"
        value={profileData.email}
      />
      <ValueRow
        style={styles.setting}
        hint="Phone Number"
        value={profileData.phoneNumber}
      />
      <Button style={styles.doneButton} onPress={onDoneButtonPress}>
        Meet new people!
      </Button>
    </ScrollView>
  );
};
