import * as React from 'react';
import ScreenContainer from '../containers/ScreenContainer';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import tw from '../lib/tailwind';
import {logout} from '../app/features/user';

const SettingsScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const logoutPress = () => {
    dispatch(logout());
  };

  return (
    <ScreenContainer>
      <TouchableOpacity
        onPress={logoutPress}
        style={tw`flex flex-row items-center justify-center mr-4 py-1 px-3 bg-red-400/30 dark:bg-red-900/50 rounded-lg`}>
        <Icon name="log-out-outline" size={25} color="red" />
        <Text style={tw`text-red-500 pl-1`}>Logout</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

export default SettingsScreen;
