import { Zone } from "./zone";

export interface Stop { 
    id: number;
    code: string;
    name: string;
    lat: number;
    lng: number;
    zoneId: Zone
}