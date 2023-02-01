import { Button, View } from "react-native";
import { StyleSheet} from 'react-native';
import { Text } from 'react-native-paper';
import { useTranslation } from "react-i18next";
import * as Location from 'expo-location';
import { useEffect } from "react";
import MapView from 'react-native-maps';
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../store/settings/settingsSlice";
import { Marker } from 'react-native-maps';
import { MockedStops } from "../mocks/stops";
import { selectTheme } from "../store/settings/settingsSlice";

export const MapScreen = ({navigation}) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  useEffect(() => {
    (async () => {
      Location.requestForegroundPermissionsAsync();
      let position = await Location.getCurrentPositionAsync({});
      dispatch(setLocation({ lat: position.coords.latitude, lng: position.coords.longitude }));

    })();
  }, []);
  

    return (
      <View>
        <MapView style={styles.map} showsUserLocation={true} userInterfaceStyle={theme} initialRegion={{
            latitude: 52.409538,
            longitude: 16.931992,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}>
            {MockedStops.map((stop, index) => (
                <Marker
                key={index}
                coordinate={{latitude: stop.lat, longitude: stop.lng}}
                title={stop.code}
                description={stop.name}
                />
            ))}
        </MapView>
      </View>
      
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });