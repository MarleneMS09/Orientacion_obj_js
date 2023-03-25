export class cuentaCorriente 
{
   numero;
   saldo;
   agencia;
   
   constructor() {
    this.saldo = 0;
    this.numero = '';
    this.agencia = '';
   }

   depositoEnCuenta(valor) {
    if(valor >0)
    this.saldo += valor;
    return this.saldo;
   }
   retirarDeCuenta(valor){
    if(valor <= this.saldo)
    this.saldo -= valor;
    return this.saldo;
   }
   verSaldo() {
    return this.saldo;
   }


}
//si coloco un # en un valor lo tomará como valor privado y no lo mostrará, si se usa _  se dice que sea privado pero por error, lo mostrará
//en JS por utilizamos el prefijo "_" para indicar que es un atributo privado y no debe ser alterado manualmente. Aunque ningún atributo o método es realmente privado.
//en la función anterior se agrego el += para hacer agregaciones a la cuenta (sumatoria)
//el this sirve para especificar aquí quiero que se lleva a cabo mi función a partir de lo que tengo abajo