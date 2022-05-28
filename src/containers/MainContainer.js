import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import tw from '../lib/tailwind';

import {logout} from '../app/features/user';

// Screen Components
import {AddTodo, Home, Login, Setting} from '../screens';

const Tab = createBottomTabNavigator();

// Tab Name
const homeName = 'Home';
const addTodoName = 'Add Todo';
const settingName = 'Settings';

const MainContainer = () => {
  const user = useSelector(state => state?.user?.name);
  const dispatch = useDispatch();

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
          component={Home}
          options={{
            headerTitle: `Hello ${user}`,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => dispatch(logout())}
                style={tw`flex flex-row items-center justify-center mr-4 py-1 px-3 bg-red-200/40 rounded-lg`}>
                <Icon name="log-out-outline" size={25} color="red" />
                <Text style={tw`text-red-500 pl-1`}>Logout</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name={addTodoName}
          component={AddTodo}
          options={{headerTitle: 'Add New Todo', headerTitleAlign: 'center'}}
        />
        <Tab.Screen
          name={settingName}
          component={Setting}
          options={{headerTitle: 'Change Theme', headerTitleAlign: 'center'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <Login />
  );
};

export default MainContainer;
