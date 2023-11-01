import { AbstratcEntity } from "./abstratc-entity";
import { Cliente } from "./cliente";
import { Produto } from "./produto";

export class Favorito  extends AbstratcEntity{


    produtos: Produto[] = [];

    cliente!: Cliente ;

}
