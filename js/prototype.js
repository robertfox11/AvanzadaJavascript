// Esta funcion solo sera utilizada en tipo de objetos
// function MostrarinforPerson(tarea, priori) {
//   return `la tarea ${tarea} tiene una prioridad ${priori}`;
// }
const person = {
  name: "Juan",
  profession: "Desarrollo Web",
  year: 50,
};
// console.log(person);
function Tarea(name, urgencia) {
  this.name = name;
  this.urgencia = urgencia;
}
//Agregar un prototype atarea esta atado con el objeto de tipo tarea no se puede utilizar con otros metodos
Tarea.prototype.MostrarinforPerson = function () {
  return `la tarea ${this.name} tiene una prioridad ${this.urgencia}`;
};

const tarea1 = new Tarea("Aprender Js y react", "urgente");
// como agreagmos el prototype
console.log(tarea1);
console.log(tarea1.MostrarinforPerson());
// console.log(`tarea1 ${tarea1.name}, ${tarea1.urgencia}`);
const tarea2 = new Tarea("Preparar Cafe", "urgente");
console.log(tarea2.MostrarinforPerson());
// const tarea3 = new Tarea("Pasear el perro", "Media");
// const tarea4 = new Tarea("Conocer a la suegra", "Baja");

// const mostraInfo = MostrarinforPerson(tarea1.name, tarea1.urgencia);

// console.log(`mostraInfo ${mostraInfo}`);
// console.log(tarea3);
// console.log(tarea4);
