import React from 'react';
import {render} from '@testing-library/react-native';

import {Text} from 'shared/Text/TextComponent';

describe('<App />', () => {
  it('has 1 child', () => {
    const {queryByText} = render(<Text>Lato Black</Text>);
    const element = queryByText('Lato Black');
    expect(element).toBeTruthy();
  });
});
