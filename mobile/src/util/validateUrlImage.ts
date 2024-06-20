import options from "../services/api/constants/options";

// validando url de uploads de imagens do banco de dados
export function validateUrlImage(url: string) {
    if (!url) {
        return "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
    }
    return url.startsWith("http") ? url : `${options.API_URL}${url.substring(1)}`;
}