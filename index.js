//importacion de clases
import { Cliente } from './cliente.js';
import {cuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente();
cliente.nombreCliente = 'Leonardo';
cliente. dniCliente= '13804050';
cliente.rutCliente = "123224";

const cuentaDeLeonardo = new cuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia= '001';
cuentaDeLeonardo.cliente= cliente;
//console.log(cuentaDeLeonardo);
//cuentaDeLeonardo.#saldo=10;
let saldo = cuentaDeLeonardo.verSaldo();
//console.log('El saldo actual es '+saldo);
saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log('El saldo actual (CuentaLeonardo) '+saldo);


const cliente2 = new Cliente();
cliente2.nombreCliente = 'Maria';
cliente2. dniCliente= '16979808';
cliente2.rutCliente = "8989";

const cuentaDeMaria = new cuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia= '002';
cuentaDeMaria.cliente= cliente2;
console.log(cuentaDeMaria.cliente);

let parametroValor= 100;
cuentaDeLeonardo.transferirParaCuenta(100,cuentaDeMaria);
const saldoMaria = cuentaDeMaria.verSaldo();
console.log('El saldo actual(cuentaMaria.cliente.nombreCliente): '  +saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual(cuentaLeonardo): '  +saldoLeonardo);



//console.log(cuentaDeLeonardo);
/*saldo= cuentaDeLeonardo.retirarDeCuenta(100);
console.log('El saldo actual es '+saldo);
//console.log(cuentaDeLeonardo);
saldo= cuentaDeLeonardo.depositoEnCuenta(10);
console.log('El saldo actual es '+saldo); */





/*const cliente1 = new Cliente(); 
cliente1.nombreCliente = "José";
cliente1.dniCliente ="13232";
cliente1.rutCliente="133434"; */

/*const cuentaCorriente1 = new cuentaCorriente();

cuentaCorriente1.numero = "232323";
cuentaCorriente1.saldo = 5000;
cuentaCorriente1.agencia= 1001;

/*const cliente2 = new Cliente();
cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente="13804050";
cliente2.rutCliente ="V13804005"; */
/*
const cuentaCorriente2 = new cuentaCorriente();

cuentaCorriente2.numero = "123434343";
cuentaCorriente2.saldo = 1000;
cuentaCorriente2.agencia="1002";

/*const cliente3 = new Cliente();
cliente3.nombreCliente = "María";
cliente3.dniCliente = "2324343"
cliente3.numeroCuenta = "9829382";
cliente3.saldoCuenta = 1000;; */
/*
cuentaDeLeonardo.depositoEnCuenta(150)
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(-10);
console.log(cuentaDeLeonardo); */

