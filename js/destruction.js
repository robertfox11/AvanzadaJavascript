const person = {
  version: {
    nueva: "ES6",
    anterior: "ES5",
    year: 50,
  },
  framework: ["React", "Vue", "Angular"],
};
//destructuring es extraer  valores de un objeto esta es antigua forma
// console.log(person.version.anterior);
// console.log(person.framework[0]);

// Forma nueva
let { version, framework } = person;
console.log(version.year);
console.log(framework[2]);
