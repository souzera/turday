import { Cidade } from "../cidade/type";
import { Imagem } from "../imagem/type";
import { Info } from "../info/type";

export type PontoTuristico = {
    id: string;
    nome: string;
    cidade: Cidade;
    descricao: string;
    endereco: string;
    latitude: number;
    longitude: number;
    infos: Info[];
    imagens: Imagem[];
};