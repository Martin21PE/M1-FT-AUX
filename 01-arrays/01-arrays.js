
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"

    // la condicion del codigo:
    // psuedocodigo:
    // recorrer el arreglo, desde el final hacia adelante
    // verificar que el elemento no tenga mas de 1 digito
    // crear un array nuevo vacio
    // los elementos que pasen la condicion los agrego al nuevo array
    
    let nuevoArreglo = [];
  for (let i = 0; i < array.length; i++) {
    if ((array[i] < 10 && array[i] >= 0) || array[i].length < 2) {
      nuevoArreglo.unshift(array[i]);
    }
  }

  return nuevoArreglo;
};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    var newArray = [];

    for (var i = 0; i < array1.length; i++) {
      for (var i = 0; i < array2.length; i++) {
        if(array2[i] === array1[i]){
          newArray.push(array2[i]);
           }
         }
      }
    return newArray;
    }

// deberia pasar este test ya que se realizo en clase
    



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
   
    // [[1, 3], [10, 20, 4], [4, 5], 2]

    let arregloNuevo = [];
  array.forEach((element) => {
    if (Array.isArray(element) && element.length === 2) {
      // sumar sus 2 elementos y agregarlos al arreglo
      let suma = element[0] + element[1];
      arregloNuevo.push(suma);
    } else if (typeof element === "number") {
      arregloNuevo.push(element);
    }
  });
  return arregloNuevo;
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false;
   if (numero % divisor !== 0) return false;
   let aux = numero / divisor;
   let verificador = 0;
   let arr = [];
   while (divisor > verificador) {
      arr.push(aux);
      verificador++;
   }
   return arr;
};

// array = [100, 2, 10, 4, 1000, 5]  -> expected = [2, 4, 5, 10, 100, 1000] que esten ordenados.
function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido

  // pseudocodigo
  // Ordenar el arreglo
  // Pushear el primero y el ultimo

  // recorrer el arreglo
  // menor y mayor,y voy comparando si donde estoy parado es menor o mayor a mis variables
  // devolver un arreglo con [menor, mayor]

  // [ 2, 10, 34, -8 , 23, 899, 340] -------> [-8, 899]
  // [-8, 2, 10, 23, 34, 340, 899] ------> [array[0], array[array.length-1]]
  // google.com -> como ordenar un arreglo, javascript
  // "metodo SORT"

  // EJERCICIO #01: Usando metodo sort + operador de comparacion a - b para que se ordenen de menor a mayor.
  array.sort(function (a, b) {
    return a - b;
  });
  return [array[0], array[array.length - 1]];
}

// EJERCICIO forma #02:

// let arregloNuevo = [];
  // let menor = array[0]; // -8
  // let mayor = array[0]; // 899
  // for (let i = 1; i < array.length; i++) {
  //   if (array[i] < menor) {
  //     menor = array[i];
  //   }
  //   if (array[i] > mayor) {
  //     mayor = array[i];
  //   }
  // }

  // arregloNuevo.push(menor);
  // arregloNuevo.push(mayor);

  // return arregloNuevo;
// }





module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};