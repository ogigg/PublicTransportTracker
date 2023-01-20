import { Button, View } from "react-native";
import {Text, StyleSheet} from 'react-native';
import { Button as ButtonMD } from 'react-native-paper';
import { useTranslation } from "react-i18next";
import * as Location from 'expo-location';
import { useEffect } from "react";

export const HomeScreen = ({navigation}) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    (async () => {
      Location.requestForegroundPermissionsAsync();
      let position = await Location.getCurrentPositionAsync({});
      console.log(position);
    })();
  }, []);

    return (
      <View>
        <Button
          title="Go to Oskar's profile"
          onPress={() =>
            navigation.navigate('Profile', {name: 'Jane'})
          }
        />
        <ButtonMD icon="camera" mode="contained" onPress={() => {console.log('Pressed')}}>
          <Text>{t('bottomTabNavigation.home')}</Text>
        </ButtonMD>
      </View>
      
    );
  };
  export const ProfileScreen = ({navigation, route}) => <Text>This is Oskar's profile</Text>