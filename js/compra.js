class Compra extends Tarea {
  constructor(name, priori, count) {
    //con super llammos los parametros que esta en la clase padre
    super(name, priori);
    this.name = name;
    this.priori = priori;
    this.count = count;
  }
  mostrar() {
    super.mostrar();
    console.log(`y la cantidad de ${this.count}`);
  }
}
// crear objeto
let tarea1 = new Tarea("React", "Alta");

// console.log(tarea1.mostrar());
//llama
let compro1 = new Compra("Class", "Alta", 3);
console.log(compro1);
compro1.mostrar();
