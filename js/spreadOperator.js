// sprear operator
let lenguajes = ["javaScript", "php", "python"];
let frameworks = ["react", "laravel", "django"];

// Podmeos unir los arreglos en uno solo
const nuevoArreglo = [...lenguajes, ...frameworks];
console.log(nuevoArreglo);
// con sprear no se quedara modificada tu arreglo

let [ultimo] = lenguajes.reverse();
let [ultimosprear] = [...lenguajes].reverse();
console.log(ultimo + "sin sprear se modifica el arreglo original");
console.log(ultimosprear + "con sprear no se modifica el arreglo original");

function suma(a, b, c) {
  console.log(a + b + c);
}
const sum = [1, 3, 5];
//con el sprear suma los numeros que esta en la constante
suma(...sum);
