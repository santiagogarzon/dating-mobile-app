import { ImageSourcePropType } from "react-native";

export interface PersonalData {
  firstName: string;
  lastName: string;
  photo: ImageSourcePropType;
  gender: Gender;
  description: string;
  age: number;
  weight: number;
  height: number;
  email: string;
  phoneNumber: string;
}

export enum Gender {
  MALE = "Male",
  FEMALE = "Female"
}
