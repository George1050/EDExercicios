import verficarSequencia from "../../src/lista1/Compilador";


test("Verifando sequencias de caracteres", () => {
    expect(verficarSequencia("[[()][])")).toBe(false);
    expect(verficarSequencia("[[()][]]")).toBe(true);
})