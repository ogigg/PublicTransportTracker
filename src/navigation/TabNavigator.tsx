import { HomeScreen, ProfileScreen } from '../screens/HomeScreen';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
import { MoreStack } from './MoreStack';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator shifting>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: t('bottomTabNavigation.home'),
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        )}}/>
      <Tab.Screen name="Search" component={ProfileScreen} options={{
        tabBarLabel: t('bottomTabNavigation.search'),
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={26} />
        )}}/>
      <Tab.Screen name="Map" component={ProfileScreen} options={{
        tabBarLabel: t('bottomTabNavigation.map'),
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="map" color={color} size={26} />
        )}}/>
      <Tab.Screen name="MoreNavigator" component={MoreStack} options={{
        tabBarLabel: t('bottomTabNavigation.more'),
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="menu" color={color} size={26} />
        )}}/>
    </Tab.Navigator>
  );
}
