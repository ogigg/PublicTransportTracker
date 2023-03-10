import { Button, View } from "react-native";
import {Text, StyleSheet} from 'react-native';
import { Button as ButtonMD } from 'react-native-paper';
import { useTranslation } from "react-i18next";
import * as Location from 'expo-location';
import { useEffect } from "react";
import StopsList from "../shared/components/StopsList";
import { useDispatch } from "react-redux";
import { setLocation } from "../store/settings/settingsSlice";

export const HomeScreen = ({navigation}) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      Location.requestForegroundPermissionsAsync();
      let position = await Location.getCurrentPositionAsync({});
      dispatch(setLocation({ lat: position.coords.latitude, lng: position.coords.longitude }));

    })();
  }, []);

    return (
      <View>
        <StopsList />
      </View>
      
    );
  };
  export const ProfileScreen = ({navigation, route}) => <Text>This is Oskar's profile</Text>