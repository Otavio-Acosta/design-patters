import { PagamentoCartaoCredito } from "./estrategias/PagamentoCartaoCredito";
import { PagamentoPayPal } from "./estrategias/PagamentoPayPal";
import { PagamentoCripto } from "./estrategias/PagamentoCripto";
import { ContextoPagamento } from "./contexto/ContextoPagamento";

// Criando as estratégias
const estrategiaCartaoCredito = new PagamentoCartaoCredito();
const estrategiaPayPal = new PagamentoPayPal();
const estrategiaCripto = new PagamentoCripto();

// Criando o contexto com uma estratégia inicial
const contextoPagamento = new ContextoPagamento(estrategiaCartaoCredito);

// Executando o pagamento com o Cartão de Crédito
contextoPagamento.executarPagamento(100);  // Pago 100 usando Cartão de Crédito

// Alterando para a estratégia do PayPal e executando o pagamento
contextoPagamento.setEstrategia(estrategiaPayPal);
contextoPagamento.executarPagamento(200);  // Pago 200 usando PayPal

// Alterando para a estratégia da Criptomoeda e executando o pagamento
contextoPagamento.setEstrategia(estrategiaCripto);
contextoPagamento.executarPagamento(300);  // Pago 300 usando Criptomoeda
