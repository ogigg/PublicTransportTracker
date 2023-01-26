import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import TabNavigator from './src/navigation/TabNavigator';
import StatusBar from './src/shared/components/StatusBar';
import CustomThemeProvider from './src/theme/CustomThemeProvider';
import './src/i18n/i18n';
import { store } from './src/store/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <SafeAreaProvider>
          <StatusBar />
          <TabNavigator />        
        </SafeAreaProvider>
      </CustomThemeProvider>
    </Provider>

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
