class ModelMem {

    constructor() {
        this.productos = [
            
        ]
    }

    obtenerProductos = async () => this.productos
    
    obtenerProducto = async id => {
        const producto = this.productos.find(producto => producto.id === id)
        return producto || {}
    }

    guardarProducto = async producto => {
        producto.id = String(+(this.productos[this.productos.length - 1]?.id || 0) + 1)

        this.productos.push(producto)
        return producto
    }

    actualizarProducto = async (id, producto) => {
        producto.id = id

        const index = this.productos.findIndex(p => p.id === id)
        const productoAnt = this.productos[index]
        const productoNuevo = { ...productoAnt, ...producto }

        this.productos.splice(index, 1, productoNuevo)
        return productoNuevo
    }

    borrarProducto = async id => {
        let productoEliminado = {}

        const index = this.productos.findIndex(p => p.id === id)

        if (index != -1) {
            productoEliminado = this.productos.splice(index, 1)[0]
        }
        return productoEliminado
    }
}

export default ModelMem