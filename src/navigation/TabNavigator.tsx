import { HomeScreen, ProfileScreen } from '../screens/HomeScreen';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator shifting>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        )}}/>
      <Tab.Screen name="Search" component={ProfileScreen} options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={26} />
        )}}/>
      <Tab.Screen name="Map" component={ProfileScreen} options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="map" color={color} size={26} />
        )}}/>
      <Tab.Screen name="More" component={ProfileScreen} options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="menu" color={color} size={26} />
        )}}/>
    </Tab.Navigator>
  );
}
