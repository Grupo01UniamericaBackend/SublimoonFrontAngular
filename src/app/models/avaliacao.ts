import { AbstratcEntity } from "./abstratc-entity";
import { Cliente } from "./cliente";
import { Produto } from "./produto";

export class Avaliacao extends AbstratcEntity{
    
    nota!: number;
    comentario!: string;
    cliente!: Cliente;
    produto!: Produto;

}
