import React from 'react';
import { StatusBar } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Deliveries from '~/pages/Deliveries';
import Profile from '~/pages/Profile';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  const iconTab = (color, name) => {
    return <Icon name={name} color={color} size={26} />;
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
      <Tab.Navigator
        initialRouteName="Entregas"
        tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: '#7159c1',
          inactiveTintColor: '#999',
          style: {
            backgroundColor: '#fff',
          },
        }}
      >
        <Tab.Screen
          name="Entregas"
          component={Deliveries}
          options={{
            tabBarLabel: 'Entregas',
            tabBarIcon: ({ color }) => iconTab(color, 'menu'),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Meu Perfil',
            tabBarIcon: ({ color }) => iconTab(color, 'account-circle'),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default AppRoutes;
