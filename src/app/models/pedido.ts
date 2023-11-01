import { AbstratcEntity } from "./abstratc-entity";
import { Envio } from "./envio";

export class Pedido  extends AbstratcEntity{

    total!: number;
    pagamento!: string;
    endereco!: string;
    cep!: string;
    carrinho!: string;
    envio!: Envio;
}
