import { View, Text } from "react-native"
import { useTheme } from "react-native-paper";
import { Zone } from "../../models/zone"

interface ZoneIconProps {
    zone: Zone
}
export const ZoneIcon = ({ zone }: ZoneIconProps) => {
    const theme = useTheme();
    let backgroundStyle = '';
    switch (zone) {
        case 'A':
            backgroundStyle = 'bg-green-500';
            break;
        case 'B':
            backgroundStyle = 'bg-rose-600';
            break;
        case 'C':
            backgroundStyle = 'bg-amber-400';
            break;
        }

    return (
    <View style={{ borderWidth: 1, borderColor: theme.colors.onBackground }}
        className={`${backgroundStyle} rounded border-solid h-5 w-5 flex items-center justify-center`}>
        <Text className="color-white font-bold text-[13px]">{zone}</Text>
    </View>
    );
}