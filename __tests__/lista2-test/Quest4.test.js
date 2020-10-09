import FilaIntercalada from "../../src/lista2/FilaIntercalada";
import Fila from "../../src/Fila";

let fin;

beforeEach(() => {
    fin = new FilaIntercalada();
})

test("Intercalar Filas", () => {
    let f1 = new Fila(4);
    let f2 = new Fila(6);

    f1.enqueue(1);
    f1.enqueue(2);
    f1.enqueue(3);
    f1.enqueue(4);

    f2.enqueue("A");
    f2.enqueue("B");
    f2.enqueue("C");
    f2.enqueue("D");
    f2.enqueue("E");
    f2.enqueue("F");

    expect(fin.intercalada(f1,f2)).toBe("[ 1 A 2 B 3 C 4 D E F ]");
})