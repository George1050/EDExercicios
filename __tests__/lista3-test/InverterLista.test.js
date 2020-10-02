import InverterLista from "../../src/lista3/InverterLista";
import Lista from "../../src/Lista";

let i;

test("inverter lista", () => {
    let lista = new Lista();
    i = new InverterLista();

    lista.append(1)
    lista.append(2)
    lista.append(3)
    expect(lista.toString()).toBe("1->2->3");
    i.inverter(lista);
    expect(lista.toString()).toBe("3->2->1");
    
})