import PilhaDinamica from "../../src/lista3/PilhaDinamica";

class Binarios{
    constructor(){
        this.pilha = new PilhaDinamica();
    }

    converter(num){
        while(num != 1){
            let resto = num%2;
            this.pilha.push(resto);
            num = Math.trunc(num/2);
        }
        this.pilha.push(num);

        let result = "";
        while(!(this.pilha.isEmpty())){
            result = result+""+this.pilha.pop(); 
        }
        return result;
    }
}

export default Binarios;