import * as React from 'react';
import {Text, TouchableOpacity, View, Button, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import Toast from 'react-native-toast-message';
import tw from '../lib/tailwind';

import {
  deleteTodo,
  toggleComplete,
  fetchTodosFromApi,
  resetTodo,
} from '../app/features/todos';

import ScreenContainer from '../containers/ScreenContainer';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  // Get all Todo's from Redux store
  const allTodos = useSelector(state => state.todos);

  // Delete todo Toast
  const deleteToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Deleted Successfully',
      text2: 'Task Deleted',
    });
  };

  // Get random data toast
  const getRandomTodoToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Data Successfully Fetched',
      text2: 'Get Random Todos Data From API',
    });
  };

  // Delete Todo
  const deletePress = id => {
    dispatch(deleteTodo(id));
    deleteToast();
  };

  // Get Random Todo
  const getDataPress = () => {
    dispatch(fetchTodosFromApi());
    getRandomTodoToast();
  };

  return (
    <ScreenContainer>
      {/* If Todo exist */}
      {allTodos.length ? (
        <>
          <Text style={tw`text-lg font-bold my-3 dark:text-zinc-200 font-sans`}>
            All Things to do:
          </Text>
          <ScrollView style={tw`px-4`}>
            {/* Mapping todos */}
            {allTodos.concat().map(({completed, title, id}) => (
              <View
                key={id}
                style={tw`flex flex-row w-10/12 shadow-sm ${
                  completed ? 'shadow-red-600 bg-red-100/30' : ''
                } h-16 px-3 rounded-md items-center justify-between my-1`}>
                <TouchableOpacity style={tw`flex flex-row items-center`}>
                  <CheckBox
                    value={completed}
                    onValueChange={() => dispatch(toggleComplete(id))}
                    tintColors={{true: '#f00', false: '#aaa'}}
                  />
                  <Text
                    style={tw`text-zinc-900 dark:text-zinc-200 pl-2 max-w-64 ${
                      completed ? 'line-through' : null
                    }`}>
                    {title}
                  </Text>
                </TouchableOpacity>
                <View style={tw`flex flex-row items-center`}>
                  <TouchableOpacity
                    style={tw`w-5 h-5 rounded-full mx-1`}
                    onPress={() => deletePress(id)}>
                    <Icon name="trash-sharp" size={18} color="gray" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={tw`py-3 w-full bg-red-500/50 dark:bg-red-900/50 flex flex-row items-center justify-center`}
            onPress={() => dispatch(resetTodo())}>
            <Text style={tw`text-white dark:text-red-200`}>Clear Todo</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          {/* If don't have todo */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Add Todo')}
            style={tw`items-center justify-center mb-3`}>
            <Icon name="add-circle" size={50} color="gray" />
            <Text style={tw`text-zinc-900 dark:text-zinc-200`}>
              Add new Todo
            </Text>
          </TouchableOpacity>
          <Text style={tw`dark:text-zinc-200`}>Or</Text>
          <TouchableOpacity style={tw`mt-3`}>
            <Button title="Get random todo" onPress={() => getDataPress()} />
          </TouchableOpacity>
        </>
      )}
    </ScreenContainer>
  );
};

export default HomeScreen;
