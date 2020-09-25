import Troca from "../src/TrocaPosicoes";

let t;

test('testando funcao', () => {
    t = new Troca(10);
    t.pilha.push(1);
    t.pilha.push(2);
    t.pilha.push(3);
    t.pilha.push(4);
    t.pilha.push(1);
    t.pilha.push(2);
    t.pilha.push(3);
    t.pilha.push(4);
    expect(t.trocaPosicoes()).toBe("[4, 2, 3, 4, 1, 2, 3, 1]");
    console.log(t.pilha.toString())
})