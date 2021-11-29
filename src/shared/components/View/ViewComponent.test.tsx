import React from "react";
import { render } from "utils/testUtils";

import { View, SafeAreaView } from "shared/components";

test("snapshot View", () => {
  const { toJSON } = render(<View />);
  expect(toJSON()).toMatchSnapshot();
});

test("snapshot SafeAreaView", () => {
  const { toJSON } = render(<SafeAreaView />);
  expect(toJSON()).toMatchSnapshot();
});
