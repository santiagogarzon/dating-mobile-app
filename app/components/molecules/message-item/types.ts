import { ListItemProps } from "@ui-kitten/components";
import { Message } from "../../../containers/Chat/types";

export type MessageItemProps = ListItemProps & {
  message: Message;
};
