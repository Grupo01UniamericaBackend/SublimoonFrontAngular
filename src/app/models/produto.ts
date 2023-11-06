import { Categoria } from "../enums/categoria";
import { Cor } from "../enums/cor";
import { AbstratcEntity } from "./abstratc-entity";

export class Produto extends AbstratcEntity {

    nome!:string;
    categoria!: string;
    cor!: Cor;
    descricao!: string;
    imagem!: string;
    preco!: string;
    quantidade!: number;
    mediaAvaliacao!: number;
    tamanho!: string;
}
