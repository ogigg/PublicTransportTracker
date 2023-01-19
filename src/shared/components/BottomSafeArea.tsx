import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function (props) {
  const insets = useSafeAreaInsets();

  return <View style={{ paddingTop: insets.bottom }}></View>;
}