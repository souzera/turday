import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

export async function requestLocationPermission() {
  const { granted } = await requestForegroundPermissionsAsync();
  return granted ? await getCurrentPositionAsync() : null;
}
