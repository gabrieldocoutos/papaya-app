import React from "react";
import { render } from "utils/testUtils";

import { TextInput } from "shared/components";

test("snapshot with regular fontWeight", () => {
  const { toJSON } = render(<TextInput label="E-mail" color="primary" />);
  expect(toJSON()).toMatchSnapshot();
});
