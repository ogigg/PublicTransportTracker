import { Button } from "react-native";
import {Text, StyleSheet} from 'react-native';

export const HomeScreen = ({navigation}) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
      />
    );
  };
  export const ProfileScreen = ({navigation, route}) => <Text>This is {route.params.name}'s profile</Text>