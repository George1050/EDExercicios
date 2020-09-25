class Fracao {
    constructor(numerador, denominador = 1){
        if(denominador === 0){
            throw new Error("'0' não pode ser usado como denominador")
        }
        this.num = numerador,
        this.den = denominador
    }

    multiplicador(fracao){
        let f = new Fracao(fracao.num * this.num, fracao.den * this.den);
        return f.toString();
    }

    divisor(fracao){
        let f = new Fracao(fracao.den * this.num, fracao.num * this.den);
        return f.toString();
    }

    toString() {
        return this.num+'/'+this.den;
    }
}

export default Fracao;