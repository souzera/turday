import axios from "axios";
import options from "../constants/options";

export async function getGuias() {
  return await axios
    .get(`${options.API_URL}guia/`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
      return "❌ ERROR: " + error;
    });
}

export async function getGuiaById(id: string) {
  return await axios
    .get(`${options.API_URL}guia/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
      return "❌ ERROR: " + error;
    });
}
