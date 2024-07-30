class Carrera {
    /*aqui estamos haciendo uso del principio de encapsulamiento
     ya que estamos determinando que propiedades son privadas */
  #velocidadMáxima;
  #combustibleActual;
  constructor(marca, modelo, velocidadMáxima, combustibleActual) {
    this.marca = marca;
    this.modelo = modelo;
    this.#velocidadMáxima = velocidadMáxima;
    this.#combustibleActual = combustibleActual;
    this.velocidadActual = "";
  }

  //metodo para acceder al atributo privado velocidadMáxima
  get velocidadMáxima() {
    return this.#velocidadMáxima;
  }
  //metodo para acceder al atributo privado combustibleActual
  get combustibleActual() {
    return this.#combustibleActual;
  }

  //Este método deberá verificar el combustible actual antes de aumentar la velocidad.
  acelerar(acelerar) {
    if (this.combustibleActual > 10) {
      this.velocidadActual = this.velocidadMáxima + acelerar;

      console.log(
        `velocidad actual ${this.velocidadMáxima}km/h acelerando a ${this.velocidadActual}km/h`
      );
    } else {
      console.log("No hay suficiente combustible para acelerar");
    }
  }

  //Este método deberá reducir la velocidad del auto.
  frenar(frenar) {
    this.velocidadActual = this.velocidadMáxima - frenar;
    console.log(
      `disminuyendo velocidad ${this.velocidadMáxima} a ${this.velocidadActual}`
    );
  }

  //Este método deberá aumentar el combustible actual del auto.
  recargarCombustible(combustible) {
    this.#combustibleActual = this.combustibleActual + combustible;
  }

  /*Este método deberá acceder a los atributos privados velocidadMáxima y combustibleActual para mostrar el estado del auto.*/
  //este se puede considerar un metodo abstracto ya que solo esta mostrando un console.log
  mostrarEstado() {
    console.log(`El estado actual del auto es de: combustible actual ${this.combustibleActual}, velocidad maxina: ${this.velocidadMáxima}`)
  }
}

let carreraAutos = new Carrera("Ferrar", "2023", 20, 20);
carreraAutos.acelerar(15);
carreraAutos.frenar(10);
carreraAutos.recargarCombustible(20);
carreraAutos.mostrarEstado();
