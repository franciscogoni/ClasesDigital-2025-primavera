import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

function HomeMenu() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} options={ {tabBarIcon: () => <Entypo name="home" size={24} color="black" />}}/>
      <Tab.Screen name="Profile" component={Profile}  options={ {tabBarIcon: () => <AntDesign name="profile" size={24} color="black" />}}/>
    </Tab.Navigator>
  );
}

export default HomeMenu
