/** ARRAYS
 * 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
 */

const meses = ["Enero","febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Novimebre","Diciembre"];

document.write(`<h2>Lista de Meses 🗓️</h2>`)

document.write(`<ul>`)
for(let i = 0; i < meses.length; i++){
  document.write(`<li>`);
  document.write(meses[i])
  document.write(`</li>`);
}
document.write(`</ul>`);