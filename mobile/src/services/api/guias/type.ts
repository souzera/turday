import { Cidade } from "../cidade/type";
import { Imagem } from "../imagem/type";

export type Guia = {
    id: string;
    nome: string;
    cidade: Cidade;
    contato: string;
    rating: number;
    avatar: Imagem;
};
