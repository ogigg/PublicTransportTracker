import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { getClosestStops } from '../../helpers/getClosestStops';
import { MockedStops } from '../../mocks/stops';
import { Stop } from '../../models/stop';
import { selectLocation } from '../../store/settings/settingsSlice';
import { StopListItem } from './StopListItem';

export default function (props) {
  const { t } = useTranslation();
  const [filteredStops, setFilteredStops] = useState<Stop[]>([]);
  const location = useSelector(selectLocation)
  useEffect(() => {
    if(location) {
        setFilteredStops(getClosestStops(location, MockedStops))
    }
}, [location])

  return (
  <SafeAreaView>
    <Text variant="titleMedium">{t('homeScreen.stopsList.closest')}</Text>
    <FlatList
        data={filteredStops}
        renderItem={({ item }) => <StopListItem stop={item}></StopListItem>}
        keyExtractor={(item) => `${item.id}`}
        />
  </SafeAreaView>
  )

}
