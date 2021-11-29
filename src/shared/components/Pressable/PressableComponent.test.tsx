import React from "react";
import { render } from "utils/testUtils";

import { Pressable } from "shared/components";

test("snapshot Pressable", () => {
  const { toJSON } = render(<Pressable label="Press me!" />);
  expect(toJSON()).toMatchSnapshot();
});
