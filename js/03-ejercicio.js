/* 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.


*/

const apariciones = [0,0,0,0,0,0,0,0,0,0,0,0,0]
console.log(apariciones.length)





//tirada de dados mas suma 
for(let tirada = 0  ; tirada < 50; tirada++ ){
  let lanzamiento1 = Math.floor(Math.random() * 6 )+ 1;
  let lanzamiento2 = Math.floor(Math.random() * 6 )+ 1;
  const sumaLanzamientos = lanzamiento1 + lanzamiento2;
  console.log(lanzamiento1,lanzamiento2,sumaLanzamientos);
  apariciones[sumaLanzamientos]++
}

console.log(apariciones)

document.write(`<h2 class="titulo-tabla">🎲Tira de dados 🎲</h2>`)
document.write(`<table>`);
document.write(`<thead>`);
document.write(`<tr>`);
document.write(`<th  class="tabla">Suma🎲</th><th class="tabla">Apariciones👌🏼</th>`)
document.write(`</tr>`);
document.write(`<tbody>`)

for(let i = 2; i <= 12 ; i++){
  document.write(`<tr>`);
  document.write(`<td>${i}</td>`);
  document.write(`<td>${apariciones[i]}</td>`);
  document.write(`</tr>`);
} 


document.write(`</tbody>`)
document.write(`</table>`);





