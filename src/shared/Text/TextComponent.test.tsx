import React from "react";
import { render } from "utils/testUtils";

import { Text } from "shared/Text/TextComponent";

test("snapshot with regular fontWeight", () => {
  const { toJSON } = render(<Text color="primary">Lato Black</Text>);
  expect(toJSON()).toMatchSnapshot();
});

test("snapshot with Thin fontWeight", () => {
  const { toJSON } = render(
    <Text color="primary" fontFamily="Thin">
      Lato Black
    </Text>
  );
  expect(toJSON()).toMatchSnapshot();
});

test("snapshot with Light fontWeight", () => {
  const { toJSON } = render(
    <Text color="primary" fontFamily="Light">
      Lato Black
    </Text>
  );
  expect(toJSON()).toMatchSnapshot();
});

test("snapshot with Bold fontWeight", () => {
  const { toJSON } = render(
    <Text color="primary" fontFamily="Bold">
      Lato Black
    </Text>
  );
  expect(toJSON()).toMatchSnapshot();
});

test("snapshot with Black fontWeight", () => {
  const { toJSON } = render(
    <Text color="primary" fontFamily="Black">
      Lato Black
    </Text>
  );
  expect(toJSON()).toMatchSnapshot();
});
