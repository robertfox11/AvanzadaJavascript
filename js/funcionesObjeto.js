const javasript = {
  version: {
    nueva: "ES6",
    anterior: "ES5",
    year: 50,
  },
  framework: ["React", "Vue", "Angular"],
  mostrarVersion() {
    console.log(`${this.version.anterior}, es ${this.framework[1]}`);
  },
};
javasript.mostrarVersion();
