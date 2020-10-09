class Fila{
    constructor(size = 10){
        this.dado = [],
        this.maxSize = size,
        this.fim = 0,
        this.inicio = 0
    }

    enqueue(dado){
        if(this.isFull()){
            throw new Error("Fila está cheia.");
        }else{
            this.dado[this.fim++] = dado;
        }
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("Fila está vazia.");
        }else{
            return this.dado[this.inicio++];
        }
    }

    isEmpty(){
        return this.inicio === this.fim;
    }  
    
    isFull(){
        return this.size() === this.maxSize;
    }

    size(){
        return this.fim - this.inicio;
    }

    front(){
        if(this.isEmpty()){
            return "Fila vazia";
        }
        return this.dado[this.inicio];
    }

    clear(){
        this.inicio = this.fim; 
    }

    toString(){
        if(this.isEmpty()){
            return "[]";
        }else{
            let temp = "[ ";
            for(let i = this.inicio; i < this.fim; i++){
                temp += this.dado[i]+" ";
            }
            temp+="]";
            return temp;
        }
    }
}

export default Fila;