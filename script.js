// ° Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.

let number1 = prompt("Decime un numero")
let number2 = prompt("Decime el otro numero")

if (number1 > number2) {
    console.log(number1 + " es mayor que " + number2)
} 

// ° Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.

let number3 = prompt("Decime un numero")
let number4 = prompt("Decime el otro numero")

if (number3 == number4) {
    console.log(number3 + " y " + number4 + " son iguales.")
} else {
    console.log(number3 + " y " + number4 + " no son iguales.")
}

// ° Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.

let number5 = prompt("Decime un numero")
let number6 = prompt("Decime el otro numero")

if(number5 == number6){
    console.log("Los numeros son iguales");
}else if(number5 > number6){
    console.log("El numero "+number5+" es más grande que el "+number6)
} else{
    console.log("El numero "+number5+" es más chico que el "+number6)
}

// ° Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.

let number7 = prompt("Decime un numero [1/3]")
let number8 = prompt("Decime el otro numero [2/3]")
let number9 = prompt("Decime un ultimo numero [3/3]")

if(number7 > number8 && number7 > number9){
    console.log(number7+" es mayor que todos los numeros")
} else if(number8 > number9 && number8 > number7){
    console.log(number8+" es mayor que todos los nros")
} else{
    console.log(number9+" es mayor que todos los nros")
}

// ° Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.

let persona1={
        nombre: "Sergio",
        edad: 54,
        altura: 173,
}
let persona2={
        nombre: "Vivi",
        edad: 52,
        altura: 169,
}

//° Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.



//° Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.



//° Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.



//° Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.



//° Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.



//°  Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.



//° Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.



//° Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.


