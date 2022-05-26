import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from '../MainContainer';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => navigation.navigate('Add Todo')}>
        Add Todo Screen
      </Text>
      <Text onPress={() => navigation.navigate('Settings')}>
        Settings Screen
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
