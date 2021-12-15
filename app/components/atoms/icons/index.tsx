import React from "react";
import { ImageStyle } from "react-native";
import { Icon, IconElement, useTheme, IconProps } from "@ui-kitten/components";

export const ArrowIosBackIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name="arrow-ios-back" />
);

export const DoneAllIcon = (style: ImageStyle): IconElement => {
  const theme = useTheme();
  return (
    <Icon
      {...style}
      width={16}
      height={16}
      fill={theme["color-primary-default"]}
      name="done-all"
    />
  );
};

export const CameraIcon = (props: IconProps): IconElement => (
  <Icon {...props} width={25} height={25} name="camera" />
);

export const CompassIcon = (props: IconProps) => (
  <Icon {...props} name="compass-outline" />
);

export const ChatIcon = (props: IconProps) => (
  <Icon {...props} name="message-square-outline" />
);

export const ProfileIcon = (props: IconProps) => (
  <Icon {...props} name="settings-2" />
);

export const SearchIcon = (): IconElement => (
  <Icon width={20} height={20} name="search" />
);
