import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import TabNavigator from './src/navigation/TabNavigator';
import StatusBar from './src/shared/components/StatusBar';
import CustomThemeProvider from './src/theme/CustomThemeProvider';
import './src/i18n/i18n';

export default function App() {
  return (
    <CustomThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar />
          <TabNavigator />        
        </NavigationContainer>
      </SafeAreaProvider>
    </CustomThemeProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
