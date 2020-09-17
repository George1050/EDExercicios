import verficarSequencia from "../src/Compilador";
import VerificarSequencia from "../src/Compilador";


test("Verifando sequencias de caracteres", () => {
    expect(verficarSequencia("[[()][])")).toBe(false);
    expect(verficarSequencia("[[()][]]")).toBe(true);
})