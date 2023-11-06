/**5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */

const cadenaTexto = prompt('Ingrese su texto');

function letrasCobinadas(cadenaTexto){
  //for(let texto = 0; texto < cadenaTexto.length; texto++){
    if(cadenaTexto === cadenaTexto.toLowerCase()){
      document.write(`La cadena de texto ${cadenaTexto} ,todas sus letras son minusculas`)
   // }
  } else if(cadenaTexto === cadenaTexto.toUpperCase()){
     document.write(`La cadena de texto ${cadenaTexto} ,todas sus letras son mayusculas`)
  } else{
     document.write(`La cadena de texto ${cadenaTexto} ,tiene mayusculas y minusculas`)
  }
}

letrasCobinadas(cadenaTexto);