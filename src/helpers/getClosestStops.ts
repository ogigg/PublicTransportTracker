import { LatLng } from "../models/position";
import { Stop } from "../models/stop";

// define local constants for frequently used functions
const asin = Math.asin
const cos = Math.cos
const sin = Math.sin
const PI_180 = Math.PI / 180

function hav(x) {
  const s = sin(x / 2)
  return s * s
}

function relativeHaversineDistance(lat1, lon1, lat2, lon2) {
  const aLatRad = lat1 * PI_180
  const bLatRad = lat2 * PI_180
  const aLngRad = lon1 * PI_180
  const bLngRad = lon2 * PI_180

  const ht = hav(bLatRad - aLatRad) + cos(aLatRad) * cos(bLatRad) * hav(bLngRad - aLngRad)
  // since we're only interested in relative differences,
  // there is no need to multiply by earth radius or to sqrt the squared differences
  return asin(ht)
}

export const getClosestStops = (userPosition: LatLng, stops: Stop[]): Stop[] => {
    const sorted = [...stops].sort((a, b) => relativeHaversineDistance(a.lat, a.lng, userPosition.lat, userPosition.lng) - relativeHaversineDistance(b.lat, b.lng, userPosition.lat, userPosition.lng))
    return sorted
}