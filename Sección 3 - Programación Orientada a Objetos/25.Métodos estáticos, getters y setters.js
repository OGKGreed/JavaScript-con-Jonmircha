/*Todas las clases en JavaScript son públicas. No existen los modificadores de acceso como tal. */

//Clase padre
class Animal{
    constructor(nombre, genero){
        this.nombre = nombre
        this.genero = genero
    }
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

//Clase hija
class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        super(nombre, genero)
        this.tamanio = tamanio

        //Atributo usado para explicar getters y setters.
        /*No se igualó a ningún parámetro del constructor para que no se requiera declararlo al instanciar un objeto. */
        this.raza = null
    }

    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar(){
        console.log("Guauuu Guauuu");
    }

//Métodos estáticos
/*Un método estático es un método que se puede ejecutar sin instanciar una clase. Se declaran con la palabra reservada static al inicio de la función. */
    static queEres(){
        console.log("Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.");
    }

//Getters y Setters
/*Los getters y setters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase. 

Estos se definen generalmente con el verbo get o set, dependiendo si es un getter o un setter, seguido del atributo que manejaremos.
*/

/*Los getters, por lo general, sólo retornan el valor de la propiedad en cuestión. En JavaScript, se define con la palabra reservada get, y posteriormente, su identificador se compone del verbo get + el atributo. */
    get getRaza(){
        return this.raza
    }

/*Los setters establecen valores. Es común declarar parámetros en estos métodos para asignarlos a los atributos en cuestión. En JavaScript, se define con la palabra reservada set, y posteriormente, su identificador se compone del verbo set + el atributo.*/
    set setRaza(raza){
        this.raza = raza; 
    }

//NOTA: EN JAVASCRIPT, LOS GETTERS Y SETTERS SE TOMAN COMO ATRIBUTOS, NO MÉTODOS.
}

Perro.queEres()

//Creamos una instancia de Perro
const scooby = new Perro("Scooby", "Macho", "Gigante")
//Como los getters se tratan como atributos, se acceden a ellos como un atributo cualquiera
console.log(scooby.getRaza)
//Como los setters se tratan como atributos, para cambiar sus valores se hace una asignación normal
scooby.setRaza = "Gran Danés"
//Si usamos de nueva cuenta el getter getRaza, el atributo raza habrá cambiado de null a Gran Danés
console.log(scooby.getRaza)

//Si hacemos console.log a un objeto con getters y setters, veremos que estos se encontrarán igual en la cadena prototípíca.
console.log(scooby);