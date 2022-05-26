import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Screen Components
import AddTodoScreen from './screens/AddTodoScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import MyTabBar from './screens/tab/MyTabBar';

const Tab = createBottomTabNavigator();

// Tab Name
const homeName = 'Home';
const addTodoName = 'Add Todo';
const settingName = 'Settings';

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === addTodoName) {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (rn === settingName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Icon name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {height: 65},
          tabBarItemStyle: {paddingVertical: 12},
          tabBarHideOnKeyboard: true,
        })}
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name={homeName} component={HomeScreen} options={{}} />
        <Tab.Screen name={addTodoName} component={AddTodoScreen} options={{}} />
        <Tab.Screen
          name={settingName}
          component={SettingsScreen}
          options={{}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;

// StyleSheet
EStyleSheet.build({
  $text: '#1a1a1a',
  $bgColor: '#dedede',
});

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$bgColor',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '$text',
  },
});
