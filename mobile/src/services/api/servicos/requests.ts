import axios from "axios";
import options from "../constants/options";

export async function getServicos() {
  return await axios
    .get(`${options.API_URL}servico/`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return "❌ ERROR: " + error;
    });
}

export async function getServico(id: string) {
  return await axios
    .get(`${options.API_URL}servico/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return "❌ ERROR: " + error;
    });
}
