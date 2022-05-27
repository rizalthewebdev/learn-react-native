import * as React from 'react';
import {SafeAreaView, Button, View, TextInput} from 'react-native';
import {styles} from '../styles/global';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {login} from '../app/features/user';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const inputRef = React.useRef();
  const [inputValue, setInputValue] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputGroup}>
        <Icon name="person-circle-outline" size={30} style={{marginRight: 5}} />
        <TextInput
          placeholder="Your name"
          style={{width: '100%'}}
          ref={inputRef}
          value={inputValue}
          onChangeText={setInputValue}
        />
      </View>
      <Button
        title="Login"
        onPress={() => dispatch(login(inputValue))}
        disabled={!inputValue}
        style={{backgroundColor: 'red'}}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
