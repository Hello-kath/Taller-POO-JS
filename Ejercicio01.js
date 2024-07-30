class BibliotecaMusica {
  /*aqui aplicamos el principio de encapsulamiento 
    indicando que atributos son publicos o privados mediante el signo: #.
    los atributos que no tienen ningun signo son publicos*/

  #duracion;
  constructor(titulo, artista, duracion) {
    this.titulo = titulo;
    this.artista = artista;
    this.#duracion = duracion;
    this.canciones = [];
  }
  //para utilizar duracion
  get duracion(){
    return this.#duracion;
  }
  // este método permite agregar una canción a la biblioteca de musica
  agregarCancion(cancion) {
    this.canciones.push(cancion);
  }

  // este método permite eliminar una cancion en especifico de la biblioteca de musica
  eliminarCancion(titulo) {
    for (let i = 0; i < this.canciones.length; i++) {
        if (this.canciones[i].titulo === titulo) {
            //entonces eliminar el titulo 
            this.canciones.splice(i, 1);
            break
        }
    }

  }

  //este metodo muestra los detaller de una canción
  mostrarDetalles() {
    for (let i = 0; i < this.canciones.length; i++){
        console.log(`titulo ${this.canciones[1].titulo}`)
    }
    
  }

}

let Biblioteca = new BibliotecaMusica("run", "Joji", "3:00")
let cancion1 = new BibliotecaMusica("see the sun", "Gaker Grace", "4:00")
Biblioteca.agregarCancion(cancion1)
let cancion2 = new BibliotecaMusica("see the sun", "Gaker Grace", "4:00")
Biblioteca.agregarCancion(cancion2)
Biblioteca.mostrarDetalles()




