export class cuentaCorriente 
{
   #cliente;
   numero;
   agencia;
   #saldo;

   set cliente (valor) {
   this.#cliente = valor;
   }

   get cliente() {
      return this.#cliente;
   }




   constructor() {
    this.#cliente= null;
    this.numero = '';
    this.agencia = '';
     this.#saldo = 0;
   }

   depositoEnCuenta(valor) {
    if(valor >0)
    this.#saldo += valor;
    return this.#saldo;
   }
   retirarDeCuenta(valor){
    if(valor <= this.#saldo)
    this.#saldo -= valor;
    return this.#saldo;
   }
   verSaldo() {
    return this.#saldo;
   }
   transferirParaCuenta(valor,cuentaDestino){
    this.retirarDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
   }

}
//si coloco un # en un valor lo tomará como valor privado y no lo mostrará, si se usa _  se dice que sea privado pero por error, lo mostrará
//en JS por utilizamos el prefijo "_" para indicar que es un atributo privado y no debe ser alterado manualmente. Aunque ningún atributo o método es realmente privado.
//en la función anterior se agrego el += para hacer agregaciones a la cuenta (sumatoria)
//el this sirve para especificar aquí quiero que se lleva a cabo mi función a partir de lo que tengo abajo