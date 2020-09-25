import Filapilha from "../../src/lista2/FilaPilha";

let f;

test("enqueue, dequeue and others", () =>{
    f = new Filapilha(10);
    f.push(1);
    f.push(2);
    f.push(3);
    f.push(4);
    expect(f.size()).toBe(4);
    expect(f.pop()).toBe(4);
    expect(f.pop()).toBe(3);
    expect(f.pop()).toBe(2);
    expect(f.size()).toBe(1);
    f.push(2);
    f.push(3);
    f.push(25);
    f.push(27);
    expect(f.top()).toBe(27);
    expect(f.pop()).toBe(27);
    expect(f.top()).toBe(25);
    
})