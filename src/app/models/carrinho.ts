import { AbstratcEntity } from "./abstratc-entity";
import { Cliente } from "./cliente";
import { Item } from "./item";

export class Carrinho extends AbstratcEntity{

    desconto!:number;
    subTotal!:number;
    cliente!: Cliente;
    item: Item[] = [];
}
