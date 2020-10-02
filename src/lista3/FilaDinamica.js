/**
 * QUESTÃO 2: Implemente uma fila de tamanho dinâmico usando uma lista simplesmente
    encadeada.
 */

import Lista from "../Lista";

class FilaDinamica{
    constructor(){
        this.lista = new Lista();
    }

    enqueue(dado){
        this.lista.append(dado);
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("Fila está vazia.");
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

    front(){
        return this.lista.first().dado;
    }

    clear(){
        this.lista.clear();
    }

    toString(){
        return this.lista.toString();
    }
}


export default FilaDinamica;