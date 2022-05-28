import * as React from 'react';
import {SafeAreaView} from 'react-native';
import tw from '../lib/tailwind';

const ScreenContainer = ({children}) => {
  return <SafeAreaView style={tw`container`}>{children}</SafeAreaView>;
};

export default ScreenContainer;
