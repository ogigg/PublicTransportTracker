import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Menu, Divider, Button, Dialog, Portal, Text, RadioButton } from "react-native-paper";
import { useDispatch } from "react-redux";

export const ThemePicker = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('light');
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const dispatch = useDispatch();
  const onThemePicked =(themeName) => {
    console.log(themeName);
    setSelectedValue(themeName);
    hideDialog();
  }
    return (
        <View>
        <Menu.Item leadingIcon='brightness-6' onPress={showDialog} title={t('settingsScreen.theme.label')} style={{ maxWidth: '100%' }}></Menu.Item>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>{t('settingsScreen.theme.title')}</Dialog.Title>
            <Dialog.Content>
                <RadioButton.Group onValueChange={value => onThemePicked(value)} value={selectedValue}>
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
