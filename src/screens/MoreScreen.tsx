import { Button, View } from "react-native";
import {Text, StyleSheet} from 'react-native';
import { Button as ButtonMD, Menu } from 'react-native-paper';
import { useTranslation } from "react-i18next";
import * as Location from 'expo-location';
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsScreen } from "./SettingsScreen";

export const MoreScreen = ({navigation}) => {
  const { t } = useTranslation();

    return (
        <View>
            <Menu.Item leadingIcon="bell" style={{ maxWidth: '100%' }} onPress={() => {navigation.navigate('Home')}} title={t('moreScreen.notifications')} />
            <Menu.Item leadingIcon="chart-pie" style={{ maxWidth: '100%' }} onPress={() => {navigation.navigate('Search')}} title={t('moreScreen.statistics')} />
            <Menu.Item leadingIcon="cog" style={{ maxWidth: '100%' }} onPress={() => {navigation.navigate('Settings')}} title={t('moreScreen.settings')} />
      </View>

    );
  };
