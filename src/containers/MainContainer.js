import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

// Screen Components
import AddTodoScreen from '../screens/AddTodoScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

// Tab Name
const homeName = 'Home';
const addTodoName = 'Add Todo';
const settingName = 'Settings';

const MainContainer = () => {
  const user = useSelector(state => state?.user?.name);

  return user ? (
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
        })}>
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{headerTitle: `Hello ${user}`}}
        />
        <Tab.Screen
          name={addTodoName}
          component={AddTodoScreen}
          options={{headerTitle: 'Add New Todo'}}
        />
        <Tab.Screen
          name={settingName}
          component={SettingsScreen}
          options={{headerTitle: 'Change Theme'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <LoginScreen />
  );
};

export default MainContainer;
