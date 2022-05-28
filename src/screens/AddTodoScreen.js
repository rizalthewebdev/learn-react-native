import * as React from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
import tw from '../lib/tailwind';
import {useDispatch} from 'react-redux';
import {addTodo} from '../app/features/todos';
import Toast from 'react-native-toast-message';
import {Keyboard} from 'react-native';
import ScreenContainer from '../containers/ScreenContainer';

const AddTodoScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = React.useState('');

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Todo added Successfully',
      text2: `Enjoy your ${newTodo}`,
    });
  };

  const addTodoPress = () => {
    dispatch(addTodo(newTodo));
    Keyboard.dismiss();
    setNewTodo('');
    showToast();
  };

  return (
    <ScreenContainer>
      <View style={tw`w-full flex items-center justify-center`}>
        <TextInput
          placeholder="What you want to do ?"
          style={tw`w-1/2 border-b-2 border-gray-300 py-1.5`}
          value={newTodo}
          onChangeText={setNewTodo}
        />
        <TouchableOpacity
          onPress={addTodoPress}
          disabled={!newTodo}
          style={tw`px-4 py-2 bg-red-500 rounded-md flex-row items-center justify-center mt-5 ${
            !newTodo ? 'bg-gray-400' : null
          }`}>
          <Text style={tw`text-white`}>Add Todo</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

export default AddTodoScreen;
