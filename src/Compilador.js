import Pilha from "./Pilha";

export default function verficarSequencia(sequencia){
    let p = new Pilha(sequencia.length);
    for(let i = 0; i < sequencia.length; i++){
        if(sequencia[i] === "[" || sequencia[i] === "("){
            p.push(sequencia[i]);
        }else if(sequencia[i] === ")" || sequencia[i] === "]"){
            if(p.top() === "[" && sequencia[i] !== "]" || p.top() === "(" && sequencia[i] !== ")"){
                return false;
            }
            p.pop();
        }else{
            return "caracter invalido!";
        }
    }
    return p.isEmpty();
}