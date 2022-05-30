import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, Button} from 'react-native';
import {useSelector} from 'react-redux';
import tw from '../lib/tailwind';

// Screen Components
import {AddTodo, Home, Login, Setting} from '../screens';

const Tab = createBottomTabNavigator();

// Tab Name
const homeName = 'Home';
const addTodoName = 'Add Todo';
const settingName = 'Settings';

const MainContainer = ({colorScheme, toggleColorScheme, setColorScheme}) => {
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
          tabBarStyle: tw`h-[65px] bg-white dark:bg-zinc-800`,
          tabBarItemStyle: {paddingVertical: 12},
          headerStyle: tw`bg-white dark:bg-zinc-800`,
          headerTitleStyle: tw`text-zinc-900 dark:text-gray-100`,
          headerRight: () => (
            <TouchableOpacity>
              <Button title="Change Theme" onPress={toggleColorScheme} />
            </TouchableOpacity>
          ),
        })}>
        <Tab.Screen
          name={homeName}
          component={Home}
          options={{
            headerTitle: `Hello ${user}`,
          }}
        />
        <Tab.Screen name={addTodoName} component={AddTodo} />
        <Tab.Screen name={settingName} component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <Login />
  );
};

export default MainContainer;
