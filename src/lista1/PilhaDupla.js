class Pilha{
    constructor(size = 10){
        this.maxSize = size,
        this.dados = [],
        this.topoA = -1,
        this.topoB = size;
    }

    pushA(dado){
        if(this.isFull()){
            throw new Error("Overflow")
        }
        this.dados[++this.topo] = dado;
    }

    pushB(dado){
        if(this.isFull()){
            throw new Error("Overflow")
        }
        this.dados[--this.topo] = dado;
    }

    popA(){
        if(this.isEmptyA()){
            throw new Error("Underflow");
        }
        return this.dados[this.topo--];
    }

    popB(){
        if(this.isEmptyB()){
            throw new Error("Underflow");
        }
        return this.dados[this.topo++];
    }

    isEmptyA(){
        return this.topoA === -1;
    }

    isEmptyB(){
        return this.topoB === this.maxSize;
    }

    isFull(){
        return this.topoA+this.topoB === this.maxSize;
    }

    clear(){
        this.topoA = -1;
        this.topoB = this.maxSize;
    }

    toString(){
        if(this.isEmpty()){
            return "[]";
        }
        let pilha = "[";
        for(let i = 0; i<this.topo+1; i++){
            pilha += this.dados[i]+(i !== this.topo ? ", " : "");
        }
        return pilha+"]";
    }
}

export default Pilha;