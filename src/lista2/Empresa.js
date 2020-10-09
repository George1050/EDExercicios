import FilaCircular from "../FilaCircular";

class Empresa{
    constructor(size = 10){
        this.agenda = new FilaCircular(size),
        this.fila = new FilaCircular(size)
    }

    agendar(caminhao){
        if(!(this.fila.isFull())){
            this.fila.enqueue(caminhao);
        }else{
            if(this.agenda.isFull()){
                throw new Error("Não podemos agendar no momento, aguarde!");
            }
            this.agenda.enqueue(caminhao);
        }
    }

    atender(){
        if(this.fila.isEmpty()){
            throw new Error("Não a caminhões a espera de atendimento!");
        }else{
            let aux = this.fila.dequeue();
            this.fila.enqueue(this.agenda.dequeue());
            return aux;
        }
    }

    toString(){
        let temp = "Fila [ ";
        if(this.fila.isEmpty()){
            return "[ ]";
        }else{
            if (this.fila.inicio <= this.fila.fim) {
                for (let i = this.fila.inicio; i <= this.fila.fim; i++) {
                    temp += ""+this.fila.dados[i];
                }
            } else {
                for (let i = this.fila.inicio; i < this.size; i++) {
                    temp += ""+this.fila.dados[i];
                }
                for (let i = 0; i <= this.fila.fim; i++) {
                    temp += ""+this.fila.dados[i];
                }
            }
            temp += " ]";

            if(!(this.agenda.isEmpty())){
                temp += "Agendado [ "
                if (this.agenda.inicio <= this.agenda.fim) {
                    for (let i = this.agenda.inicio; i <= this.agenda.fim; i++) {
                        temp += ""+this.agenda.dados[i];
                    }
                } else {
                    for (let i = this.agenda.inicio; i < this.size; i++) {
                        temp += ""+this.agenda.dados[i];
                    }
                    for (let i = 0; i <= this.agenda.fim; i++) {
                        temp += ""+this.agenda.dados[i];
                    }
                }
                temp += " ]";
            }
        }      

        return temp;
    }
}

export default Empresa;