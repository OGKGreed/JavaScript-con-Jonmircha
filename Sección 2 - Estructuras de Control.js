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



//Ciclos (Loops)