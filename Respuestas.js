//Ejercicio Uno
//Encontrar el número más grande en un array predefinido.
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
        maximo = numeros[i];
    }
}

//Ejercicio Dos
//Calcular la suma de todos los números en un array predefinido.
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

//Ejercicio Tres
// Contar la cantidad de vocales en una cadena de texto
for(let i = 0; i < texto.length; i++) {
    if(texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u') {
        cantidadVocales++;
    }
}

//Ejercicio Cuatro
// Determinar si un número es par o impar
if (numero % 2 === 0) {
    esPar = true;
} else {
    esPar = false;
}
