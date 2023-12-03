import { AbstratcEntity } from "./abstratc-entity";
import { Carrinho } from "./carrinho";
import { Envio } from "./envio";

export class Pedido  extends AbstratcEntity{

    total!: number;
    pagamento!: string;
    endereco!: string;
    cep!: string;
    carrinho!: Carrinho;
    envio!: Envio;
}
