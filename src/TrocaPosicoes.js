import Pilha from "./Pilha";

class Troca{
    constructor(size = 10){
        this.pilha = new Pilha(size);
    }

    trocaPosicoes(){
        let aux = new Pilha(this.pilha.maxSize);
        let pilhaFinal = new Pilha(this.pilha.maxSize);

        pilhaFinal.push(this.pilha.pop());
        while (this.pilha.size() != 1) {
            aux.push(this.pilha.pop())
        }
        while(aux.size() >= 1){
            pilhaFinal.push(aux.pop())
        }
        pilhaFinal.push(this.pilha.pop())
        this.pilha = pilhaFinal;
        return pilhaFinal.toString();
    }

}

export default Troca;