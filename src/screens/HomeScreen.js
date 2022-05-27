import * as React from 'react';
import {SafeAreaView, Button} from 'react-native';
import {styles} from '../styles/global';
import {useDispatch} from 'react-redux';
import {login} from '../app/features/user';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Add Name"
        onPress={() => dispatch(login('Khoerul Rizal'))}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
