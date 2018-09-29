class Tienda{
    constructor(){
        this.productos = [
            {
                codigo:1,
                descripcion: 'Chocovito',
                tipoProducto:'Alimento Indispensable',
                precioCompra:0.15,
                precioVenta:0.25,
                stock:10
            }
        ];
    }
    agregarProducto(
            descripcion='producto',
            tipoProducto='generico',
            precioCompra= -1,
             precioVenta = 0.25){                 
        if(
            !(typeof(descripcion) == 'string') || 
            !(typeof(tipoProducto)=='string') ||
            !(typeof(precioCompra) == 'number')||
            !(typeof(precioVenta) == 'number') ) return 'Dato/s ingresado/s no validos'
        else if(precioCompra<0 || precioVenta<0) return 'No pueden haber precios negativos';
        else{
            this.productos.push(
                {
                    codigo:this.productos.length+1,
                    descripcion:descripcion,
                    tipoProducto:tipoProducto,
                    precioCompra:precioCompra,
                    precioVenta:precioVenta
                }
            )
        }
    }
    
}
var tienda = new Tienda();
tienda.agregarProducto();
console.log(tienda.productos);

