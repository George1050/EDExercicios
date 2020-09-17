import Pilha from "../src/Pilha";

let p;

test("Insere na Pilha e retira da pilha", () => {
	p = new Pilha(7);
    p.push(10);
    p.push(9);
    p.push(8);
    p.push(7);
    p.push(6);
	p.push(5);
	expect(p.pop()).toBe(5);
	p.push(2);
	p.push(3);
	p.push(5);
	p.push(6);
	p.push(7);
	console.log(p.toString());
	

})