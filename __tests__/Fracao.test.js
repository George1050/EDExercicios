import Fracao from "../src/Fracao";

test("Multiplacacao", () => {
    let f = new Fracao(5, 3);
    expect(f.multiplicador(new Fracao(2,3))).toBe('10/9')
});

test("Divisão", () => {
    let f = new Fracao(5, 3);
    expect(f.divisor(new Fracao(3, 10))).toBe('50/9')
});