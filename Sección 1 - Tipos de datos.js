// Var vs let
/*Las variables declaradas con var se declaran con scope Global y se añadirán al objeto Window.
No se recomienda usar var, pues permite la reasignación de valores*/
var hola = "Hola mundo";
//Las variables declaradas con let se declaran con scope de bloque
let hello = "Hello world";
console.log(hola);
console.log(hello);
console.log(window);
console.log(window.hola);
console.log(window.hello);

//Ámbito de bloque
console.log("******************var******************");
var musica = "Rock";
console.log("Variable Música antes del bloque", musica);
{
/*var hará que la variable musica se coloque entre las primeras líneas del documento automáticamente
haciendo que se reescriba el valor de musica e imprimiendo Pop dos veces*/
var musica = "Pop";
console.log("Variable Música dentro del bloque", musica);
}
console.log("Variable Música después del bloque", musica);

console.log("******************let******************");
let musica2 = "Rock";
console.log("Variable Música antes del bloque", musica2);
{
/*En cambio, al usar let, musica2 se quedará en el scope del bloque, haciendo que el valor se
reasigne de la siguiente forma: Rock -> Pop -> Rock */
let musica2 = "Pop";
console.log("Variable Música dentro del bloque", musica2);
}
console.log("Variable Música después del bloque", musica2);



//CONSTANTES (const)
/*Las constantes no pueden declararse sin inicializar

Valores primitivos: son aquellos a los que se accede directamente al valor (que tienen un valor inicial)
Son: strings, numbers, booleans, null, undefined, NaN

Valores compuestos: son aquellos a los que se accede a la referencia del valor
Son: objetos, arrays, funciones, clases, etc.
*/

//IMPORTANTE: LAS CONSTANTES PUEDEN CAMBIAR O NO DEPENDIENDO SI EL TIPO DE DATO ES PRIMITIVO O COMPUESTO

/*Const vs let
Usa let cuando requieras cambiar el valor de una variable
Usa const cuando requieras mantener el mismo valor de una variable
*/

//Ejemplo de valor primitivo
const PI = 3.1416;

console.log(PI);

//Ejemplos de valores compuestos
const objeto = {nombre: "Jon", edad: 35}
const colores = ["blanco", "negro", "azul"]
console.log(objeto);
console.log(colores);

objeto.correo = "jonmircha@gmail.com"
colores.push("naranja")

console.log(objeto, colores);


//STRINGS
/*Para declarar strings, se pueden usar tanto comillas simples como dobles. El estándar es usar las dobles*/
let nombre = "Jon";
let apellido = 'mircha';
let lorem = "        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed in, iure, error quas consectetur modi officiis laborum molestias consequatur impedit molestiae commodi vitae delectus, sapiente dignissimos aspernatur perferendis? Minus, soluta.       "

/*De igual forma podemos definir un string a través del constructor String*/
let saludo = new String("Hola Mundo");

console.log(nombre, apellido, saludo);

/*Los strings tienen como única propiedad a .length y contará todos los caracteres 
incluyendo espacios vacíos*/
console.log(nombre.length, apellido.length, saludo.length)

/*De igual forma, tenemos como métodos a:
.toUpperCase() -> Convertirá la cadena de caracteres a mayúsculas

.toLowerCase() -> Convertirá la cadena de caracteres a minúsculas

.includes() -> Acepta como parámetro un string y verifica si ese valor está escrito en el string. Devolverá true si está incluído o false si no

.trim() -> Quita todos los espacios en blanco que se ubiquen al inicio y final de la cadena

.split() -> Sirve para crear un arreglo con la cadena y cada elemento será separado por un separador.Acepta como parámetro un string en el que se debe expresar el caracter separador
*/
console.log(
nombre.toUpperCase(), 
apellido.toLowerCase(),
lorem.includes("amet"),
lorem.includes("jon"),
lorem,
lorem.trim(),
lorem.split(" "),
lorem.split(",")
);



//TEMPLATE STRINGS
let nombre2 = "jon"
let apellido2 = "mircha"

/*Concatenación*/
let saludo2 = "Hola, mi nombre es "+ nombre2 + " " + apellido2 + "."
console.log(saludo2);

/*Las template strings se declaran con back sticks, o comillas invertidas, y permiten la interpolación*/
/*Interpolación*/
let saludo3 = `Hola mi nombre es ${nombre2} ${apellido2}.`
console.log(saludo3);

/*Al usar template strings, se respetarán las indentaciones y espacios*/
let ul =`<ul>
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>`;
console.log(ul);



//NUMBERS
/* En Javascript, los tipos de datos numéricos se envuelven todos en el tipo NUMBER. Para declarar una variable de tipo NUMBER, se puede hacer de las siguientes formas.*/

//Declaración por asignación
let a = 2;
//Declaración por constructor
let b = new Number(1);

console.log(a, b);
/*Como se puede observar, en JavaScript no se especifica si el dato es entero, double o float.*/
let c = 7.19;

/*Los Numbers tienen los siguientes métodos:
.toFixed() -> Recibe como parámetro un entero que significa el número de decimales a los que se redondeará la variable a la que se aplique el método

parseInt() -> Hace un casteo de un tipo de dato a un dato entero

parseFloat() -> Hace un casteo de un tipo de dato a un dato flotante, o decimal

NOTA: parseInt() Y parseFloat() PROVIENEN DE LA CLASE Number, POR LO TANTO, SE PUEDEN ESCRIBIR DIRECTAMENTE LOS MÉTODOS, O EN SU DEFECTO DEFINIR EXPLÍCITAMENTE LA CLASE NUMBER CON EL MÉTODO.
Ejemplo: Number.parseInt(), Number.parseFloat() 
*/

/*Podemos declarar Numbers como strings en caso de necesitarlo. Sin embargo, habrá que hacer uso de un casteo para poder realizar operaciones aritméticas.*/
let d = "5.6";

console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(parseFloat(d));
console.log(a + b);
//NOTA: AL CASTEAR UN FLOAT CON .parseInt, HARÁ UN CÁLCULO INCORRECTO, DEVOLVIENDO LA SUMA DE LOS ENTEROS CON DECIMALES ERRÓNEOS
console.log(c + parseInt(d));
//-----VER NOTA EN LA EXPLICACIÓN DE MÉTODOS-----
console.log(a + Number.parseInt(b));
console.log(c + Number.parseFloat(d));

//En JavaScript existe un operador llamado typeof, que sirve para conocer a qué grupo pertenece un dato, retornando un string con los tipos de datos obtenidos
console.log(typeof c, typeof d);



//BOOLEANS
/*Para declarar una variable booleana, podemos hacerlo por asignación, asignando el valor true o false*/
let verdadero = true;
let falso = false;

/*De igual forma, podemos hacer una declaración a través del constructor Boolean*/
let v = Boolean(true);
let f = Boolean(false);

/*Podemos imprimir el contenido de las variables, al igual que aplicar el operador typeof con los datos Booleans*/
console.log(verdadero, falso);    
console.log(typeof verdadero, typeof falso);

/*En los contextos booleanos de JavaScript, existen tendencias dependiendo la condición a evaluar. Es decir, dependiendo la condición evaluada dará un valor u otro. A estas tendencias se les conocen como Truthy y Falsy.

Truthy -> Son valores evaluados que tienden a ser true. Al retornar true, ejecutarán una condición.

Falsy -> Son valores evaluados que tienden a ser false. Al hacer uso del operador &&, si el primer objeto es Falsy, retornará el objeto. 
Ejemplo: if(false && "dog") -> false, if(0 && "dog") -> 0

Tabla de valores Truthy y Falsy

|----------Truthy----------|----------Falsy----------|
|         if(true)         |         if(false)       |
|         if({})           |         if(null)        |
|         if([])           |      if(undefined)      |
|         if(42)           |         if(0)           |
|         if("foo")        |         if(-0)          |
|      if(new Date())      |         if(0n)          |
|         if(-42)          |         if(NaN)         |
|         if(3.14)         |         if("")          |
|         if(-3.14)        |                         |
|       if(Infinity)       |                         |
|       if(-Infinity)      |                         |
|--------------------------|-------------------------|
*/

//Ejemplos:
console.log(Boolean(0));
console.log(Boolean(-7));
console.log(Boolean(""));
console.log(Boolean(" "));



//UNDEFINED, NULL && NaN
/*Undefined indica que no se ha inicializado una variable y que el valor está ausente*/
let indefinida;
console.log(indefinida);

/*Null es un valor especial que indica la ausencia de un valor*/
let nulo = null;
console.log(nulo);

/*NaN, o Not a Number, indica que se está haciendo una operación con valores no numéricos*/
let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero);



//FUNCIONES
/*Una función es un bloque de código autocontenido, que se puede definir una vez y ejecutar en cualquier Momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor.

En JavaScript, las funciones también son objetos, aunque son de un tipo especial

Se dice que las funciones son ciudadanos de primera clase, porque pueden asignarse a un valor, pueden pasarse como argumentos y usarse como un valor de retorno.
*/

/*Función declarada -> Son un tipo de funciones en las que, explícitamente, se declara la función a través del uso de la palabra reservada <function> y se le asigna un nombre. Posteriormente, esta deberá ser invocada tras ser declarada.*/
function estoEsUnaFuncion(){
console.log("Uno");
console.log("Dos");
console.log("Tres");
}

//Invocación de función
estoEsUnaFuncion();

/*Las funciones pueden devolver un valor a través de la palabra reservada <return>. 

NOTA: SI SE DEFINE LA PALABRA RETURN EN UNA PARTE SUPERIOR, EL CÓDIGO ANTES DEL RETURN SE EJECUTARÁ, Y EL QUE ESTÉ DESPUÉS DEL RETURN SE IGNORARÁ.
*/
function funcionQueDevuelveValor(){
console.log("Uno");
// return 19;
console.log("Dos");
console.log("Tres");
return "La función ha retornado una cadena de texto"
}

/*Para verificar el valor de retorno de una función, es necesario que la función esté escrita en su notación expresada, es decir, que esta esté asignada como valor a una variable o constante.*/
let valorDeFuncion = funcionQueDevuelveValor();
console.log(valorDeFuncion);

/*Las funciones pueden recibir parámetros. Estos pueden ser inicializados o no; si se inicializan los parámetros, el valor inicial se imprimirá en caso de que cuando se invoque a la función, no se manden parámetros*/
function saludar(nombre = "Desconocido", edad = 0){
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);
}
saludar("Kenai", 7);
saludar();

//Funciones Declaradas vs Funciones Expresadas
/*Existe una diferencia entre las funciones declaradas y las expresadas.

Declaradas -> Cuando se escribe una función en su notación declarada, JavaScript permitirá el Hoisting, o elevación, permitiendo así la ejecución de una función antes de que esta sea declarada.

Expresadas -> En cambio, si se escribe una función con notación expresada, JavaScript no permitirá el Hoisting, obligando así a mantener un orden de declaración-invocación.
*/
funcionDeclarada();
function funcionDeclarada(){
console.log("Esto es una función declarada, puede invocarse en cualquiera parte de nuestro código incluso antes de que la funciónsea declarada");
}
funcionDeclarada();

// Función anónima (Paréntisis de explicación)
/*La notación expresada de funciones permite convertir la función en anónima; en su asignación, sólo usamos la palabra reservada <function>. Cuando invoquemos esta función, escribimos entonces el nombre de la variable con paréntesis ()*/

// funcionExpresada();
// ! ^ Comentar esta línea de código para permitir la ejecución de funcionExpresada() 
const funcionExpresada = function(){
console.log("Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable. Si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'");
}
funcionExpresada();



//ARRAYS
/*Para declarar un arreglo, podemos hacerlo de las siguientes formas*/

//Arreglo vacio -> Se declara solamente con escribir corchetes vacios
const a1 = [];
console.log(a1);
//Arreglo con elementos -> Se declaran escribiendo corchetes, y dentro de ellos los elementos que se usarán; pueden ser elementos de distintos tipos de datos, incluso otros arreglos
const b1 = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
console.log(b1);

/*Los arrays tienen la propiedad .length, que devuelve un entero con el número de elementos que se tiene dentro del arreglo*/
console.log(b1.length);

/*Podemos acceder a elementos específicos de un arreglo...*/
/*Para acceder a un elemento especifico, basta con escrbir entre corchetes la posición del elemento*/
console.log(b1[2]);
console.log(b1[0]);
console.log(b1[3]);

/*Para acceder a los elementos de un array que es contenido de otro, debemos escribir primero entre corchetes la posicion donde se ubica el array, y seguido a esto, escribir la posición del elemento deseado.*/
console.log(b1[3][2]);
console.log(b1[3][3][0]);

//Mas formas de declarar un array
/*El método .of sirve para crear una instancia del objeto Array, es decir, un arreglo, con unos elementos concretos. Este método creará tantos espacios como elementos se declaren en él.*/
const c1 = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);

/*Otra forma de declarar un array es a través del uso del constructor Array. La diferencia entre usar Array.of y el constructor Array, es que, si se usa el constructor con un solo argumento entero, este creará dicho número de elementos vacíos.
    NOTA: ESTA FORMA ES CONSIDERADA ANTIGUA, POR LO QUE NO SE SUELE USAR ACTUALMENTE*/
const d1 = new Array(5);
console.log(d);
const e1 = new Array(1, 2, 3, true, false);
console.log(e1);

/*Métodos de los arrays más usados
    .fill -> Este método sirve para rellenar un array; puede recibir un parámetro cualquiera.

    .push -> Este método sire para agregar un elemento al array, empujándolo al final.

    .pop -> Este método sirve para quitar el último elemento de un array.
*/
const f1 = Array(100).fill(false);
console.log(f);
const colores2 = ["Rojo", "Verde", "Azul"];
console.log(colores2);
colores2.push("Negro");
console.log(colores2);
colores2.pop();
console.log(colores2);

//Método forEach
/*Este método es especial; como parámetro, recibe una función que se ejecutará por cada elemento que contenga el array. Esta función puede recibir los siguientes parámetros en el siguiente orden
    
    element -> Como primer parámetro, podemos definir el nombre del elemento iterable al que podremos acceder
    
    index -> Como segundo parámetro, podemos definir un índice
*/
colores2.forEach(function (element, index){
    console.log(`<li id="${index}">${element}</~li>`)
})



//OBJETOS
/*Los objetos pueden declararse usando el constructor de una clase. Por ejemplo, si usamos el constructor de la clase String, declararemos un objeto de tipo String.

NOTA: ESTA FORMA NO SE USA A DÍA DE HOY
*/
let a2 = new String("Hola");
console.log(a2);

/*La forma actual y más recomendada para declarar un objeto es a través de llaves, y entre dichas llaves declarar propidades con sus respectivos valores. Dicho objeto adquirirá el nombre de la variable o constante a la que se le asigne.*/
const b2 = {
    //propiedad1: valor,
    //propiedad2: valor,
    //propiedad3: valor,
    //...
};
console.log(b2);

/*De igual forma, podemos declarar un objeto a través del uso del constructor Object. En la consola, podemos ver qué tipo el prototipo que tiene, que en este caso, será de tipo Object.*/
const c2 = new Object();
console.log(c2);

/*Los objetos pueden contener arreglos, funciones, incluso otros objetos entre sus propiedades. Por ejemplo:*/
const jon ={
    //Propiedades
    nombre: "Jon",
    apellido: "MirCha",
    edad:35,
    soltero: false,
    //Arreglos
    pasatiempos: ["Correr", "Hacer ejercicio", "Dar clases"],
    //Objetos
    contacto: {
        email: "jonmircha@gmail.com",
        twitter: "@jonmircha",
        movil: "521231231232"
    },
    //Funciones
    saludar: function(){
        console.log("Hola :)");
    },
    decirMiNombre: function (){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, y tengo ${this.edad} años. Puedes seguir como ${this.contacto.twitter} en twitter`);
    }
};

/*Podemos imprimir en la consola directamente el objeto en cuestión. Si se hace de esta forma, se retornará como resultado el contenido del objeto.*/
console.log(jon);
/*Podemos acceder a las propiedades o atributos de un objeto de dos formas.

    1ra Forma: Especificar el atributo usando la notación de corchetes -> esta forma de acceder a los atributos de un objeto se considera mala práctica, no por ser incorrecto, si no por ser más compleja; se requiere de conocer los atributos del objeto.

    2da Forma: Usar la notación de punto para acceder a los atributos (Recomendada) -> esta forma hace uso del punto ( . ) para poder acceder a los atributos de un objeto, y es la forma estándar y más usada a día de hoy.

    Ejemplos:
*/
console.log(jon["nombre"]);
console.log(jon["apellido"]);
console.log(jon.nombre);
console.log(jon.apellido);
console.log(jon.edad);
console.log(jon.soltero);
console.log(jon.pasatiempos);

/*Podemos acceder a atributos "especiales" de nuestro objeto, como lo son los arreglos, funciones u otros objetos; de igual forma podemos acceder a los atributos de un objeto encerrado por otro.

    Para acceder a la posición exacta de un arreglo, hacemos uso de la notación de corchetes especificando la posición del arreglo (propiedad) en cuestión.

    Para acceder a los atributos de un objeto encerrado por otro, usamos la notación de punto ( . ), para especificar primero cuál es el objeto al que se desea acceder, y posteriormente otro punto ( . ) especificando el atributo deseado.

    Para acceder a las funciones de un objeto, escribimos el nombre de la función seguido de paréntesis (), debido a que al ser funciones pueden recibir parámetro o no.
    
*/
console.log(jon.pasatiempos[1]);
console.log(jon.contacto);
console.log(jon.contacto.twitter);
jon.saludar()
jon.decirMiNombre()

//Métodos de los objetos
/*
    Object.keys() -> Este método recibe como parámetro el nombre de un objeto; devuelve un array especificando en qué posición del objeto se encuentra una propiedad.

    Object.values() -> Este método recibe como parámetro el nombre de un objeto; devuelve un array especificando en qué posición del objeto se cuentra un valor.

    Object.hasOwnProperty() -> Este método recibe como parámetro un string con el nombre de una propiedad que deseamos verificar si está contenida en nuestro objeto. Retornará true si el objeto posee la propiedad especificada o false en caso de no contenerla.

*/
console.log(Object.keys(jon));
console.log(Object.values(jon));
console.log(jon.hasOwnProperty("nombre"));
console.log(jon.hasOwnProperty("nacimiento"));