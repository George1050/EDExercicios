import Empresa from "../../src/lista2/Empresa";

let e;

beforeEach(() => {
    e = new Empresa(5);
});

test("Agendar", () => {
    e.agendar("A");
    e.agendar("B");
    e.agendar("C");
    e.agendar("D");
    e.agendar("E");
    e.agendar("F");
    expect(e.toString()).toBe("[ A B C D E ], [ F ]");
})

test("Antender", () => {
    e.agendar("A");
    e.agendar("B");
    e.agendar("G");
    e.agendar("D");
    e.agendar("E");
    e.agendar("F");
    expect(e.toString()).toBe("[ A B G D E ], [ F ]");

    expect(e.atender()).toBe("A");
    expect(e.toString()).toBe("[ F B G D E ]");
})