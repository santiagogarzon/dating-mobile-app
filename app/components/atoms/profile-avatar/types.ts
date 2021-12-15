import { AvatarProps, ButtonElement } from "@ui-kitten/components";

export interface ProfileAvatarProps extends AvatarProps {
  editButton?: () => ButtonElement;
}
