import * as React from 'react';
import { useEffect } from 'react';
import { adaptNavigationTheme, MD3DarkTheme, MD3LightTheme, MD3Theme, Provider as PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';
import { selectTheme } from '../store/settings/settingsSlice';

const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    primary: 'rgb(0, 100, 148)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(202, 230, 255)',
    onPrimaryContainer: 'rgb(0, 30, 48)',
    secondary: 'rgb(80, 96, 111)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(211, 229, 246)',
    onSecondaryContainer: 'rgb(12, 29, 41)',
    tertiary: 'rgb(101, 88, 123)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(235, 220, 255)',
    onTertiaryContainer: 'rgb(33, 22, 52)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(252, 252, 255)',
    onBackground: 'rgb(26, 28, 30)',
    surface: 'rgb(252, 252, 255)',
    onSurface: 'rgb(26, 28, 30)',
    surfaceVariant: 'rgb(221, 227, 234)',
    onSurfaceVariant: 'rgb(65, 71, 77)',
    outline: 'rgb(114, 120, 126)',
    outlineVariant: 'rgb(193, 199, 206)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(46, 49, 51)',
    inverseOnSurface: 'rgb(240, 240, 243)',
    inversePrimary: 'rgb(142, 205, 255)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(239, 244, 250)',
      level2: 'rgb(232, 240, 246)',
      level3: 'rgb(224, 235, 243)',
      level4: 'rgb(222, 234, 242)',
      level5: 'rgb(217, 231, 240)',
    },
    surfaceDisabled: 'rgba(26, 28, 30, 0.12)',
    onSurfaceDisabled: 'rgba(26, 28, 30, 0.38)',
    backdrop: 'rgba(43, 49, 55, 0.4)',
  }
};

const darkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    primary: 'rgb(142, 205, 255)',
    onPrimary: 'rgb(0, 52, 79)',
    primaryContainer: 'rgb(0, 75, 112)',
    onPrimaryContainer: 'rgb(202, 230, 255)',
    secondary: 'rgb(184, 200, 217)',
    onSecondary: 'rgb(34, 50, 63)',
    secondaryContainer: 'rgb(57, 73, 86)',
    onSecondaryContainer: 'rgb(211, 229, 246)',
    tertiary: 'rgb(208, 192, 232)',
    onTertiary: 'rgb(54, 43, 74)',
    tertiaryContainer: 'rgb(77, 65, 98)',
    onTertiaryContainer: 'rgb(235, 220, 255)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(26, 28, 30)',
    onBackground: 'rgb(226, 226, 229)',
    surface: 'rgb(26, 28, 30)',
    onSurface: 'rgb(226, 226, 229)',
    surfaceVariant: 'rgb(65, 71, 77)',
    onSurfaceVariant: 'rgb(193, 199, 206)',
    outline: 'rgb(139, 145, 152)',
    outlineVariant: 'rgb(65, 71, 77)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(226, 226, 229)',
    inverseOnSurface: 'rgb(46, 49, 51)',
    inversePrimary: 'rgb(0, 100, 148)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(32, 37, 41)',
      level2: 'rgb(35, 42, 48)',
      level3: 'rgb(39, 48, 55)',
      level4: 'rgb(40, 49, 57)',
      level5: 'rgb(42, 53, 62)'
    },
    surfaceDisabled: 'rgba(226, 226, 229, 0.12)',
    onSurfaceDisabled: 'rgba(226, 226, 229, 0.38)',
    backdrop: 'rgba(43, 49, 55, 0.4)'
  }
};



const { LightTheme: navigationLightTheme, DarkTheme: navigationDarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(lightTheme, navigationLightTheme);
const CombinedDarkTheme = merge(darkTheme, navigationDarkTheme);

export default function CustomThemeProvider({ children }) {
  const theme = useSelector(selectTheme);
  return (
    <PaperProvider theme={theme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme}>
      <NavigationContainer theme={theme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme} >
        {children}
      </NavigationContainer>
    </PaperProvider>
  );
}