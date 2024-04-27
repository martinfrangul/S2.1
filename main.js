// EJERCICIO 1

const add = (a, b) => a + b;
console.log(add(5, 4));

// EJERCICIO 2

const randomNumber = () => Math.floor(Math.random() * 101);
console.log(randomNumber());

// EJERCICIO 3

class person {
  constructor(name) {
    this.name = name;
  }
  greet = () => {
    console.log(`Hi! ${this.name}`);
  };
}

const person1 = new person("Jorge");

person1.greet();

// NIVEL 2
// EJERCICIO 4

const arr = [1, 2, 7, 8, "h", 9, 3, 4, "f"];

const printNumbers = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

printNumbers(arr);

// NIVEL 3
// EJERCICIO 5

const numeroPerSec = () => {
  setTimeout(() => {
    console.log("HOLA");
  }, 3000);
};

numeroPerSec();

// EJERCICIO 1.2 OPERADOR TERNARIO
// NIVEL 1
//EJERCICIO 1

const potConduir = (edad) => {
  edad >= 18 ? console.log("Pots Conduir") : console.log("No pots conduir");
};

potConduir(18);

// EJERCICO 2

const comparacion = (num1, num2) => {
  num1 === num2
    ? console.log(`El número ${num2} es igual a ${num1}`)
    : num1 > num2
    ? console.log(`El número más grande es ${num1}`)
    : console.log(`El número más grande es ${num2}`);
};

comparacion(7, 5);
comparacion(7, 7);
comparacion(7, 9);

// NIVELL 2
// EJERCICIO 3

const num = -8;
const result = num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Cero";
console.log(result);

function encontrarMaximo(a, b, c) {
  const maximo = a > b ? (a > c ? a : c) : b > c ? b : c;
  return maximo;
}

const a = 10;
const b = 5;
const c = 8;
console.log(encontrarMaximo(a, b, c));

// NIVEL 3

let parOimpar = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 == 0 ? console.log("parell") : console.log("imparell");
  }
};

const array1 = [2, 5, 8, 7, 3, 10, 22, 6, 7, 9];

parOimpar(array1);

// SOLUCIÓN CREANDO ARRAY

parOimpar = (array) => {
  const arrayNew = [];
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 == 0 ? arrayNew.push("parell") : arrayNew.push("imparell");
  }
  console.log(arrayNew);
};

const array2 = [2, 5, 8, 7, 3, 10, 22, 6, 7, 9];

parOimpar(array1);

// 1.3 CALLBACKS
// NIVEL 1
// EJERCICIO 1

const processar = (nombre, callback) => {
  callback(nombre);
};

const callbackFunc = (num) => {
  console.log("El nombre rebut és:", num);
};

const num3 = 42;
processar(num3, callbackFunc);

// EJERCICIO 2

calculadora = (x, y, sum) => {
  sum(x, y);
};

const suma = (num1, num2) => {
  console.log(num1 + num2);
};

calculadora(2, 7, suma);

// NIVEL 2
// EJERCICIO 3

const esperarAlSaludar = (nom, espera) => {
  setTimeout(() => {
    espera(nom);
  }, 2000);
};

const saludoTardio = (nombre) => {
  console.log(`Hola ${nombre}!`);
};

esperarAlSaludar("Jorge", saludoTardio);

// EJERCICIO 4

const procesarElements = (array, funcionCall) => {
  funcionCall(array);
};

const cadaEl = (arrayNou) => {
  for (let j = 0; j < arrayNou.length; j++) {
    arrayNou[j] = arrayNou[j] + 1;
  }
};

let array7 = [1, 2, 3, 4, 7];
procesarElements(array7, cadaEl);

console.log(array7);

// NIVEL 3
// EJERCICIO 5

const procesarCadena = (cadena, fCall) => {
  let cadenaMay = cadena.toUpperCase();
  fCall(cadenaMay);
};

const transformarCadena = (cadenaTransformada) => {
  console.log(cadenaTransformada);
};

procesarCadena("martin", transformarCadena);

// 1.4
// NIVEL 1
// EJERCICIO 1

let arr10 = [1, 2, 3];
let arr22 = [4, 5, 6];

let arr33 = [...arr10, ...arr22];
console.log(arr33);

// EJERCICIO 2

const suma2 = (...arg) => {
  let sumaTotal = 0;
  for (let elem of arg) {
    sumaTotal += elem;
  }
  return sumaTotal;
};

console.log(suma2(4, 5, 2, 6, 5, 7));

// NIVEL 2

let coche = {
  marca: "ford",
  color: "azul",
};

let coche2 = {
  ...coche,
  marca: "renault",
};

console.log(coche);
console.log(coche2);

// EJERCICIO 4

const array = [1, 2, 3, 4, 5];

const [elemento1, elemento2, ...resto] = array;

console.log(elemento1);
console.log(elemento2);
console.log(resto);

// 1.5
// NIVEL 1
// EJERCICIO 1

let arrEx = [2, 4, 6];

const arrQuad = arrEx.map((el) => el * el);

console.log(arrQuad);

// EJERCICIO 2

arrEx = [18, 2, 1, 7, 9, 4, 6];

arrExFilter = arrEx.filter((el) => el % 2 === 0);

console.log(arrExFilter);

// EJERCICIO 3

arrExFind = arrEx.find((el) => el > 10);

console.log(arrExFind);

// EJERCICIO 4

let initialValue = 0;
const arrExSum = arrEx.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(arrExSum);

// NIVEL 2
// EJERCICIO 5


arrEx = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const hacerSumaFinal = (array) => {
  const sumaFinal = array
    .filter((el) => el >= 10)
    .map((el) => el * 2)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sumaFinal
};


console.log(hacerSumaFinal(arrEx));

// NIVEL 3
// EJERCICIO 6

const isBelowThreshold = (currentValue) => currentValue > 10

console.log(arrEx.every(isBelowThreshold));
console.log(arrEx.some(isBelowThreshold));


// ARRAY LOOPS

// EJERCICIO 1

noms = ['Anna', 'Bernat', 'Clara'];
noms.forEach(function(nom) {
    console.log(nom);
});


// EJERCICIO 2

noms = ['Anna', 'Bernat', 'Clara'];
for (let nom of noms) {
    console.log(nom);
}


// EJERCICIO 3


let numeros = [1, 2, 3, 4, 5, 6];
let numerosParells = numeros.filter(numero => numero % 2 === 0)


// NIVEL 2
// EJERCICIO 4

let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' };
for (let key in obj) {
    console.log(key + ': ' + obj[key]);
}

// EJERCICIO 5

numeros = [1, 2, 3, 4, 5, 6];
for (let numero of numeros) {
    console.log(numero);
    if (numero === 5) {
        break;
    }
}


// NIVEL 3

// EJERCICIO 6

noms = ['Anna', 'Bernat', 'Clara'];
for (let [index, nom] of noms.entries()) {
    console.log(`Índex ${index}: ${nom}`);
}



// ASYNC AWAIT

// EJERCICIO 1

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('Hola, món');
  }, 2000);
});

// EJERCICIO 2

promesa.then((resultat) => {
  console.log(resultat);
});

// EJERCICIO 3

let input = 'Hola'

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      if (input === 'Hola') {
          resolve('S\'ha resolt correctament.');
      } else {
          reject('S\'ha rebutjat la promesa asdasd.');
      }
  }, 2000);
});


// EJERCICIO 4
// NIVEL 2
async function asyncFunc() {
  try {
      const resultat = await promesa;
      console.log(resultat);
  } catch (error) {
      console.error(error);
  }
}

asyncFunc();



// NIVEL 3

function crearPromesa(tiempo, mensaje) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(mensaje);
      }, tiempo);
  });
}

const promesa3 = crearPromesa(2000, 'Primera promesa resuelta');
const promesa4 = crearPromesa(3000, 'Segunda promesa resuelta');

Promise.all([promesa3, promesa4])
  .then((resultados) => {
      console.log('Resultados:', resultados);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
