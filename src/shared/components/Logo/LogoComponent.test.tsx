import React from "react";
import { render } from "utils/testUtils";

import { Logo } from "shared/components";

test("snapshot Logo component", () => {
  const { toJSON } = render(<Logo />);
  expect(toJSON()).toMatchSnapshot();
});
