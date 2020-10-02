/**
 * QUESTÃO 4: Implemente uma função para inverter a ordem dos elementos de uma lista
 * simplesmente encadeada
 */

import Lista from "../Lista";

export default class InverterLista{

    inverter(list){
        let aux = new Lista();
        while(list.size() !== 0){
            aux.add(list.removeBeginning())
        }

        list.head.proximo = aux.head.proximo;
    }
}