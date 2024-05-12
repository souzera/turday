import axios from "axios";
import options from "../constants/options";

export async function getPontosTuristicos() {
  return await axios
    .get(`${options.API_URL}pontoturistico/`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
      return "❌ ERROR: " + error;
    });
}
