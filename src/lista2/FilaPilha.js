import Fila from "../Fila";
class Pilhafila{
    constructor(t = 10){
        this.fila = new Fila(t);
        this.aux = new Fila(t);
    }

    push(newData) {
      if (this.isFull()) {
        throw new Error("Overflow");
      }else{
        this.fila.enqueue(newData);
      }
    }
    
    pop() {
      if (this.isEmpty()) {
        throw new Error("Underflow");
      }else {
        while(this.fila.size() != 1){
          this.aux.enqueue(this.fila.dequeue());
        }

        while(this.aux.size() != 0){
          this.fila.enqueue(this.aux.dequeue());
        }

        return this.fila.dequeue();
      }
    }

    isEmpty(){
        return this.fila.isEmpty();
    }

    isFull(){
        return this.fila.isFull();
    }

    size(){
        return this.fila.size();
    }

    top(){
        let aux = (this.pop());
        let temp = aux;
        this.push(aux);
        return temp;
    }

    clear(){
        this.fila.clear();
    }

}

export default Pilhafila;