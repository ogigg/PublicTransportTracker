import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Menu, Divider, Button, Dialog, Portal, Text, RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../../../store/settings/settingsSlice";
import { ThemeOption } from "../../../models/settings";

export const ThemePicker = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<ThemeOption>('light');
  const theme = useSelector(selectTheme);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedValue(theme);
  }, [theme])
  
  const onThemePicked =(themeName: ThemeOption) => {
    setSelectedValue(themeName);
    dispatch(setTheme(themeName))
    hideDialog();
  }


    return (
        <View>
        <Menu.Item leadingIcon='brightness-6' onPress={showDialog} title={t('settingsScreen.theme.label')} style={{ maxWidth: '100%' }}></Menu.Item>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>{t('settingsScreen.theme.title')}</Dialog.Title>
            <Dialog.Content>
                <RadioButton.Group onValueChange={(value: ThemeOption) => onThemePicked(value)} value={selectedValue}>
                    <RadioButton.Item label={t('settingsScreen.theme.light')} value="light" />
                    <RadioButton.Item label={t('settingsScreen.theme.dark')} value="dark" />
                </RadioButton.Group>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>{t('buttons.cancel')}</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    );
  };
