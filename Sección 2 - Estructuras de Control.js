//OPERADORES
/*Un operador es un signo o símbolo que especifica el tipo de cálculo que se realiza en una expresión. Existen distintos tipos de operadores.*/

//Aritméticos
/*Los operadores aritméticos se utilizan para realizar operaciones matemáticas o aritméticas. Estos operadores son:

    Suma ( + ) -> Sirve para realizar una suma

    Resta ( + ) -> Sirve para realizar una resta

    Multiplicación ( * ) -> Sirve para realizar una multiplicación

    División ( / ) -> Sirve para realizar una división; retornará el cociente de la división

    Módulo ( % ) Sirve para realizar una división, pero retornará el residuo de la misma en lugar del cociente.

*/
let a = 5 + (5 - 10) * 3;
let modulo = 5 % 2;

console.log(a);
console.log(modulo);

//Relacionales
/*Los operadores relacionales, como su nombre indican, establecen una relación, que es de tipo numérico. También se conocen como operadores de comparación, debido a que se utilizan para comparar valores. Estos operadores son:

    Mayor ( > ) -> Retornará true si el miembro A de la comparación es mayor que el miembro B.

    Menor ( < ) -> Retornará true si el miembro A de la comparación es menor que el miembro B.

    Mayor o igual que ( >= ) -> Retornará true en caso que el miembro A sea mayor, o que sea exactamente igual al miembro B.

    Menor o igual que ( <= ) -> Retornará true en caso que el miembro A sea menor, o que sea exactamente igual al miembro B.

    Igualdad ( == ) -> Retornará true en caso que ambos miembros de la comparación sean iguales en valor.
*/
console.log(8 > 9);
console.log(9 > 8);
console.log(8 >= 9);
console.log(9 >= 8);
console.log(7 < 7);
console.log(7 <= 7);

/*En JavaScript, usar el comparador de igualdad "==" se considera una mala práctica. En su lugar, se recomienda usar el operador de igualdad triple ( === ).

La diferencia entre ambos operadores es que, mientras que el operador "==" compare que los valores sean iguales, el operador "===" compara que los valores sean iguales y que sean del mismo tipo de dato. En resumen:

    " = " ->significa asignación 
    " == " -> significa comparación de valores
    " === " -> sifnifica comparación de valores con su tipo de dato

Usar "==" da hincapié a los errores de comparación, pues es posible realizar comparaciones entre strings y enteros, por mencionar un ejemplo, y estos darían true debido a que su valor es igual, pero al usar la igualdad triple, retorna false debido a la diferencia entre los tipos de datos. 
*/
//Ejemplo de Igualdad vs Igualdad Triple
console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);

console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);

//Incremento - Decremento
/*Estos operadores se utilizan para aumentar o disminuir el valor de una variable. Estos operadores, por lo general, se escriben en notación corta por comodidad, debido a que realizar un incremento/decremento, manualmente, puede resultar incómodo y tedioso de escribir y leer.

    Incremento/decremento manual
        i = i + 1;
        j = j - 2;

    Incremento/decremento con operadores (notación corta)
        i += 1;
        j -= 2;
    
Ambas notaciones significan lo mismo, pero la notación corta es un estándar.
*/
let i = 2;
console.log(i);
i = i + 2;
console.log(i);
i += 3;
console.log(i);


/*En caso de querer incrementar o disminuir una variable, explícitamente en 1 unidad a la vez, se hace uso del Operador Unario. 

    Operador Unario para suma (incrementar la variable en 1 unidad)
        i++;

    Operador Unario para resta (decrementar la variable en 1 unidad)
        i--;

Este operador, de igual forma, puede definirse en orden inverso, es decir, ++i; e i--;. Sin embargo, se considera una mala práctica, pues existe una pequeña pero a la vez gran diferencia.

    Notación estándar ( i++, i-- )
        Esta notación primero lee el valor actual de la variable, en este caso, i, y luego la incrementa/decrementa.

    Notación inversa ( ++i, --i )
        Esta notación primero incrementa/decrementa el valor de la variable en cuestión, y luego lee el valor actual de la variable; en este caso, sería el valor actualizado.
*/
let j = 1;
console.log(j++);
console.log(++j);
console.log(j--);
console.log(--j);

/*Los operadores de incremento y decremento también se extienden a la multiplicación y división. Todos estos operadores son:

    Suma ( += ) -> Sirve para definir que una variable incrementará en N unidades.
        i += n;

    Resta ( -= ) -> Sirve para definir que una variable decrementará en N unidades.
        i -= n;
    
    Multiplicación ( *= ) -> Sirve para definir que una variable se multiplicará por si misma N veces.
        i *= n;

    División ( /= ) Sirve para definir que una variable se dividirá entre N unidades.
        i /= n;
*/
let k = 1;
console.log(k += 2);
console.log(k -= 1);
console.log(k *= 4);
console.log(k /= 2);

//Operadores lógicos
/*Los operadores lógicos sirven para crear condiciones compuestas, es decir, que la condición a analizar sea más compleja a través de la comparación múltiple creando una sola condición. Estos operadores son:

    Negación ( ! ) -> Sirve para negar una condición; si la condición a analizar es true, esta se tornará false, y viceversa.
    
    Operador OR ( || ) -> Sirve para conectar 2 condiciones o más; para que la condición sea valida, basta con que una de las condiciones analizadas se cumpla, retornando true.

    Operador AND ( && ) -> Sirve para conectar 2 condiciones o más; para que la condición sea valida, forzosamente, todas las condiciones analizadas deben cumplirse, retornando true. En caso de no cumplirse una sola, retornará false.
*/
console.log(!true);
console.log(!false);
console.log((9 === 9) || ("9" === 9));
console.log((9 === 9) && ("9" === 9));
console.log((9 === 9) && ("9" === "9"));



//ESTRUCTURAS CONDICIONALES
//Condicionales o sentencias if-else
/*Las sentencias if y else se utilizan para realizar condicionales, es decir, cuando deseamos evaluar algo y, en caso de obtener una respuesta u otra, se haga algo en concreto.

La sentencias if deberá acompañarse siempre de una condición encerrada en paréntesis ( Condición ), y seguido de esto, especificar la acción a cumplirse entre llaves. Por lo tanto, obtendríamos una estructura como la siguiente:

    if ( Condición ){
        - Acción a realizar cuando se cumpla esta condición -
    }

En el caso de que no se cumpla la condición que se esperaba, haremos uso de la sentencia else, que significa "si no", o en resumen, el caso contrario. Usando if y else, tendríamos la siguiente estructura:

    if ( Condición ){
        - Acción a realizar cuando se cumpla esta condición -
    } else {
        - Acción a realizar en caso de que no se cumpla la condición anterior -
    }

Ejemplos: Analizar la edad de una persona en México; si la persona es mayor a 18, imprimir en la consola "Eres mayor de edad", y si no, "Eres menor de edad".

Las soluciones aquí presentadas son posibles soluciones a este problema, debido a que se puede resolver de distintas formas. Cabe resaltar que, en este caso, el uso de operadores de comparación simples y compuestos cambia la lógica de la solución.

Al usar un operador simple, se excluyen valores; al usar operadores compuestos, estos valores se incluyen.
*/

let edad = 17;
if(edad > 17){
    console.log("Eres mayor de edad");
} else{
    console.log("Eres menor de edad");
}

if(edad >= 18){
    console.log("Eres mayor de edad");
} else{
    console.log("Eres menor de edad");
}

if(edad < 18){
    console.log("Eres menor de edad");
} else{
    console.log("Eres mayor de edad");
}

if(edad <= 17){
    console.log("Eres menor de edad");
} else{
    console.log("Eres mayor de edad");
}

//Condicionales Anidadas
/*Las condicionales anidadas representan el uso de sentencias if y else de forma consecutiva debido a que hay muchos más casos que deben ser analizados, y por ende, resueltos.

Cuando se habla de condicionales anidadas, aparece la sentencia "else if", que significa "en caso de no cumplirse la condición principal, verifica este otro caso". No debe confundirse con la sentencia else, pues esta significa "en caso de no cumplirse ninguno de los casos analizados, haz esto"

El orden, por lo general, es if - else if - else, dando lugar así a estructuras como la siguiente:

    if ( Condición principal ){
        - Acción en caso de que la condición principal se cumpla -
    } else if ( Condición secundaria){
        - Acción en caso de que la condición secundaria se cumpla -
    } else if ( Condición secundaria){
        - Acción en caso de que la otra condición secundaria se cumpla -
    } else if ...

    ... else{
        - Acción en caso de que no se cumplan ninguna de las condiciones anteriores -
    }

Ejemplo: Mandar un saludo adecuado a la hora actual. Considere los siguientes criterios: 

    Déjame dormir - 0hrs a 5hrs
    Buenos días - 6hrs a 11hrs
    Buenas tardes - 12hrs a 18hrs
    Buenas noches 19hrs a 23hrs

De igual forma, el uso de operadores relacionales simples y compuestos cambian la lógica de las soluciones propuestas.    
*/

let hora = 19;
if(hora >= 0 && hora <= 5){
    console.log("Déjame dormir");
}else if(hora >= 6 && hora <= 11){
    console.log("Buenos días");
}else if(hora >= 12 && hora <= 18){
    console.log("Buenas tardes");
}
else{
    console.log("Buenas noches");
}

if(hora < 6){
    console.log("Déjame dormir");
}else if(hora > 5 && hora < 12){
    console.log("Buenos días");
}else if(hora > 11 && hora < 19){
    console.log("Buenas tardes");
}
else{
    console.log("Buenas noches");
}

//Operador ternario
/*El operador ternario es una forma simplificada de hacer una condicional simple. Muchos lenguajes soportan esta característica.

Cuando se usa operadores ternarios, se debe construir una expresión con la siguiente estructura
    
    (Condición) ? verdadero : falso

        Condición -> En esta parte, se debe expresar la condición que se va a analizar

        ? -> El caracter "?" representa una separación entre la condición y las soluciones propuestas en caso de que se cumpla la condición o no.

        verdadero -> En esta parte, se debe expresar la acción que debe realizar la condición en caso de que la condición retorne verdadero (true).

        : -> El caracter ":" representa la separación entre la respuesta a que la condición retorne true y false. En palabras, representaría un else, o "si no".

        false -> En esta parte, se debe expresar la acción que debe realizarse en caso de que no se haya cumplido la condición, o en otras palabras, tras haber retornado false.

Ejemplos: Analizar la edad de una persona en México haciendo uso de operador ternario; si la persona es mayor a 18, imprimir en la consola "Eres mayor de edad", y si no, "Eres menor de edad".
*/
console.log("Operador ternario");
let eresMayor = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad"
console.log(eresMayor);

/*El uso del operador ternario en algunas ocasiones puede resultar tedioso; si bien acorta la sintaxis de una condicional, cuando se tengan expresiones más largas en cada lado de las respuestas posibles, en una misma línea, puede resultar tedioso de leer, inclusive confuso. 

Se recomienda la siguiente forma de escribir una condición usando operador ternario

    (Condición)
        ? verdadero
        : falso

Ejemplo:
*/
let eresMayor2 = (edad >= 18)
    ? "Eres mayor de edad" 
    : "Eres menor de edad"
console.log(eresMayor2);

//Switch-case
/*Cuando se tengan muchos casos a analizar de una condición, podemos hacer uso de la estructura condicional Switch. Esta estructura ofrece la posibilidad de analizar todas las posibilidades de una situación o condición concreta y manejarlas como casos. 

Switch hace uso de dos palabras reservadas:
    
    case -> Esta palabra describe el caso que se va a analizar. Siempre irá acompañada del valor (condición) a analizar. 

    break -> Esta palabra describe la interrumpción del flujo de un caso en un punto en concreto. Por lo general, se coloca al final del case. Es importante no olvidar añadir esta palabra reservada, pues de no hacerlo, el flujo de ejecución seguirá analizando el resto de casos dentro de la estructura.

Se recomienda usar esta estructura condicional cuando se tengan múltiples casos a analizar, y especialmente, cuando ya se tengan contemplados varios de los casos; de necesitar añadirse un caso más, solo será cuestión de escribirlo.

Existe una tercera palabra reservada de la cual Switch hace uso. Sin embargo, esta palabra no es 100% obligatoria de declarar, y es palabra es default:

    default -> Esta palabra describe el caso por defecto en caso de no cumplirse todos los casos establecidos en la estructura. Default de igual forma cuenta como un caso más, con la excepción de que sólo se ejecutará si la condición analizada retorna un valor distinto a los esperados.

Ejemplo: Imprimir el día de la semana en base al valor de su día; el valor inicial será 0 y se asignará al día domingo, y finalizará con el 6 asignado al día sábado.

   Domingo - 0
   Lunes - 1
   Martes - 2
   Miércoles - 3 
   Jueves - 4
   Viernes - 5
   Sábado - 6

*/
let dia = 2;
switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;

    default:
        console.log("El día no existe");
        break;
}



//CICLOS (LOOPS)
/*Los ciclos son estructuras de control repetitivas, es decir, que repiten fragmentos de código una y otra vez. Existen dos tipos de estructuras repetitivas: las definidas y las indefinidas.

    Definidas (o iterativas) -> Estas estructuras repiten código un determinado número de veces.

    Indefinidas -> Estas estructuras repiten código un número indefinido de veces; por lo general, están sujetas a que sólo se ejecuten mientras una condición se cumpla.

*/

// CICLOS INDEFINIDOS
//While
/*La estructura de control While sirve para ejecutar código de forma indefinida, pues siempre requerirá que una condición se cumpla. Por ejemplo:  */
let contador = 0;
while(contador < 10){
    console.log("while " + contador);
    contador ++;
}

//Do while
/*La estructura de control Do While es similar a la estructura While: de igual forma, repite indefinidamente un fragmento de código mientras se cumpla una condición. Lo que los diferencía, a simple vista, es que primero se debe escribir el código que se debe ejecutar y posteriormente la condición que debe cumplirse. */
do{
    console.log("do while " + contador);
    contador ++;
}while(contador< 10);

// WHILE vs DO WHILE
/*Hay una diferencia entre usar While y Do While:

    While -> Validará si la condición se cumple antes de ejecutar el código que esté contenida por la estructura

    Do While -> Ejecutará una vez el código
*/
//For

// for(inicilización de variable; condición; decremento o incremento){
//     sentencias que ejecuta el ciclo
// }

for (let i = 0; i < 10; i++) {
    console.log("for " + i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

//For in
/* Itera todas las propiedades de un objeto. La notación de punto no sirve para imprimir los valores de un objeto; se debe usar la notación de corchetes.*/
const jon = {
    nombre: "Jon",
    apellido: "Mircha",
    edad: 35
}

for (const propiedad in jon) {
    console.log(`Key: ${propiedad} Value: ${jon.propiedad}`);
}

for (const propiedad in jon) {
    console.log(`Key: ${propiedad} Value: ${jon[propiedad]}`);
}

//For of
/* Itera todos los elementos de un objeto que sea iterable. Por ejemplo: arrays o cadenas de texto.*/
for (const elemento of numeros) {
    console.log(elemento);
}

let cadena = "Hola mundo";
for (const caracter of cadena) {
    console.log(caracter);
}



//MANEJO DE ERRORES
/*El manejo de errores, también conocido como manejo de excepciones, es la acción de preveer errores de un tipo en concreto, de forma que, cuando estos ocurran, podamos hacer una acción determinada. 

Principalmente, esto se hace para que nuestro programa o aplicación no se detenga cuando ocurra un error, o de igual forma, si ocurre un error muy grave, este no pase a mayores y hagamos acciones como cerrar la aplicación para no poner en riesgo algo.

Las excepciones son errores que nosotros esperamos que ocurran. Podríamos decir que son errores calculados, pues sólo habrán errores que nosotros hayamos previamente contemplado. Para resolver esto, hacemos uso de errores personalizados, es decir, errores con un mensaje creado por nosotros para que se muestre al usuario; y esto lo hacemos a través de la estructura de control try-catch.


Try-catch tiene la siguiente estructura: 

    try {
        - Código a ejecutar y analizar si presenta errores -
    } catch (error) {
        - Errores contemplados en el try -
    } finally{ 
        - Código que siempre se ejecutará independientemente de presentarse errores o no -
    }

    NOTA: FINALLY ES OPCIONAL.

Try-catch hace uso de las siguientes palabras reservadas:

    try -> Significa "intentar"; en esta parte se debe colocar el código que se estará ejecutando.

    catch -> Significa "capturar"; en esta parte, se deben colocar todos los errores que contemplemos, que surjan o se lancen dentro del try.

    finally -> Significa "finalmente"; en esta parte, se debe colocar el código que siempre deberá ejecutarse independientemente de si se presentan errores o no.

    throw -> Significa "lanzar"; esta palabra se usa para lanzar un error.

Si existe un error en el try, este parará la ejecución del código a partir de la línea desde donde este se genere.
*/
console.log("--- Ejemplo de Try-Catch con error ---");
try {
    console.log("En el try se agrega el código a evaluar");
    variableQueNoExiste;
    console.log("Segundo mensaje en el try");
} catch (error) {
    console.log("Captura cualquier error surgiendo o lanzado en el try");
    console.log(error);
}
finally{
    console.log("Se ejecutará siempre al final de un bloque try-catch");
}

/*En en manejo de excepciones en JavaScript, existen distintos tipos de errores, cada uno representado por una clase en específico que, por ende, crea un objeto de dicho tipo de error.

Error es el objeto que sirve para crear un error genérico, es decir, "un error cualquiera" sin encasillarlo a un tipo de error en particular. Sin embargo, podemos existen otros tipos de errores.

Ejemplo: */
console.log("--- Ejemplo de Try-Catch con un error genérico ---");
try {
    let numero = 2;
    if(isNaN(numero)){
        throw new Error("Los caracteres introducidos no son un numero");
    }
    console.log(numero * numero);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}finally{
    console.log("Soy el finally");
}

/*VER INFORMACIÓN ACERCA DE LOS DISTINTOS TIPOS DE ERRORES E INFORMACIÓN COMPLEMENTARIA DE TRY-CATCH:

    try-catch: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch

    Error: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error

*/



//BREAK Y CONTINUE
/*Las palabras reservadas "break" y "continue" sirven para modificar el flujo de ejecución de nuestro código.

    break -> Esta palabra interrumpe el flujo del código; es común usarla en estructuras de control como switch para indicar que se "salga" del switch tras analizar todo el caso.

    continue -> Esta palabra omite el flujo del código; es usado en ciclos para hacer omisiones de las iteraciones realizadas. */
const numeros2 = [1,2,3,4,5,6,7,8,9,0];

//Ejemplo de break: interrumpir la impresión en consola del contenido de un arreglo cuando i sea igual a 5
console.log("\n\n--- Ejemplo de break ---");
for(let i = 0; i < numeros2.length; i++){
    if( i === 5) break;
    console.log(numeros2[i]);
}

//Ejemplo de continue: imprimir en la consola sólo los números pares de un arreglo
console.log("\n\n--- Ejemplo de continue ---");
for(let i = 0; i < numeros2.length; i++){
    if( numeros2[i] % 2 !== 0 ){
        continue;
    }
    console.log(numeros2[i]);
}



//DESESTRUCTURACIÓN
/*La desestructuración es la capacidad de los arreglos y objetos de "desempacar" los valores de sus propiedades en variables separadas.

La sintaxis de la desestructuración es:

    Para arreglos -> let/const [variable1, variable2, ..., variableN] = arreglo;

    Para objetos -> let/const {variable1, variable2, ..., variableN} = objeto;

Por ejemplo: usualmente, si queremos hacer referencia a los elementos de un arreglo, debemos referenciar al arreglo seguido de la posición del elemento en cuestión con la notación de corchetes ( [] ). En caso de querer asignar cada valor a una variable, las cada variable deberá tener asignada la posición del arreglo en cuestión.*/

//Sin desestructuración
let numeros3 = [1,2,3]

let uno = numeros3[0],
    dos = numeros3[1],
    tres = numeros3[2]

console.log(uno, dos, tres);

/*En cambio, al usar la desestructuración, podemos crear variables totalmente independientes para cada valor, en este caso, del arreglo.*/

//Con desestructuración
console.log("Array desestructurado");
let [one, two, three] = numeros3;
console.log(one, two, three);


/*En el caso de los objetos, la cosa cambia un poco. Para desestructurar un objeto, las variables deben contener exacta y estrictamente el mismo nombre de la propiedad del objeto en cuestión.

La desestructuración permite cambiar el orden de declaración de las propiedades desestructuradas de un objeto, pues no se guían de una posición, si no de un índice. Pero en el caso de los arreglos, el orden de declaración de las variables para cada valor sí influye.
*/

let persona = {
    nombre: "Jon",
    apellido: "MirCha",
    edad1: 35
};

let {nombre, edad1, apellido} = persona;
console.log(nombre, apellido, edad1);

/*Por último, en caso de necesitarlo, podemos omitir la declaración de una variable para evitar guardar el valor de la posición de un arreglo. 


Esto lo hacemos dejando el espacio en blanco, y separado por comas, dentro de la desestructuración de un arreglo.

Es importante destacar que esto no aplica para objetos.
*/

let personaArreglo = ["Oscar", 35, "correo@dominio.com"];
let [ nombreArreglo, /* aqui debería ir la variable para la edad */, correoArreglo] = personaArreglo;
console.log(nombreArreglo, correoArreglo);

/*VER INFORMACIÓN COMPLEMENTARIA ACERCA DE LA DESESTRUCTURACIÓN:

    La desestructuración: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#pru%C3%A9balo

*/



//OBJETOS LITERALES
/*Anteriormente, la forma de escribir objetos que usaran valores dados por variables era la siguiente: */
let nombre2 = "kenai", edad2 = 7;

//EJEMPLO DE FORMA ANTIGUA DE ESCRIBIR OBJETOS:

/*Como se puede observar, se usa la nomenclatura de siempre de clave: valor. Además, las funciones se declaraban explícitamente con la palabra reservada function. */
console.log("\n\nObjeto no literal");
const perro = {
    nombre: nombre2,
    edad: edad2,
    ladrar: function(){
        console.log("Guauu Guauu");
    }
}

console.log(perro);
perro.ladrar();

//FORMA AÑADIDA A PARTIR DE ES6:
/*Un objeto literal, es un objeto cuyas propiedades están declaradas textualmente en el código. En otras palabras, los objetos literales tienen como propiedades a las mismas variables, en lugar de tener una variable y un valor por separado.

Para declarar un objeto literal, usamos directamente el nombre de la variable como propiedad del objeto.

De igual forma, si deseamos añadir una nueva propiedad, basta con escribirla con la notación de clave: valor; algo a tener en cuenta, es que en un objeto literal, las funciones podemos declararlas escribiendo sólo su identificador seguido de sus paréntesis, y el código de la función entre llaves.

*/
console.log("\n\nObjeto literal");
const dog = {
    nombre2,
    edad2,
    raza: "Callejero",
    ladrar(){
        console.log("Guauu Guauu 2");
    }
}

console.log(dog);
dog.ladrar();

/*Con esta nueva notación, podemos hacer combinaciones de notación para declarar un objeto como mejor nos convenga. */



//PARÁMETROS REST Y OPERADOR SPREAD
/*A partir de ES6, se implementó un operador que, dependiendo la forma en que se use, tendrá un nombre u otro; este operador se denota escribiendo puntos suspensivos antes de un identificador, como se muestra a continuación:

    Ejemplo de sintaxis -> ...Identificador

*/

//REST
/*El operador toma como nombre "parámetro REST" cuando este se implementa en una función como parámetro. Cuando se manejan parámetros REST, este operador actúa como un arreglo que guardará los valores que no hayan sido asignados a un parámetro en concreto. 

Por ejemplo: observa la función sumar()

*/
/*Esta función tiene especificada dos parámetros a y b; posteriormente, encontramos un parámetro rest nombrado como c. Cuando enviemos dos parámetros, cada uno se asignará al parámetro a y el otro al b. 

Ahora, si se especifican más de dos parámetros: tres, cuatro, mil, etc., todos los restantes se asignarán al parámetro rest "c". El parámetro "c", al ser un arreglo, puede implementar métodos de los arreglos, como .forEach, que es un método en el que se debe especificar una función que se ejecutará por cada elemento en él.
*/
function sumar(a,b, ...c){
    let resultado =  a+b;

    c.forEach(function(n){
        resultado += n;
    });

    return resultado;
}

/*Si enviamos 2 parámetros, se asignarán a "a" y "b"*/
console.log(sumar(1, 2));
/*A partir de más de dos parámetros, todos los parámetros restantes se enviarán y almacenarán en "c" */
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(1, 2, 3, 4, 5, 6));
console.log(sumar(1, 2, 3, 4, 5, 6, 7));

/*Cabe mencionar que los parámetros rest sólo ocupan memoria siempre que tengan elementos; si estos no contienen, no se definen durante la ejecución y por ende, no ocupan memoria. */


//OPERADOR SPREAD
/*El operador spread se comporta de una forma similar a los parámetros REST; son capaces de almacenar muchos valores, pero este sólo se aplica a arrays. 

La principal diferencia entre un parámetro REST y un operador spread, es que el operador spread guardará todos los valores que el array contenga incluso si estos cambian (se eliminan,añaden o modifican elementos)

Por ejemplo: si declaramos dos arreglos arr1 y arr2, cada uno con elementos, podemos declarar un operador spread con estos mismos arreglos y, de esa forma, asignar su contenido a un nuevo arreglo arr3. */

const arr1 = [1,2,3,4,5],
      arr2 = [6,7,8,9,0]
console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2];
console.log(arr3);

/*Es importante destacar que podemos transformar un arreglo con spread a objeto. */
let values = [1,2,3,4,5,6];
let objValues = {...values};
console.log(objValues);

/*Sin embargo, no podemos transformar un objeto a arreglo. */
// let obj2 = {'key1': 'value1', 'key2': 'value2'};
// let array2 = [...obj];
// console.log(array2);

/*Podemos desestructurar un arreglo que use spread operator, incluso usando otro spread dentro de la desestructuración, es decir, capturar los valores restantes del spread en otro spread que está siendo usado para desestructurar al primero.*/
console.log("\nPRUEBA DE DESESTRUCTURACIÓN CON SPREAD");
const arr11 = [1,2,3,4,5],
arr22 = [6,7,8,9,0]
const arr33 = [...arr11, ...arr22];
console.log(arr33);

let [variable1, variable2, ...restoDelArray] = [...arr11]
console.log(variable1, variable2, restoDelArray);

/*También usar spread entre objetos, de forma que el spread de un objeto forme parte de las propiedades de otro objeto.*/
let objetoPrueba = {'k1': 'valor1', 'k2': 'valor2'}
let spreadObjetoPrueba = {...objetoPrueba}
console.log(spreadObjetoPrueba);
let objetoPrueba2 = { spreadObjetoPrueba }
console.log(objetoPrueba2);

/*Y de igual forma, usar un spread de una arreglo como propiedad en un objeto. */
const arregloPrueba = [1,2,3,4]
const spreadPrueba = [...arregloPrueba]
console.log("\nSpread de Prueba: " + spreadPrueba);
const objPrueba = { spreadPrueba }
console.log(objPrueba); 



//ARROW FUNCTIONS (FUNCIONES FLECHA)
/* En JavaScript, existen distintas formas de declarar funciones */
//Función declarada
/* Permite ser invocada incluso antes de ser invocada */
saludar();
function saludar(){
    console.log("Hola desde saludar()");
}

//Función expresada
/* Se invocan estrictamente después de haberlas declarado */
 const saludar2 = function(){
    console.log("Hola desde saludar2()");
}
saludar2();

/*Las funciones flecha, o arrow functions, se desclaran generalmente usando la notación expresada de una función; sin embargo, en lugar de escribir la palabra reservada function, se escriben directamente paréntesis que hacen referencia a los parámetros de la función, todo esto acompañado de una flecha conformada por el signo igual y mayor que juntos. Por último, declaramos las llaves. */
const saludarArrow = () => {
    console.log("Hola desde saludarArrow()");
}
saludarArrow(); 

/*Si la función flecha tiene una sola línea de código en su interior, podemos omitir las llaves y agregar la única línea de código seguido de la flecha de la función. */
const saludarArrowInLine = () => console.log("Hola desde saludarArrowInLine()");
saludarArrowInLine();

/*Si la función flecha tiene un sólo parámetro, podemos omitir los paréntesis de los parámetros. De esta forma, el único parámetro estará ubicado siempre después del signo igual de asignación.*/
const saludarWithAParam = nombre => console.log(`Hola ${nombre}`);
saludarWithAParam("Irma")

/*NOTA: LAS ARROW FUNCTIONS TIENEN UN return IMPLÍCITO, ES DECIR, NO ES NECESARIO ESPECIFICARLO DEBIDO A QUE SE RETORNARÁ EL VALOR OBTENIDO DE LA ÚLTIMA LÍNEA DE CÓDIGO DE LA ARROW FUNCTION. */


/*En cambio, si la arrow function tiene más de un parámetro, estos se deben especificar forzosamente en paréntesis.*/
const sumar2Arrow = (a, b) => a + b;
console.log(sumar2Arrow(8, 9));

/*Normalmente, cuando usamos métodos con arrays como el forEach, que recibe como parámetro una función que se ejecutará por cada elemento del arreglo, definimos la función con la palabra reservada function. */
const numeros4 = [1,2,3,4,5];

console.log("\n\n forEach con function");
numeros4.forEach(function(element, index){
    console.log(`El elemento ${element} está en la posición ${index}`);
})

/*De igual forma, podemos escribir entonces las funciones a través de arrow function, especificando primero los parámetros entre paréntesis y posterior a ello, agregamos la flecha con el código que queremos ejecutar. */
console.log("\n\n forEach con Arrow function");
numeros4.forEach((element, index) => console.log(`Elemento ${element} está en la posición ${index}`));


/*Las arrow functions capturan el objeto this del contexto en el que se encuentren. Si hacemos un objeto que contenga una función especificada con la palabra reservada function, el objeto this cambiará su valor al contexto en el que se ubica, que en este caso, el contexto es un objeto.*/
const perroNoArrow = {
    nombre: "kenai",
    ladrar: function (){
        console.log(this);
    }
}
perroNoArrow.ladrar();

/*Las arrow function adoptan el contexto en el que se encuentra su objeto padre. Como perroArrow está sin un contexto, el objeto this accede al objeto global Window. No se recomienda usar arrow functions en objetos, ya que cambian el contexto del objeto this.*/
const perroArrow = {
    nombre: "kenai",
    ladrar: () => {
        console.log(this);
    }
}
perroArrow.ladrar();

/*En caso de no querer escribir tanto, se recomienda usar mejor la notación objetos literales para evitar problemas con contextos en caso de usar el objeto this.*/
const perroLiteral = {
    nombre: "kenai",
    ladrar() {
        console.log(this);
    }
}

perroLiteral.ladrar();