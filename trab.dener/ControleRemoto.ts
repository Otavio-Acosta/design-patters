import { Command } from './Command';

export class ControleRemoto {
    private historicoDeComandos: Command[] = [];

    pressionarBotao(comando: Command): void {
        comando.executar();
        this.historicoDeComandos.push(comando);
    }

    pressionarDesfazer(): void {
        const comando = this.historicoDeComandos.pop();
        if (comando) {
            comando.desfazer();
        }
    }
}
