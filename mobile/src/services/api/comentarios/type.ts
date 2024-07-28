import { Usuario } from "../usuario/type";

export type Comentario = {
    id: string;
    turista: Usuario;
    texto: string;
    data: Date;
}

export type ComentarioDTO = {
    id: string;
    turista_id: string;
    texto: string;
    data: Date;
}

export type ComentarioRequest = {
    turista_id: string;
    texto: string;
}