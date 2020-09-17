class Pilha{
    constructor(size = 10){
        this.maxSize = size,
        this.dados = [],
        this.topo = -1
    }

    push(dado){
        if(this.isFull()){
            throw new Error("Overflow")
        }
        this.dados[++this.topo] = dado;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Underflow");
        }
        return this.dados[this.topo--];
    }

    isEmpty(){
        return this.size() === 0;
    }

    isFull(){
        return this.size() === this.maxSize;
    }

    size(){
        return this.topo+1;
    }

    top(){
        return this.dados[this.topo];
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