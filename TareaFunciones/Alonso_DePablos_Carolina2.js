let frase = "en un lugar de la mancha";

/**
 * Devuelve un String similar al original pero sin espacios y en 'CamelCase'
 * @param {String} input_frase frase inicial
 * @returns String final
 */
let f4 = (input_frase) => input_frase.split(" ").map(token => token.replace(token.charAt(0), token.charAt(0).toUpperCase())).join("");

/**
 * Devuelve la longitud media de las palabras
 * @param {String} input_frase frase inicial
 * @returns Num longitud media
 */
let f5 = (input_frase) => input_frase.split(" ").map(token => token.length).reduce((ac, n, i, a) => ((a.length - 1) == i) ? ((ac + n) / (i + 1)) : (ac + n));

/**
 * Devuelve un array con la longitud de cada una de las palabras que contengan la letra 'a'
 * @param {String} input_frase Frase inicial
 * @returns Array de numeros
 */
let f6 = (input_frase) => input_frase.split(" ").filter(token => token.toLowerCase().includes('a')).map(token => token.length);
console.log("FUNCION f4: " + f4(frase));
console.log("FUNCION f5: " + f5(frase));
console.log("FUNCION f6: " + f6(frase));
