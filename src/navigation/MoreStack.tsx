import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsScreen } from "../screens/SettingsScreen/SettingsScreen";
import { MoreScreen } from "../screens/MoreScreen";
import { useEffect } from "react";
import { NavigationProp } from "@react-navigation/native";
import { CommonActions } from '@react-navigation/native';

export const MoreStack = ({navigation}: { navigation: NavigationProp<any> }) => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    
    const unsubscribe = navigation.addListener('blur', () => {
        navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'More' }]}))
    });

    return unsubscribe;
  }, [navigation]);

    return (
        <Stack.Navigator initialRouteName="More">
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
            />
            <Stack.Screen
                name="More"
                component={MoreScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
  };
