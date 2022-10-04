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


