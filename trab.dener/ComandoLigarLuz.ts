import { Command } from './Command';
import { Luz } from './Luz';

export class ComandoLigarLuz implements Command {
    constructor(private luz: Luz) {}

    executar(): void {
        this.luz.ligar();
    }

    desfazer(): void {
        this.luz.desligar();
    }
}
