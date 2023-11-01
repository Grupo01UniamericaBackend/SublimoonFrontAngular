import { AbstratcEntity } from "./abstratc-entity";
import { Produto } from "./produto";

export class Item extends AbstratcEntity {

    produto!: Produto;    
    quantidade!: number;
    valor!: number;
    valorUnit!: number;
    valorTotal =  this.valorUnit * this.quantidade;

}
