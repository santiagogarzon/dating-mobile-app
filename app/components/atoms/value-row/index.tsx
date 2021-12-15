import React from "react";
import { Divider, Layout, Text } from "@ui-kitten/components";
import { ValueRowProps } from "./types";
import styles from "./styles";

export const ValueRow = (props: ValueRowProps): React.ReactElement => {
  const { style, hint, value, ...layoutProps } = props;

  const renderHintElement = (): React.ReactElement => (
    <Text appearance="hint" category="s1">
      {hint}
    </Text>
  );

  return (
    <React.Fragment>
      <Layout level="1" {...layoutProps} style={[styles.container, style]}>
        {hint && renderHintElement()}
        <Text category="s1">{value}</Text>
      </Layout>
      <Divider />
    </React.Fragment>
  );
};
