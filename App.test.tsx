import React from 'react';
import {render} from '@testing-library/react-native';

import {MyFirstText} from './App';

describe('<App />', () => {
  it('has 1 child', () => {
    const {queryByText} = render(<MyFirstText>Lato Black</MyFirstText>);
    const element = queryByText('Lato Black');
    expect(element).toBeTruthy();
  });
});
