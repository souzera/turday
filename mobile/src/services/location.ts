import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

export async function requestLocationPermission() {
  const { granted } = await requestForegroundPermissionsAsync();
  if (granted) {
    const position = await getCurrentPositionAsync().then(({ coords }) => {
      console.log(`Permission granted! ${coords.latitude}, ${coords.longitude}`);
      return coords;
    });

    return position;
  }

  return null;
}
