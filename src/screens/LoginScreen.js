import * as React from 'react';
import {Button, View, TextInput, Text, TouchableOpacity} from 'react-native';
import tw from '../lib/tailwind';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import {login} from '../app/features/user';
import ScreenContainer from '../containers/ScreenContainer';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState('');

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Login Successfully',
      text2: `Have a nice day ${inputValue}`,
    });
  };

  const loginPress = () => {
    dispatch(login(inputValue));
    showToast();
  };

  return (
    <ScreenContainer>
      <Text style={tw`text-2xl font-medium`}>Login</Text>
      <View style={tw`w-1/2 items-center justify-center flex-row my-5`}>
        <Icon name="person-circle-outline" size={30} style={tw`mr-1`} />
        <TextInput
          placeholder="Your name"
          style={tw`w-full border-b border-gray-300`}
          value={inputValue}
          onChangeText={setInputValue}
        />
      </View>
      <TouchableOpacity>
        <Button title="Login" onPress={loginPress} disabled={!inputValue} />
      </TouchableOpacity>
    </ScreenContainer>
  );
};

export default LoginScreen;
