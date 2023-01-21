import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsScreen } from "../screens/SettingsScreen";
import { MoreScreen } from "../screens/MoreScreen";

export const MoreStack = ({navigation}) => {
  const Stack = createNativeStackNavigator();

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
