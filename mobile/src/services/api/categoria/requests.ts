import axios from "axios";
import options from "../constants/options";

export async function getCategorias() {
  return await axios
    .get(`${options.API_URL}categoria/`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
      return "❌ ERROR: " + error;
    });
}