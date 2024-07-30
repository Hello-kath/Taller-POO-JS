class CuentaBancaria {
    /*aqui hacemos uso del principio encapsulamiento ya que determinamos
     el atributo tipo cuenta como un atributo privado*/
  #tipoCuenta;
  constructor(nombreTitular, saldo, tipoCuenta) {
    this.nombreTitular = nombreTitular;
    this.saldo = saldo;
    this.#tipoCuenta = tipoCuenta;
  }

  get tipoCuenta(){
    return this.#tipoCuenta;
  }

  //Este método deberá aumentar el saldo de la cuenta.
  depositar(dinero) {
    this.saldo = this.saldo + dinero
  }

  /*Este método deberá verificar el saldo y el tipo de cuenta antes de realizar la operación y
disminuir el saldo si es posible.*/
  retirar(monto) {
    if(monto <= this.saldo && this.tipoCuenta === "corriente"){
        this.saldo = this.saldo - monto
        console.log(`tu daldo es de: ${this.saldo}`)
    } 
  }

  //Este método deberá mostrar el saldo actual de la cuenta.
  consultarSaldo() {
    console.log(`Tu saldo es de: ${this.saldo}`)
  }

  /*Este método deberá acceder al atributo privado tipoCuenta para mostrar la
información completa de la cuenta. */
/*este es un metodo que hace uso del principio de abstraccion
 ya que es un metodo abstracto */
  mostrarInformación() {
    console.log(`esta cuenta Bancaria es de; ${this.nombreTitular} saldo actual: ${this.saldo} tipo de cuenta: ${this.tipoCuenta}`)
  }
}

let miCuenta = new CuentaBancaria("Karen Peña", 10000, "corriente");
miCuenta.depositar(5000)
miCuenta.consultarSaldo()
miCuenta.retirar(1000)
miCuenta.mostrarInformación()