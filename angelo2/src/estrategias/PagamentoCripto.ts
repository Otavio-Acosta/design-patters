import { EstrategiaPagamento } from "./EstrategiaPagamento";

export class PagamentoCripto implements EstrategiaPagamento {
  pagar(valor: number): void {
    console.log(`Pago ${valor} usando Criptomoeda`);
  }
}
