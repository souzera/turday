import axios from "axios";
import options from "../constants/options";
import { Like } from "./type";

export async function createLike(id_user: string) {
  return await axios.post(`${options.API_URL}like/`, { turista_id: id_user, status:true }).then((response) => response.data).catch((error) => {return error;});
}

export async function toggleLike(
  id_entity: string,
  type: string,
  id_user: string
) {
  const like = await getLikeByUser(id_user).then((response) => response[0]).catch((error) => {return error;});

  switch (type) {
    case "pontoTuristico":
      toggleInPontoTuristico(id_entity, like);
      break;
    case "servico":
      toggleInServico(id_entity, like);
      break;
    case "evento":
      toggleInEvento(id_entity, like);
      break;
    case "guia":
      toggleInGuia(id_entity, like);
      break;
  }
}

async function getLikeByUser(id_user: string) {
  return await axios
    .get(`${options.API_URL}like/?turista=${id_user}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error;
    });
}

async function toggleInPontoTuristico(id: string, like: Like) {
  /**
   * params:
   * - id: id do ponto turístico
   * - like: like do usuário
   */

  return await axios
    .post(`${options.API_URL}pontoturistico/${id}/toggle_like/`, {
      like_id: like.id,
    })
    .then((response) => response.data)
    .catch((error) => {
      return error;
    });
}

async function toggleInServico(id: string, like: Like) {
  /**
   * params:
   * - id: id do serviço
   * - like: like do usuário
   */

  return await axios
    .post(`${options.API_URL}servico/${id}/toggle_like/`, { like_id: like.id })
    .then((response) => response.data)
    .catch((error) => {
      return error;
    });
}

async function toggleInEvento(id: string, like: Like) {
  /**
   * params:
   * - id: id do evento
   * - like: like do usuário
   */

  return await axios
    .post(`${options.API_URL}evento/${id}/toggle_like/`, { like_id: like.id })
    .then((response) => response.data)
    .catch((error) => {
      return error;
    });
}

async function toggleInGuia(id: string, like: Like) {
  /**
   * params:
   * - id: id do guia
   * - like: like do usuário
   */

  return await axios
    .post(`${options.API_URL}guia/${id}/toggle_like/`, { like_id: like.id })
    .then((response) => response.data)
    .catch((error) => {
      return error;
    });
}


// verificando se o usuario atual curtiu a entidade
export async function checkLike(id_entity: string, type: string, id_user: string) {
  const like = await getLikeByUser(id_user).then((response) => response[0]).catch((error) => {return error;});

  switch (type) {
    case "pontoTuristico":
      return await checkLikeInPontoTuristico(id_entity, like);
    case "servico":
      return await checkLikeInServico(id_entity, like);
    case "evento":
      return await checkLikeInEvento(id_entity, like);
    case "guia":
      return await checkLikeInGuia(id_entity, like);
  }
}


async function checkLikeInPontoTuristico(id: string, like: Like) {

  /**
   * params:
   * - id: id do ponto turístico
   * - like: like do usuário
   */


  console.log(`${options.API_URL}pontoturistico/${id}`)
  const likes = await axios.get(`${options.API_URL}pontoturistico/${id}/`).then((response) => {
    return response.data.likes.map((l:any) => l.id)
  }).catch((error) => {
    return error;
  })

  return likes.includes(like.id)
}

async function checkLikeInServico(id: string, like: Like) {
  console.log(id, like)
}

async function checkLikeInEvento(id: string, like: Like) {
  console.log(id, like)
}

async function checkLikeInGuia(id: string, like: Like) {
  console.log(id, like)
}

