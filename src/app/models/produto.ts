import { AbstratcEntity } from "./abstratc-entity";

export class Produto extends AbstratcEntity {

    nome!:string;
    categoria!: string;
    cor!: string;
    descricao!: string;
    imagem!: string;
    preco!: string;
    quantidade!: number;
    mediaAvaliacao!: number;
    tamanho!: string;
}
