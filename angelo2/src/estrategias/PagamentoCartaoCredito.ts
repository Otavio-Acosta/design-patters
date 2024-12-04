import { EstrategiaPagamento } from "./EstrategiaPagamento";

export class PagamentoCartaoCredito implements EstrategiaPagamento {
  pagar(valor: number): void {
    console.log(`Pago ${valor} usando Cartão de Crédito`);
  }
}
