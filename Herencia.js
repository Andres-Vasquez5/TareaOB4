class Persona {
    constructor(edad, nombre, telefono){
        this.edad=edad,
        this.nombre=nombre,
        this.telefono=telefono
    } 
}

class Cliente extends Persona{
    constructor(edad, nombre, telefono, credito){
        super(edad, nombre, telefono);;
        this.credito=credito
    }
    datosCliente (){
        console.log("Hola soy " + this.nombre + " tengo " + this.edad + " años" + " mi numero de telefono es " + this.telefono + " y mi linea de credito es de " + this.credito)
    }
}
const cliente = new Cliente(22,"Andres", 1234, "$2000")
cliente.datosCliente();

class Trabajador extends Persona{
    constructor(edad, nombre, telefono, salario){
        super(edad, nombre, telefono);
        this.salario= salario;
    }
    datosTrabajador(){
        console.log("Hola soy " + this.nombre + " tengo " + this.edad + " años" + " mi numero de telefono es " + this.telefono + " y mi salario es de " + this.salario)
    }
}
const trabajador = new Trabajador(23, "Rafael", 4321, "$20,000")
trabajador.datosTrabajador()