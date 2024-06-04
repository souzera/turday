import options from "../services/api/constants/options";

// validando url de uploads de imagens do banco de dados
export function validateUrlImage(url: string) {
    return url.startsWith("http") ? url : `${options.API_URL}${url.substring(1)}`;
}