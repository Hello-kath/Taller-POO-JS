class ReservasHotel {
    //principio de encampusulamiento ya que determinamos que atributo sera privado mediante el signo: #
    #habitacionAsignada
    constructor(nombreCliente, fechaReserva, habitacionAsignada, habitaciones){
        this.nombreCliente = nombreCliente;
        this.fechaReserva = fechaReserva;
        this.#habitacionAsignada = habitacionAsignada;
        this.habitaciones = habitaciones || [];

    }

    //metodo get para mostrar el atributo privado habitacion Asignada
    get habitacionAsignada(){
        return this.#habitacionAsignada
    }


    //metodo set para modificar el atributo privado 
    set habitacionAsignada(numH){
        return this.#habitacionAsignada = numH
    }
    //Este método deberá asignar una habitación disponible al cliente.
    reservarHabitacion(numHabitacion){
        for(let i=0; i<this.habitaciones.length; i++){
            if(this.habitaciones[i] == numHabitacion){
                this.habitacionAsignada = numHabitacion
                this.habitaciones.splice(i, 1)
                console.log(`su habitacion: ${this.habitacionAsignada} ha sido reservada`)
                break
            }else if(this.habitacionAsignada == numHabitacion){
                console.log(`Habitacion ${numHabitacion} no está disponible`)
                break
            }
            
        }

    }

    //Este método deberá cancelar la reserva del cliente.
    cancelarReserva(numHabitacion){
     this.habitaciones.push(numHabitacion)
     this.habitacionAsignada = undefined
     console.log(`la reserva numHabitacion: ${numHabitacion} ha sido cancelada`)

    }

    //Este método deberá acceder al atributo privado habitacionAsignada para mostrar los detalles de la reserva.
    //se considera un metodo abstracto porque solo muestra un console.log
    mostrarReserva(){
        console.log(`nombre del cliente: ${this.nombreCliente} fecha de reserva: ${this.fechaReserva}
        habitacion asignada; ${this.habitacionAsignada}`)
    }
    
}

//instancia de la clase
let Hotel = new ReservasHotel("Ricardo", "12-02-2023", "02", ["01", "02", "03", "04", "05"]);
Hotel.reservarHabitacion("03")
Hotel.mostrarReserva()
Hotel.reservarHabitacion("03")
Hotel.cancelarReserva("03")
Hotel.reservarHabitacion("03")

