/**Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
 */


const numero = parseInt(prompt('Ingrese un numero'))

function multiplicar(numero){
  const multiplicadores = [1,2,3,4,5,6,7,8,9,10];
  document.write(`<h2>➗✖️➖➕Tabla de Multiplicar ➕➖✖️➗</h2>`)
  for(let i = 0 ;i < multiplicadores.length; i++){
    resultado =  numero * multiplicadores[i]
    document.write(`La tabla del multiplicar del ${numero} es ${numero}  x ${multiplicadores[i]}  = ${resultado}`)
    document.write(`<br>`)
  }
}
multiplicar(numero)