import React, { ReactElement, cloneElement } from "react";
import { View, ViewProps, ImageProps } from "react-native";
import { Avatar, ButtonElement, ButtonProps } from "@ui-kitten/components";
import { ProfileAvatarProps } from "./types";
import styles from "./styles";

export const ProfileAvatar = (
  props: ProfileAvatarProps
): ReactElement<ViewProps> => {
  const renderEditButtonElement = (): ButtonElement | null => {
    if (props.editButton) {
      const buttonElement: ReactElement<ButtonProps> = props.editButton();

      return cloneElement(buttonElement, {
        style: [buttonElement.props.style, styles.editButton],
      });
    }
    return null;
  };

  const { style, editButton, ...restProps } = props;

  return (
    <View style={style}>
      <Avatar style={[style, styles.avatar]} {...restProps} />
      {editButton && renderEditButtonElement()}
    </View>
  );
};
