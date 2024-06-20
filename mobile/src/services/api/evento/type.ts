import { Imagem } from "../imagem/type";
import { Info } from "../info/type";

export type Evento = {
    id: string;
    nome: string;
    descricao?: string;
    abertura?: Date;
    encerramento?: Date;
    imagens?: Imagem[];
    infos?: Info[];
}