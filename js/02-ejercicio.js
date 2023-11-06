/**2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]


 */
const ciudades = ['Nueva York, Estados Unidos', 'Barcelona, España', 'Tokio, Japon', 'Londres, Reino Unido', 'Roma, Italia', 'Pekin, China', 'Río de Janeiro, Brasil', 'Amsterdan, Paises Bajos', 'Sídney,Australia', 'El Cairo, Egipto'];

document.write(`Lista de Ciudades sin Push de Elemento🏙️${ciudades.length}`)

do {
  const ciudadesIngresadas = prompt('ingrese una ciudad y pais');
  ciudades.push(ciudadesIngresadas);

  document.write(`<h2>Lista de Ciudades 🏙️${ciudades.length}</h2>`)
  document.write(`<ul>`)
  for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`)
  }
  document.write(`<strong>El arreglo una vez ingresado una ciudad es ${ciudades.length}</strong>`)
  document.write(`<h2>Lista de Ciudades: Acciones🏙️</h2>`)
  document.write(`<li>El arreglo una vez ingresado una ciudad es ${ciudades.length}</li>`)
  document.write(`<li>El primer elemento es ${ciudades[0]}</li>`)
  document.write(`<li>El tercer elemento es ${ciudades[2]}</li>`)
  document.write(`<li>El último elemento es ${ciudades[10]}</li>`)
  document.write(`<li>El elemento que ocupa la segunda posición es ${ciudades[1]}</li>`)
  document.write(`<ul>`);
  document.write(`<br>`)
  ciudades.splice(1,1,'Barcelona');

  for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`)
  }
  
} while (confirm('Desea ingresar otra ciudad') === true);





/* document.write(`<ul>`)
 document.write(`<li>`)
 document.write(ciudades.length)
 document.write(`</li>`)
 document.write(`<li>`)
 document.write(ciudades[0],[2],([ciudades.length -1]))
 document.write(`</li>`)
 document.write(`</ul>`)
*/
