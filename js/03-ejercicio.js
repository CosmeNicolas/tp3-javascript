/* 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.


*/
const lanzamientoDados = [];
const apariciones = [2,3,4,5,6,7,8,9,10,11,12]

const repeticiones = []
console.log(repeticiones)



//tirada de dados mas suma 
for(let tirada = 0 ; tirada < 50; tirada++ ){
  const lanzamiento1 = parseInt(Math.random() * 6 + 1)
  const lanzamiento2 = parseInt(Math.random() * 6 + 1)
  const sumaLanzamientos = lanzamiento1 + lanzamiento2;
  lanzamientoDados.push(sumaLanzamientos);
  
}

document.write(`<h2 class="titulo-tabla">🎲Tira de dados 🎲</h2>`)
document.write(`<table>`);
document.write(`<thead>`);
document.write(`<tr>`);
document.write(`<th  class="tabla">Suma🎲</th><th class="tabla">Apariciones👌🏼</th>`)
document.write(`</tr>`);
document.write(`<tbody>`)

for(let sumas = 0; sumas < apariciones.length; sumas++){
  document.write(`<tr>`);
  document.write(`<td>${apariciones[sumas]}</td>`);
  document.write(`<td>${repeticiones[0]}</td>`);
  document.write(`</tr>`);
} 


document.write(`</tbody>`)
document.write(`</table>`);


console.log(lanzamientoDados);




