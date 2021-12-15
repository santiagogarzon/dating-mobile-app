// __tests__/Intro-test.js
import React from "react";
import renderer from "react-test-renderer";
import { MessageItem } from "../index";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { data } from "../../../../containers/Chat/extra/messages";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          {data.map((message) => (
            <MessageItem message={message} />
          ))}
        </ApplicationProvider>
      </>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
