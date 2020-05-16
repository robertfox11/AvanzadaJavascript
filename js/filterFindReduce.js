//metodos en arreglos
const personas = [
  { name: "Robert", Edad: 45, lenguaje: "php" },
  { name: "Rosa", Edad: 20, lenguaje: "Java" },
  { name: "Rock", Edad: 25, lenguaje: "Js" },
  { name: "Ruperta", Edad: 52, lenguaje: "python" },
  { name: "Rusa", Edad: 32, lenguaje: "c" },
];
// filter mayores de 28 años
const Mayores = personas.filter((persona) => {
  return persona.Edad > 28;
});
console.log(Mayores);

// Que aprende Rosa y su edad encontrar
const Rosas = personas.find((persona) => {
  return persona.name === "Rosa";
});
console.log(Rosas);

// Para saber el total del los datos reduce
const total = personas.reduce((edadTotal, personaActual) => {
  return edadTotal + personaActual.Edad;
}, 0);
console.log(personas.length);
console.log(total / personas.length);
