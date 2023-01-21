import { Button, View } from "react-native";
import {Text, StyleSheet} from 'react-native'
import { useTranslation } from "react-i18next";

export const SettingsScreen = ({navigation}) => {
  const { t } = useTranslation();
    return (
      <View>
       <Text>Settings screen here!</Text>
      </View>
    );
  };
