class InventarioAlmacen{
     //principio de encampusulamiento ya que determinamos que atributo sera privado
    #cantidadEnStock
    constructor(códigoProducto, nombreProducto, cantidadEnStock){
        this.nombreProducto = nombreProducto || [];
        this.códigoProducto = códigoProducto
        this.#cantidadEnStock = cantidadEnStock 
    }

    //get para acceder al atributo privado por medio de este metodo y se considera un metodo abstracto
    get cantidadEnStock(){
        return this.#cantidadEnStock
    }

    //set para poder modificar la cantidad en stock
    set cantidadEnStock(cantidad){
        this.#cantidadEnStock = cantidad
        
    }
    /*Este método deberá verificar si el producto ya existe 
    antes de agregarlo y aumentar la cantidad en stock.*/
    agregarProducto(producto, cantidad){
        for(let i=0; i<this.nombreProducto.length; i++){
            if(this.nombreProducto[i].producto !== producto){
                this.nombreProducto.unshift(producto)
                //cantidad en stock va a ser mas 1
                this.cantidadEnStock += cantidad
            }
            break
        }
    }

    /*Este método deberá verificar la cantidad en stock antes de retirar el producto.*/
    retirarProducto(nombre){
        for(let i=0; i<this.nombreProducto.length; i++){
            if(this.nombreProducto[i] == nombre && this.cantidadEnStock > 0){
                this.cantidadEnStock -= 1
                this.nombreProducto.splice(i, 1);
                break
                
            }
        }return this.cantidadEnStock
    }

    /*Este método deberá acceder al atributo privado cantidadEnStock para mostrar el
     stock del producto. y se considera un metodo abstracto*/
    
    mostrarStock(){
        console.log(`la cantidad de los productos es ${this,this.cantidadEnStock}`)
    }


}
 let miAlmacen = new InventarioAlmacen("0034", ["brochas", "perfume", "labial", "pulceras"], 20);
 miAlmacen.agregarProducto("Acuarelas", 2);
 console.log(miAlmacen.retirarProducto("labial"))
 miAlmacen.mostrarStock()

