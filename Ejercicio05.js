class Biblioteca{
    //principio de encampusilamiento ya que determinamos que atributo sera privado
    #disponible
    constructor(titulo, autor, disponible){
        this.titulo = titulo;
        this.autor = autor
        this.#disponible = disponible 

    }
    //Este metodo nos permite acceder a la propiedad privada metodo abstracto
    get disponible(){
        return this.#disponible
    }
    //Este método deberá verificar si el libro está disponible antes de prestarlo.
    prestarLibro(nombre){
        if(nombre === this.titulo && this.disponible === "si"){
            console.log("Prestar")
            this.#disponible = "no"
        }else if(nombre === this.titulo && this.disponible === "no"){
            console.log("No prestar")

        }

    }
//Este método deberá marcar el libro como disponible nuevamente.
devolverLibro(nombre){
    if(nombre === this.titulo){
        this.#disponible ="si"
    }
}

/* Este método deberá acceder al atributo privado disponible
y se considera un metodo abstracto para mostrar el estado del libro.*/
mostrarEstado(){
    console. log( this.disponible )
}
   
}

let biblioteca = new Biblioteca("El principito", "Antoine de Saint-Exupéry", "si" )
biblioteca.prestarLibro("El principito")
biblioteca.mostrarEstado()
biblioteca.devolverLibro( "El principito" )
biblioteca.mostrarEstado()


