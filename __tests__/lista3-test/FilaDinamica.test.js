import FilaDinamica from "../../src/lista3/FilaDinamica";

let f;

test("enqueue, dequeue and others", () => {
    f = new FilaDinamica();
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    f.enqueue(4);
    expect(f.size()).toBe(4);
    expect(f.dequeue()).toBe(1);
    expect(f.dequeue()).toBe(2);
    expect(f.dequeue()).toBe(3);
    expect(f.size()).toBe(1);
    f.enqueue(2);
    f.enqueue(3);
    f.enqueue(25);
    f.enqueue(27);
    expect(f.front()).toBe(4);
    expect(f.dequeue()).toBe(4);
    expect(f.front()).toBe(2);
})