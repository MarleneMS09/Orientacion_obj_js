//definición de clases
class Cliente 
{
  nombreCliente;
  dniCliente;
  rutCliente;
};
class cuentaCorriente 
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
    this.saldo += valor;
   }
   retirarDeCuenta(valor){
    if(valor <= this.saldo)
    this.saldo -= valor;
   }



};

//en la función anterior se agrego el += para hacer agregaciones a la cuenta (sumatoria)
//el this sirve para especificar aquí quiero que se lleva a cabo mi función a partir de lo que tengo abajo
cuentaDeLeonardo = new cuentaCorriente();
cuentaDeLeonardo.saldo=0;

cuentaDeLeonardo.depositoEnCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(900);
console.log(cuentaDeLeonardo);

const cliente1 = new Cliente(); 
cliente1.nombreCliente = "José";
cliente1.dniCliente ="13232";
cliente1.rutCliente="133434";

const cuentaCorriente1 = new cuentaCorriente();

cuentaCorriente1.numero = "232323";
cuentaCorriente1.saldo = 5000;
cuentaCorriente1.agencia= 1001;

const cliente2 = new Cliente();
cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente="13804050";
cliente2.rutCliente ="V13804005";

const cuentaCorriente2 = new cuentaCorriente();

cuentaCorriente2.numero = "123434343";
cuentaCorriente2.saldo = 1000;
cuentaCorriente2.agencia="1002";

/*const cliente3 = new Cliente();
cliente3.nombreCliente = "María";
cliente3.dniCliente = "2324343"
cliente3.numeroCuenta = "9829382";
cliente3.saldoCuenta = 1000;; */
console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2);
