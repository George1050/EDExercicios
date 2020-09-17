import Pilha from "./Pilha";
class Inversor{
    constructor(){

    }

    inversor(palavra){
        let pilha = new Pilha(palavra.length)
        let textoInvertido = "";
        for(let i=0; i < palavra.length; i++){
            pilha.push(palavra.charAt(i))
        }
        while(!pilha.isEmpty()){
            textoInvertido += pilha.pop(); 
        }
        return textoInvertido;
    }

}

export default Inversor;