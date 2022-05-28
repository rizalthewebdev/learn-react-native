import * as React from 'react';
import {Switch} from 'react-native';
import ScreenContainer from '../containers/ScreenContainer';
import tw from '../lib/tailwind';

const SettingsScreen = ({navigation}) => {
  return (
    <ScreenContainer>
      <Switch />
    </ScreenContainer>
  );
};

export default SettingsScreen;
