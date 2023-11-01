import { AbstratcEntity } from "./abstratc-entity";

export class Produto extends AbstratcEntity {

    nome!:string;
    categoria!: string;
    cor!: string;
    descricao!: string;
    imagem1!: string;
    preco!: string;
    quantidade!: number;
    mediaAvaliacao!: number;
    tamanho!: string;
}
