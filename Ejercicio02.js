class AgendaContactos{
    constructor(nombre, apellido, teléfono, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.teléfono = teléfono;
        this.email = email;
        this.contactos = [];

    }

    //Este método deberá agregar un nuevo contacto a la agenda.
    agregarContacto(contacto){
        this.contactos.push(contacto);
    }

    //Este método deberá permitir editar la información de un contacto existente.
    set setEditarContacto(nombre){
        this.nombre = nombre
    }

    //Este método deberá eliminar un contacto de la agenda.
    eliminarContacto(nombre, apellido){
        for(let i=0; i < this.contactos.length; i++){
            if(this.contactos[i].nombre == nombre && this.contactos[i].apellido == apellido){
                this.contactos.splice(i, 1);
                break
            }
        }

    }

      /*aqui aplicamos el principio de encapsulamiento 
    indicando que el metodo mostrarcontactos s un metodo privado mediante el signo: #.*/
    //Este método deberá mostrar todos los contactos de la agenda.
    #mostrarContactos(){
        for(let i=0; i < this.contactos.length; i++){
            console.log(`tus contactos son nombre: ${this.contactos[i].nombre}`)
        }
    }

    //metodo abstracto ya que no contiene ninguna operacion 
    lista(){
        return this.#mostrarContactos()
    }

   
}

let contactos = new AgendaContactos("Sara", "Ruiz", 3125468947, "saraR@gmail.com")
//agregar contactos al arreglo
let usuario1 = new AgendaContactos("Felipe", "Escobar", 3115488947, "Felipe@gmail.com")
contactos.agregarContacto(usuario1)
let usuario2 = new AgendaContactos("Daniela", "ortiz", 3115488937, "Dani@gmail.com")
contactos.agregarContacto(usuario2)
//contactos.lista()
//modificar un dato del contacto
usuario1.nombre = "Ricardo"
//contactos.lista()
usuario1
//eliminar contacto 
contactos.eliminarContacto("Daniela", "ortiz")
contactos.lista()