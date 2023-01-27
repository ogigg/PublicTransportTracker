import React, { useState } from 'react';
import { View } from 'react-native';
import { List, MD3Colors, Text, TouchableRipple } from 'react-native-paper';

import { Stop } from '../../models/stop';

interface StopListItemProps {
    stop: Stop;
}
export const StopListItem = ({ stop }: StopListItemProps) => {
  const [expanded, setIsExpanded] = useState<boolean>(false);

  const expand = () => {
    setIsExpanded(!expanded);
  }
  return (
    <TouchableRipple onPress={expand}>
      <View className="p-3">
        <View className="flex-row">
          <View className="flex-row flex-1 justify-between">
            <Text>{stop.name}</Text>
            <Text>{stop.code}</Text>
          </View>
          <View className="pl-3">
            <List.Icon color={MD3Colors.tertiary70} icon={expanded ? "chevron-up" : "chevron-down"} />
          </View>
        </View>
        {expanded && <View><Text>More Info TODO</Text></View>}
      </View>
    </TouchableRipple>
  );
}
