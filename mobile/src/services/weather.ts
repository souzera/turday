import axios from "axios";

export async function getWeather(lat: string, lon: string) {
  return await axios.get(`https://api.weatherapi.com/v1/current.json?q=${lat},${lon}&key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}`).catch((error) => {return error});
}
