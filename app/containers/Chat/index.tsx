import React from "react";
import { ListRenderItemInfo } from "react-native";
import {
  Input,
  Layout,
  List,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";
import { MessageItem } from "../../components/molecules/message-item";
import { SearchIcon } from "../../components/atoms/icons";
import { data } from "./extra/messages";
import { Message } from "./types";

export default (): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);
  const [searchQuery, setSearchQuery] = React.useState<string>();

  const onItemPress = (): void => {};

  const renderItem = (
    info: ListRenderItemInfo<Message>
  ): React.ReactElement => (
    <MessageItem
      style={styles.item}
      message={info.item}
      onPress={onItemPress}
    />
  );

  const renderHeader = (): React.ReactElement => (
    <Layout style={styles.header} level="1">
      <Input
        placeholder="Search"
        value={searchQuery}
        accessoryRight={SearchIcon}
      />
    </Layout>
  );

  return (
    <List
      style={styles.list}
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
    />
  );
};

const themedStyles = StyleService.create({
  list: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  item: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "background-basic-color-3",
  },
});
