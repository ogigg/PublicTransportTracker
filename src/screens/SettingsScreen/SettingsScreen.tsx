import { View } from "react-native";
import {Text, StyleSheet} from 'react-native'
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Menu, Divider, Button } from "react-native-paper";
import { ThemePicker } from "./components/ThemePicker";

export const SettingsScreen = ({navigation}) => {
  const { t } = useTranslation();
  
    return (
      <View>
       <Text>Settings screen here!</Text>
        <ThemePicker />
      </View>
    );
  };
