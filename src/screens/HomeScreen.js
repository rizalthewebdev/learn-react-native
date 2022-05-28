import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

import ScreenContainer from '../containers/ScreenContainer';

import tw from '../lib/tailwind';

const HomeScreen = ({navigation}) => {
  const allTodos = useSelector(state => state.todos);

  return (
    <ScreenContainer>
      {allTodos.length ? (
        <>
          {allTodos.map(todo => (
            <View key={todo.id}>
              <Text>{todo.text}</Text>
            </View>
          ))}
        </>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate('Add Todo')}
          style={tw`items-center justify-center`}>
          <Icon name="add-circle" size={50} color="gray" />
          <Text>Add new Todo</Text>
        </TouchableOpacity>
      )}
    </ScreenContainer>
  );
};

export default HomeScreen;
