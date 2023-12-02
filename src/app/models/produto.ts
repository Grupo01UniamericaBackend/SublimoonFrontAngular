import { NgbCarousel } from "@ng-bootstrap/ng-bootstrap";
import { Categoria } from "../enums/categoria";
import { Cor } from "../enums/cor";
import { AbstratcEntity } from "./abstratc-entity";

export class Produto extends AbstratcEntity {

    nome!:string;
    categoria!: string;
    cor!: Cor;
    descricao!: string;
    imagem!: string;
    preco!: number;
    quantidade!: number;
    mediaAvaliacao!: number;
    tamanho!: string;
    carousel!: NgbCarousel;
}
