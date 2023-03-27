import {cliente} from "./cliente.js"
export class cuentaCorriente
{
    #cliente;
    numero;
    agencia;
    #saldo;
     static cantidadCuentas = 0;

    set cliente(valor) {
        if (valor instanceof cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    constructor(cliente, numero, agencia) {
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        cuentaCorriente.cantidadCuentas++;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }
}



//si coloco un # en un valor lo tomará como valor privado y no lo mostrará, si se usa _  se dice que sea privado pero por error, lo mostrará
//en JS por utilizamos el prefijo "_" para indicar que es un atributo privado y no debe ser alterado manualmente. Aunque ningún atributo o método es realmente privado.
//en la función anterior se agrego el += para hacer agregaciones a la cuenta (sumatoria)
//el this sirve para especificar aquí quiero que se lleva a cabo mi función a partir de lo que tengo abajo