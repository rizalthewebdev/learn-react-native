import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from '../MainContainer';

const AddTodoScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => navigation.navigate('Home')}>Add Todo Screen</Text>
    </SafeAreaView>
  );
};

export default AddTodoScreen;