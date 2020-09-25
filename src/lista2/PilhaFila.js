import Pilha from "../Pilha";

class PilhaFila{
    constructor(size = 10){
        this.pilha =  new Pilha(size),
        this.aux =  new Pilha(size)
    }

    enqueue(dado){
        if(this.isFull()){
            throw new Error("Overflow");
        }else{
            this.pilha.push(dado);
        }
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("Underflow");
        }else{
            while(this.size() != 1){
                this.aux.push(this.pilha.pop());
            }
            let temp = this.pilha.pop();
            while(this.aux.size() != 0){
                this.enqueue(this.aux.pop());
            }

            return temp;
        }
    }

    isEmpty(){
        return this.pilha.isEmpty();
    }

    isFull(){
        return this.pilha.isFull();
    }

    size(){
        return this.pilha.size();
    }

    front(){
        while(this.pilha.size() != 0){
            this.aux.push(this.pilha.pop());
        }
        let temp = this.aux.top();
        while(this.aux.size() != 0){
            this.enqueue(this.aux.pop());
        }
        return temp;
    }

    clear(){
        return this.pilha.clear();
    }
}

export default PilhaFila;