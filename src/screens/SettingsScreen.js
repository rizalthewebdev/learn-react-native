import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from '../styles/global';

const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => navigation.navigate('Home')}>Settings Screen</Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;
