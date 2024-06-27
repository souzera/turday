import axios from "axios";
import { Pointer } from "../../components/MapComponent/interface";

export async function getAddress(pointer: Pointer) {
  return await axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pointer.latitude},${pointer.longitude}&key=${process.env.EXPO_PUBLIC_GEOCODING_API_KEY}`
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function getCoordinates(address: string) {
  return await axios.get("https://maps.googleapis.com/maps/api/geocode/json")
}
