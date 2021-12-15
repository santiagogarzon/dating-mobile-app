// __tests__/Intro-test.js
import React from "react";
import renderer from "react-test-renderer";
import { ValueRow } from "../index";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <ValueRow />
        </ApplicationProvider>
      </>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
