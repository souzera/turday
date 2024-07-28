import axios from "axios";
import options from "../constants/options";
import { Comentario, ComentarioRequest } from "./type";

/**
 * 1 - criar o comentário
 * 2 - adicionar o comentário a entidade (ponto turístico, servico, evento)
 * 3 - retornar a entidade
 */

export async function criarComentario(usuario: string, texto: string) {
  const data: ComentarioRequest = {
    turista_id: usuario,
    texto: texto,
  };

  let responseComentario = await axios
    .post(`${options.API_URL}comentario/`, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
      return "❌ ERROR: " + error;
    });

  return responseComentario;
}

export async function addComentario(
  type_entity: string,
  id_entity: string,
  id_usuario: string,
  value: string
) {
  // criar comentario

  const comentario = await criarComentario(id_usuario, value);

  // @ts-ignore
  if (comentario.status !== 201) {
    return "deu BO";
  }

  // @ts-ignore
  const id_comentario = comentario.data.id;

  switch (type_entity) {
    case "pontoTuristico":
      return addToPontoTuristico(id_entity, id_comentario);
    case "servico":
      return addToServico(id_entity, id_comentario);
    case "evento":
      return addToEvento(id_entity, id_comentario);
  }
}

async function addToPontoTuristico(id_ponto: string, id_comentario: string) {
  const endpoint = `${options.API_URL}pontoturistico/${id_ponto}/add_comment/`;
  return await axios
    .post(endpoint, { comment_id: id_comentario })
    .then((response) => {
      console.log("ADD-COMMENT Response", response);
      return response;
    })
    .catch((error) => {
      return error;
    });
}

async function addToServico(id_servico: string, id_comentario: string) {
  const endpoint = `${options.API_URL}servico/${id_servico}/add_comment/`;
  return await axios
    .post(endpoint, { comment_id: id_comentario })
    .then((response) => {
      console.log("ADD-COMMENT Response", response);
      return response;
    })
    .catch((error) => {
      return error;
    });
}

async function addToEvento(id_evento: string, id_comentario: string) {
  const endpoint = `${options.API_URL}evento/${id_evento}/add_comment/`;

  return await axios
    .post(endpoint, { comment_id: id_comentario })
    .then((response) => {
      console.log("ADD-COMMENT Response", response);
      return response;
    })
    .catch((error) => {
      return error;
    });
}
