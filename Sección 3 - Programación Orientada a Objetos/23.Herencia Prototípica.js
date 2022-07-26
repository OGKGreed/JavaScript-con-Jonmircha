//CÓDIGO DEL ARCHIVO #22
function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}

//Métodos agregados al prototipo de la función constructora
Animal.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo");
}

Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}


//Herencia Prototípica
function Perro(nombre, genero, tamanio){
    //Existe una función super(), que llama al constructor de la clase padre. Aquí se recrea a través de un atributo super de la clase Perro.
    this.super = Animal;
    this.super(nombre, genero)
    //Como tamanio no es un atributo de la clase Animal, se debe declarar en la función constructora de la clase hija Perro.
    this.tamanio = tamanio;
}

//Perro está heredando de Animal
/*Se asignará una nueva instancia de la clase Animal al prototipo de Perro. */
Perro.prototype = new Animal();
Perro.prototype.constuctor = Perro;

//Sobreescritura de métodos del prototipo padre en el hijo
/*Podemos sobreescribir el prototipo de la clase padre dentro del prototipo de cada clase hija. */
Perro.prototype.sonar = function(){
    console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function(){
    console.log("Guau guau");
}

/*Cuando creamos instancias nuevas de clases, veremos que los prototipos son distintos para cada objeto. */

//Snoopy se crea como una instancia de Perro
const snoopy = new Perro("Snoopy", "Macho", "Mediano")
//Lola Bunny se crea como una instancia de Animal
const lolaBunny = new Animal("Lola Bunny", "Hembra")

/*Haciendo console.log a cada objeto, podremos ver que cada objeto pertenece a una clase distinta. Uno pertenece a la clase padre Animal, y otro a Perro que es clase hija de Animal. */
console.log(snoopy);
console.log(lolaBunny);

/*En cada objeto se muestran los prototipos:

  El objeto snoopy tiene como prototipo a Perro, que es una clase que hereda de Animal, y esta clase padre Animal hereda del prototipo primitivo Object. Por lo tanto, tiene los métodos y atributos de la clase Perro y Animal.

  En cambio, lolaBynny, al ser una instancia de la clase Animal, tiene como prototipo al prototipo primitivo Object. Este objeto tiene los métodos y atributos solamente de Animal.
*/
snoopy.sonar()
snoopy.saludar()
snoopy.ladrar()
lolaBunny.sonar()
lolaBunny.saludar()