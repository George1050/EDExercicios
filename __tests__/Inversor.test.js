import Inversor from "../src/Inversor";

let i;

test("Invertendo palavas", () => {
    i = new Inversor();
    expect(i.inversor("total")).toBe("latot");
    expect(i.inversor("adeus")).toBe("sueda");
    expect(i.inversor("ravelly")).toBe("yllevar");
})