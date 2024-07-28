export type Usuario = {
    id: string;
    login:string;
    email: string;
    token: string;
    avatar: string;
}


export type UsuarioDTO = {
    id?: string;
    login?:string;
    email?: string;
    token?: string;
    avatar?: string;
}