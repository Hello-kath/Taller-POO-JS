class GestionEmpleados {
    //principio de encampusulamiento ya que determinamos que atributo sera privado
    #Salario
    constructor(nombre, apellido, cargo, salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo; 
        this.#Salario = salario

    }

    //metodo get para poder accder al valor del salario y mostrarlo
    get Salario(){
        return this.#Salario
    }


    //metodo set para poder modificar el valor del salario
    set Salario(valor){
        return this.#Salario = valor
    }

    /*Este método deberá implementar la lógica para calcular el sueldo neto en base al salario y las deducciones correspondientes. */
    calcularSueldoNeto(deducciones) {
        this.Salario -= deducciones

    }

    /*Este método deberá acceder al atributo privado salario para mostrar los datos completos del empleado.}
     y se considera un metodo abstracto que accede a la informacion del metodo privado*/
    mostrarDatos() { 
        console.log(`Los datos del empleado son los siguientes: nombre y apellido: ${this.nombre} ${this.apellido}
        cargo: ${this.cargo}
        salario: ${this.Salario}`)
    }

}

let Empleados = new GestionEmpleados("Alices", "Castel", "Diseñadora", 100000);
Empleados.calcularSueldoNeto(10000);
Empleados.mostrarDatos();