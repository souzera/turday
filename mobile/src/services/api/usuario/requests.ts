import axios from "axios";
import options from "../constants/options";
import { Usuario } from "./type";

export async function getTuristaById(turistaId: string) {
  return await axios
    .get(`${options.API_URL}turista/${turistaId}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function getTuristaByToken(token: string) {
  return await axios
    .get(`${options.API_URL}turista/?token=${token}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function createUsuario(usuario: Usuario) {
  return await axios
    .post(`${options.API_URL}turista/`, usuario, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
