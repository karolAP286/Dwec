let original_array = [1, 2, 3, 4];

/**
 * Funcion f1 devuelve un array con numeros qe sean el resultado de multiplicar cada parametro por 3,
 * filtrando los resultados no divisibles por 4
 * @param {Array} input_array array de entrada
 * @returns {Array} array de salida
 */
let f1 = (input_array) => input_array.map(number => number * 3).filter(divisible => (divisible % 4) != 0);

/**
 * Funcion f2 visualiza en consola los elementos de un array que no sean divisibles por 2.
 * @param {Array} input_frase Array de entrada
 */
let f2 = (input_array) => input_array.forEach(number => {
    if (number % 2 != 0) {
        console.log(number);
    }
});

/**
 * Devuelva la suma de todos los elementos que esten en una posicion par
 * @param {Array} input_array  Array de entrada
 * @returns ac suma de los elementos
 */
let f3 = (input_array) => input_array.reduce((acc, number, i) => {
    if(i%2==0){
        return acc + number;      // considero que el 0 es par. 
    } else {
        return acc;
    }
});

console.log("FUNCION F1 : " + f1(original_array));
console.log("FUNCION F2 : ");
f2(original_array);
console.log("FUNCION F3 : "+ f3(original_array));
