class Node{
    constructor(data, priority){
        this.data = data,
        this.priority = priority
    }
}

class Heap{
    constructor(){
        this.tree = [],
        this.size = 0,
        this.tree[0] = new Node(0, -999999)
    }

    add(dado, priority){

        let novo = new Node(dado, priority);
        this.tree[++this.size] = novo;

        let filho_pos = this.size;
        let pai_pos = Math.trunc(this.size/2);

        while(this.tree[filho_pos].priority < this.tree[pai_pos].priority){
            this.tree[filho_pos] = this.tree[pai_pos];
            filho_pos = pai_pos;
        }

        this.tree[pai_pos] = novo;
    }

    remove(){

	}

}

export default Heap;