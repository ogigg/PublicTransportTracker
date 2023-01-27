import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Stop } from '../../models/stop';
import { Text } from "react-native-paper";

interface StopListItemProps {
    stop: Stop;
}
export const StopListItem = ({ stop }: StopListItemProps) => {


  return (<View>
    <Text>{stop.name}</Text>
    <Text>{stop.code}</Text>
    </View>);
}
