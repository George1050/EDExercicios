/**
 * QUESTÃO 1: Implemente uma pilha de tamanho dinâmico usando uma lista simplesmente
 * encadeada.
 */

import Lista from "../Lista";

class PilhaDinamica{
    constructor(){
        this.lista = new Lista();
    }

    push(dado){
        this.lista.add(dado);
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Underflow");
        }else{
            return this.lista.removeBeginning();
        }
    }

    isEmpty(){
        return this.lista.isEmpty();
    }

    size(){
        return this.lista.size();
    }

    top(){
        return this.lista.first().dado;
    }

    clear(){
        this.lista.clear();
    }
}

export default PilhaDinamica;