import React from 'react';
import {render} from 'utils/testUtils';

import {Text} from 'shared/Text/TextComponent';

test('Text component snapshot', () => {
  const {toJSON} = render(<Text color='primary'>Lato Black</Text>);
  expect(toJSON()).toMatchSnapshot();
});
