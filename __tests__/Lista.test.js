import Lista from "../src/Lista";

let l;

test("addAt test", () => {
    l = new Lista();

    l.add("A");
    l.add("B");
    l.add("C");
    l.append("D")
    l.addAt(3, "G");
    expect(l.toString()).toBe("C->B->A->G->D");
})