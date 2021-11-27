import React from 'react';
import {Text as RNText} from 'react-native';

console.log('test commit');

const Text = ({children}) => {
  return <RNText>{children}</RNText>;
};

export {Text};
