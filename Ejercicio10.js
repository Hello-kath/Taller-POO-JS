class GestionProyecto {
        //principio de encampusulamiento ya que determinamos que atributo sera privado mediante el signo: #
    #estado
    constructor(nombreProyecto, fechaInicio, fechaFin, estado){
        this.nombreProyecto = nombreProyecto;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin
        this.#estado = estado 
    }
    //este metodo de get nos ayudara a acceder al atributo privado y mostrarlo
    get estado(){
        return this.#estado
    }

    //este metodo de set nos permitira acceder al atributo privado y modificar su valor
    set estado(dato){
        this.#estado = dato
    }

    //Este método deberá cambiar el estado del proyecto a "en progreso";.
    iniciarProyecto(){
        if(this.estado === "inicio"){
            this.estado = "en progreso"
        }
    }

    //Este método deberá cambiar el estado del proyecto a "completado"
    finalizarProyecto(){
        if(this.estado === "finalizado"){
            this.estado = "completado"
        }
    }

    //Este método deberá acceder al atributo privado estado para mostrar el estado actual del proyecto
    //este hace uso del principio de encapsulamiento ya que es un metodo abstracto
    mostrarEstado(){
        console.log(`El estado actual del proyecto es: ${this.estado}`)
    }

}

//creamos la instancia de la clase 
let Proyecto = new GestionProyecto("AROG", "12-02-2023", "10-04-2024", "inicio");

Proyecto.finalizarProyecto()
Proyecto.mostrarEstado()
Proyecto.iniciarProyecto()
Proyecto.mostrarEstado()
