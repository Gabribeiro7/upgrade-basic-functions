// ? Iteración 1
//? Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}

//*? **Iteración #2: Buscar la palabra más larga**
//*? Completa la función que tomando un array de strings como argumento devuelva el más largo,
//*? en caso de que dos strings tenga la misma longitud deberá devolver el primero.

let avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(param) {
  let longestWord = param[0]; 
  
  
  for (let index = 0; index < param.length; index++) {
    let element = param[index];
    
    if (element.length > longestWord.length) {
      
      longestWord = element;
    }
  }
  return longestWord;
}
console.log(findLongestWord(avengers));


//*? **Iteración #3: Calcular la suma**

//*? Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//*? Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve 
//*? la suma de todos los números de la matriz.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let sumNumbers = 0;

  for (let i = 0; i < param.length; i++) {
    
  sumNumbers += param[i];
  }
  return sumNumbers;
}
console.log(sumAll(numbers));

// **Iteración #4: Calcular el promedio**

//*? Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers1 = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
  let avg = 0;
  let division = "";
  for (let i = 0; i < array.length; i++) {
    
    avg += array[i];
    
    division = avg / array.length;
    
  }
  return division;
  
}
console.log(average(numbers1));

//*? **Iteración #5: Calcular promedio de strings**

//*? Crea una función que reciba por parámetro un array y cuando es un valor 
//*? number lo sume y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array) {
  let numbers = 0;
  let words = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof element === "number") {
      numbers += element
    }
    else {
      typeof element === "string"
       words += element.length
    }
  }
  return console.log("La suma de los numeros es igual a " + numbers + " y la suma de la longitud de las palavras es igual a " + words); 
  
}
averageWord(mixedElements);

//*? **Iteración #6: Valores únicos**

//*?Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
//*?en caso que existan los elimina para retornar un array sin los elementos duplicados.

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(array) {
  
  for (let i = 0; i < array.length; i++) {
    for (let k = i + 1; k < array.length; k++) {
      if (array[i] === array[k]) {
        array.splice(i, 1)
        
      }
    }
  }
  return console.log(array);
}
removeDuplicates(duplicates);


//*?**Iteración #7: Buscador de nombres**

//*?Crea una función que reciba por parámetro un array y el valor que desea comprobar que 
//*?existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos 
//*?devuelve la posición de dicho elemento y por la contra un false

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(array , doesItExist) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === doesItExist) {
       return i;
    }
  }
  return false;
}
let result = finderName(nameFinder, 'Marc');
console.log(result);

//*? **Iteration #8: Contador de repeticiones**

//*? Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(array) {
  let numberOfTimes = [];
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    
    for (let j = 0; j < array.length; j++) {
      array [i] === array[j] && counter ++; 
      } 
     
    numberOfTimes[array[i]]= counter;
    counter = 0;
   }
   return numberOfTimes;

} 
console.log(repeatCounter(counterWords));