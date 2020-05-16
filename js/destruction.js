const javasript = {
  version: {
    nueva: "ES6",
    anterior: "ES5",
    year: 50,
  },
  framework: ["React", "Vue", "Angular"],
};
//destructuring es extraer  valores de un objeto esta es antigua forma
// console.log(javasript.version.anterior);
// console.log(javasript.framework[0]);

// Forma nueva
let { version, framework } = javasript;
console.log(version.year);
console.log(framework[2]);
