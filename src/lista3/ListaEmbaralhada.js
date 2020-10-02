import Lista from "../../src/Lista";

class ListaEmbaralhada{
    embaralhar(lista){
        let max = lista.size()+1;
        let min = 0;
        let aux = new Lista();

        while(lista.size() !== 0){
            let position = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(position);
            aux.addAt(position, lista.removeEnd());        
        }
        console.log(aux.toString());
        lista.head.proximo = aux.head.proximo;
    }
}

export default ListaEmbaralhada;