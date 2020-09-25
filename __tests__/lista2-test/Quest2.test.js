import PilhaFila from "../../src/lista2/PilhaFila";

let p;

test("push, pop and others", () => {
    p = new PilhaFila(10);
    p.enqueue(1);
    p.enqueue(2);
    p.enqueue(3);
    p.enqueue(4);
    expect(p.size()).toBe(4);
    expect(p.dequeue()).toBe(1);
    expect(p.dequeue()).toBe(2);
    expect(p.dequeue()).toBe(3);
    expect(p.size()).toBe(1);
    p.enqueue(2);
    p.enqueue(3);
    p.enqueue(25);
    p.enqueue(27);
    expect(p.front()).toBe(4);
    expect(p.dequeue()).toBe(4);
    expect(p.front()).toBe(2);
})