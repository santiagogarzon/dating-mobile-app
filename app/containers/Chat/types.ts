import { ImageURISource } from "react-native";

export interface Message {
  text: string;
  date: string;
  isRead: boolean;
  profile: {
    firstName: string;
    lastName: string;
    photo: ImageURISource;
  };
}
