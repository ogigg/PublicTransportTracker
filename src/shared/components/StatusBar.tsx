import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function (props) {
  const insets = useSafeAreaInsets();

  return <View style={{ paddingTop: insets.top }}></View>;
}
