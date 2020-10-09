import Binarios from "../../src/lista1/Binarios";

let b;

beforeEach(() => {
    b = new Binarios();
});

test("Converter números", () => {
    expect(b.converter(10)).toBe("1010");
    expect(b.converter(5)).toBe("101");
    expect(b.converter(25)).toBe("11001");
})