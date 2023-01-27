import { LatLng } from "./position";

export type ThemeOption = 'light' | 'dark';

export interface Settings {
    theme: ThemeOption;
    location: LatLng
}