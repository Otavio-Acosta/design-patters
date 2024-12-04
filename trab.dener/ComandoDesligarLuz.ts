import { Command } from './Command';
import { Luz } from './Luz';

export class ComandoDesligarLuz implements Command {
    constructor(private luz: Luz) {}

    executar(): void {
        this.luz.desligar();
    }

    desfazer(): void {
        this.luz.ligar();
    }
}
