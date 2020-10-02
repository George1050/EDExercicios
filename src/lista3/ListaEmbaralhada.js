import Lista from "../../src/Lista";

class ListaEmbaralhada{
    embaralhar(lista){
        let max = lista.size();
        let min = 0;
        let aux = new Lista();

        while(!lista.isEmpty()){
            let position = Math.floor(Math.random() * (max - min + 1)) + min;
            aux.addAt(position, lista.removeBeginning());        
        }
        lista.head.proximo = aux.head.proximo;
    }
}

export default ListaEmbaralhada;