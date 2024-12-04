import { EstrategiaPagamento } from "./EstrategiaPagamento";

export class PagamentoPayPal implements EstrategiaPagamento {
  pagar(valor: number): void {
    console.log(`Pago ${valor} usando PayPal`);
  }
}
