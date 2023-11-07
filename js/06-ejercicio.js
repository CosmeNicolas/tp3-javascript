/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:

Input:
lado A = 24
lado B = 5

Output: 58
*/


const primerLado = parseFloat(prompt('Ingrese su primer lado'));
const segundoLado = parseFloat(prompt('Ingrese su segundo lado'));

function perimetro(primerLado,segundoLado){
 const resultadoPerimetro =  2*(primerLado + segundoLado);
 document.write(`El resultado del Perimetro es ${resultadoPerimetro}`)
}

perimetro(primerLado,segundoLado)