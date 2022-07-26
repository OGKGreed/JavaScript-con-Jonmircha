//PROTOTIPOS
/*Los prototipos son mecanismos por el cual un objeto puede heredar atributos y métodos de un objeto padre. 

Algo a tener en cuenta es que, podría decirse que un prototipo es un almacenamiento compartido entre todas las instancias que tenga, pues estas compartirán las mismas propiedades y métodos declarados en el prototype.

Por lo tanto, sólo se debe asignar métodos o propiedades que van a ser compartidas por todas las instancias, ya que de esa forma evitamos usar mucha memoria porque están siendo compartidas por todos.

Las propiedades que son particulares de cada instancia, y que se requiere mantener su propia copia, versión o valor de ella, se deben poner dentro de la función constructora.*/

const animal = {
    nombre: "Snoopy",
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }
}
console.log(animal);

const animal2 = {
    nombre: "Lola Bunny",
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }
}
console.log(animal2);

//Función constructora (No recomendada)
/* function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //Métodos
    this.sonar = function(){
        console.log("Hago sonidos porque estoy vivo");
    }

    this.saludar = function(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
} */

//Función constructora donde asignamos los métodos al Prototipo, no a la función como tal.
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

const snoopy = new Animal("Snoopy", "Macho"),
      lolaBunny = new Animal("Lola Bunny", "Hembra")

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar()
snoopy.saludar()
lolaBunny.sonar()
lolaBunny.saludar()

console.log(Animal.prototype); 
console.log(Object.prototype); 

// Video complementario de prototipos: 
// source: https://www.youtube.com/watch?v=TWSI9SybwmI