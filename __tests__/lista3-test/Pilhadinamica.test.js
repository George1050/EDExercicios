import PilhaDinamica from "../../src/lista3/PilhaDinamica";

let p;

test("Insere na Pilha e retira da pilha", () => {
	p = new PilhaDinamica();
    p.push(1);
    p.push(2);
    p.push(3);
    p.push(4);
    expect(p.size()).toBe(4);
    expect(p.pop()).toBe(4);
    expect(p.pop()).toBe(3);
    expect(p.pop()).toBe(2);
    expect(p.size()).toBe(1);
    p.push(2);
    p.push(3);
    p.push(25);
    p.push(27);
    expect(p.top()).toBe(27);
    expect(p.pop()).toBe(27);
    expect(p.top()).toBe(25);
	
	

})