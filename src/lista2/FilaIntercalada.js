import Fila from "../Fila";

export default class FilaIntercalada{
    intercalada(fila1, fila2){
        let aux = new Fila(fila2.size()+fila1.size());
        while(true){
            if(fila1.isEmpty() && fila2.isEmpty()){
                break;
            }if(!fila1.isEmpty()){
                aux.enqueue(fila1.dequeue());
            }if(!fila2.isEmpty()){
                aux.enqueue(fila2.dequeue());
            }
        }
        return aux.toString();
    }
}