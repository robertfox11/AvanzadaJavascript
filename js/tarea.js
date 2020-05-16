// Exportando una variable
// const nameTarea = "paseando los perros";
// const tarea = "paseando el gato";
//exportando funcion
// export const crearTarea = (tarea, priori) => {
//   return `la tarea ${tarea} tiene una prioridad ${priori}`;
// };

// export const tareaCompletada = () => {
//   console.log("La tarea se completo");
// };
// export default {
//   name: nameTarea,
//   tarea: tarea,
//   functionTarea: crearTarea,
// };
// Exportando class

export default class Tarea {
  constructor(name, priori) {
    this.name = name;
    this.priori = priori;
  }
  mostrar() {
    return `${this.name} tiene una prioridad ${this.priori}`;
    // console.log(`${this.name} tiene una prioridad ${this.priori}`);
  }
}
//heredando clase padre que vien de tarea
// class Compra extends Tarea {
//   constructor(name, priori, count) {
//     //con super llammos los parametros que esta en la clase padre
//     super(name, priori);
//     this.name = name;
//     this.priori = priori;
//     this.count = count;
//   }
//   mostrar() {
//     super.mostrar();
//     console.log(`y la cantidad de ${this.count}`);
//   }
// }
// // crear objeto
// let tarea1 = new Tarea("React", "Alta");

// // console.log(tarea1.mostrar());
// //llama
// let compro1 = new Compra("Class", "Alta", 3);
// console.log(compro1);
// compro1.mostrar();
