import { Button, View } from "react-native";
import {Text, StyleSheet} from 'react-native';
import { Button as ButtonMD } from 'react-native-paper';


export const HomeScreen = ({navigation}) => {
    return (
      <View>
        <Button
          title="Go to Oskar's profile"
          onPress={() =>
            navigation.navigate('Profile', {name: 'Jane'})
          }
        />
        <ButtonMD icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </ButtonMD>
      </View>
      
    );
  };
  export const ProfileScreen = ({navigation, route}) => <Text>This is Oskar's profile</Text>