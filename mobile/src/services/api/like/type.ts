import { Usuario } from "../usuario/type";

export type Like = {
    id: string;
    usuario: Usuario;
    status: boolean;
}