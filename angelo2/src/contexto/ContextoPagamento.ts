import { EstrategiaPagamento } from "../estrategias/EstrategiaPagamento";

export class ContextoPagamento {
  private estrategia: EstrategiaPagamento;

  constructor(estrategia: EstrategiaPagamento) {
    this.estrategia = estrategia;
  }

  setEstrategia(estrategia: EstrategiaPagamento): void {
    this.estrategia = estrategia;
  }

  executarPagamento(valor: number): void {
    this.estrategia.pagar(valor);
  }
}
