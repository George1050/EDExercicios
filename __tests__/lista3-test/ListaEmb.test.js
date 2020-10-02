import ListaEmbaralhada from "../../src/lista3/ListaEmbaralhada";
import Lista from "../../src/Lista";

let e;

test("Embaralhar a lista", () => {
    let lista = new Lista();
    e = new ListaEmbaralhada();

    lista.append(1);
    lista.append(2);
    lista.append(3);
    lista.append(4);
    lista.append(5);

    expect(lista.toString()).toBe("1->2->3->4->5");

    e.embaralhar(lista);
    console.log(lista.toString());
})
