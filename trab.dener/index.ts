import { Luz } from './Luz';
import { ComandoLigarLuz } from './ComandoLigarLuz';
import { ComandoDesligarLuz } from './ComandoDesligarLuz';
import { ControleRemoto } from './ControleRemoto';

const luz = new Luz();
const comandoLigarLuz = new ComandoLigarLuz(luz);
const comandoDesligarLuz = new ComandoDesligarLuz(luz);

const controleRemoto = new ControleRemoto();

controleRemoto.pressionarBotao(comandoLigarLuz); // A luz está ACESA
controleRemoto.pressionarBotao(comandoDesligarLuz); // A luz está APAGADA

controleRemoto.pressionarDesfazer(); // A luz está ACESA
controleRemoto.pressionarDesfazer(); // A luz está APAGADA
