//importacion de clases
import {cuentaCorriente} from './cuentaCorriente.js';




const cuentaDeLeonardo = new cuentaCorriente();
//cuentaDeLeonardo.#saldo=10;
let saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual es '+saldo);
saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log('El saldo actual es '+saldo);
//console.log(cuentaDeLeonardo);
saldo= cuentaDeLeonardo.retirarDeCuenta(100);
console.log('El saldo actual es '+saldo);
//console.log(cuentaDeLeonardo);
saldo= cuentaDeLeonardo.depositoEnCuenta(10);
console.log('El saldo actual es '+saldo);


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
cuentaDeLeonardo.depositoEnCuenta(100)
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.retirarDeCuenta(100);
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(-10);
console.log(cuentaDeLeonardo);

