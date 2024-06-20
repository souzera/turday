import axios from "axios";
import options from "../constants/options";

export async function getEventos() {
  return await axios
    .get(`${options.API_URL}evento`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return "❌ ERROR: " + error;
    });
}

export async function getEvento(id: string) {
  return await axios
    .get(`${options.API_URL}evento/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return "❌ ERROR: " + error;
    });
}
