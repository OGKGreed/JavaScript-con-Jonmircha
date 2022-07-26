//Clase padre
class Animal{
    //El método constructor es un método especial que se ejecuta en el momento de instanciar la clase
    constructor(nombre, genero){
        this.nombre = nombre
        this.genero = genero
    }

    //Métodos
    /*Para declarar métodos en una clase, se declaran con la sintaxis de objetos literales. */

    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

//Clase hija
/*Para heredar a una clase hija desde una clase padre, se usa la palabra reservada extends. */
class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        //super() manda a llamar el constructor de la clase padre
        super(nombre, genero)
        //Como tamanio es una propiedad exclusiva de la clase Perro, se debe declarar como atributo de la clase.
        this.tamanio = tamanio
    }

    /*Perro puede sobreescribir y tener sus propios métodos. */
    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar(){
        console.log("Guauuu Guauuu");
    }
}

const mimi = new Animal("Mimi", "Hembra")
const scooby = new Perro("Scooby", "Macho", "Gigante")

console.log(mimi);
console.log(scooby);

mimi.saludar()
mimi.sonar()
scooby.saludar()
scooby.sonar()
scooby.ladrar()