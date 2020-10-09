import Lista from "../Lista";

class ListaSub{
    constructor(){
        this.lista = new Lista();
    }

    add(texto){
        this.lista.clear();
        for(let i = 0; i < texto.length; i++){
            this.lista.add(texto[i]);
        }

        return this.lista.toString();
    }

    subString(x, y){
        let aux = new Lista();
        if(this.lista.isEmpty()){
            return "Vazia"
        }
        if(y > this.lista.size()){
            y = this.lista.size();
        }if(x < 0){
            x = 0;
        }
        while(x < y){
            aux.add(this.lista.searchAt(x));
            x++;
        }

        return aux.toString;
    }
}