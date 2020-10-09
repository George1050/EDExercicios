class Deque{
    constructor(size = 10){
        this.dados = [],
        this.maxSize = size,
        this.fim = 0,
        this.inicio = 0
    }

    enqueueIn(dado){
        if(this.isFull()){
            throw new Error("Fila está cheia.");
        }else{
            if(this.inicio > 0){
                this.dados[--this.inicio] = dado;
            }
            let aux = this.dados;
            while(!(this.isEmpty())){
                this.dequeueFi();
            }
            this.enqueueFi(dado);
            for(let i = 0; i < aux.length; i++){
                this.enqueueFi(aux[i]);
            }
        }
    }

    dequeueIn(){
        if(this.isEmpty()){
            throw new Error("Fila está vazia.");
        }else{
            return this.dados[this.inicio++];
        }
    }

    enqueueFi(dado){
        if(this.isFull()){
            throw new Error("Fila está cheia.");
        }else{
            this.dados[this.fim++] = dado;
        }
    }

    dequeueFi(){
        if(this.isEmpty()){
            throw new Error("Fila está vazia.");
        }else{
            return this.dados[this.fim--];
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
}