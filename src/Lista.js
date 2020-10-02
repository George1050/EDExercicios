class Node{
   constructor(newDado){
       this.dado = newDado;
       this.proximo = null
   }
}


class Lista{
    constructor(){
        this.head = new Node(null);
    }

    add(newDado){
        let novo_no = new Node(newDado);

        if(!this.isEmpty()){
            novo_no.proximo = this.head.proximo;
            this.head.proximo = novo_no;
        }else{
            this.head.proximo = novo_no;
        }

    }

    append(newDado){
        let novo_no = new Node(newDado);

        if(this.isEmpty()){
            this.head.proximo = novo_no;
        }else{
            let aux = this.head.proximo;

            while(aux.proximo !== null){
                aux = aux.proximo;
            }
            aux.proximo = novo_no;
        }
    }

    isEmpty(){
        return this.head.proximo === null;
    }

    removeBeginning(){
        if(this.isEmpty()){
            throw new Error("A lista está vazia.");
        }else{
            let aux =  this.head.proximo;
            this.head.proximo = aux.proximo;

            return aux.dado;
        }
    }

    removeEnd(){
        let temp_a = this.head;
        let temp_b = this.head.proximo;

        while(temp_b.proximo !== null){
            temp_a = temp_b;
            temp_b = temp_b.proximo;
        }
        temp_a.proximo = null;
        return temp_a.dado;
    }

    size(){
        let count = 0;
        let aux = this.head.proximo;

        while(aux !== null){
            aux = aux.proximo;
            count++;
        }

        return count;
    }

    clear(){
        this.head.proximo = null;
    }

    toString() {
		let tmp = this.head.proximo;
		let texto = "";

		while (tmp !== null) {
			texto += tmp.dado + (tmp.proximo ? "->" : "");
			tmp = tmp.proximo;
		}

		return texto;
    }

    first(){
        return this.head.proximo;
    }
    
    last(){
        let aux = this.head.proximo;
        while(aux.proximo !== null){
            aux = aux.proximo;
        }

        return aux.dado;
    }

    addAt(posicao, dado) {
		if (posicao >= this.size()) {
			this.append(dado);
		} else {
			if (posicao <= 0) {
				this.add(dado);
			} else {
				let novo_no = new Node(dado);
				let i = 0;

				let aux_a = this.head;
				let aux_b = this.head.proximo;

				while (i != posicao) {
					aux_a = aux_b;
					aux_b = aux_b.proximo;
					i++;
				}
				aux_a.proximo = novo_no;
				novo_no.proximo = aux_b;
			}
		}
	}

    search(dado) {
		if (this.isEmpty()) {
			return false;
		} else {
			let tmp = this.head.proximo;
			while (tmp !== null) {
				if (tmp.dado === dado) {
					return true;
				}
				//iteração
				tmp = tmp.proximo;
			}
			return false;
		}
	}
}

export default Lista;