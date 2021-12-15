import React from "react";
import { View } from "react-native";
import { Avatar, ListItem, ListItemProps, Text } from "@ui-kitten/components";
import { DoneAllIcon } from "../../atoms/icons";
import styles from "./styles";
import { MessageItemProps } from "./types";

export const MessageItem = (props: MessageItemProps): React.ReactElement => {
  const { message, onPress, ...listItemProps } = props;

  const renderMessageDate = (): React.ReactElement => (
    <View style={styles.dateContainer}>
      {message.isRead && <DoneAllIcon />}
      <Text style={styles.dateText} appearance="hint" category="c1">
        {message.date}
      </Text>
    </View>
  );

  const renderProfileAvatar = (): React.ReactElement => (
    <Avatar style={styles.avatar} source={message?.profile?.photo} />
  );

  return (
    <ListItem
      {...listItemProps}
      onPress={onPress}
      title={`${message?.profile?.firstName} ${message?.profile?.lastName}`}
      description={message?.text}
      accessoryLeft={renderProfileAvatar}
      accessoryRight={renderMessageDate}
    />
  );
};
