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
        this.ventas = [];
    }
    agregarProducto(
            descripcion='producto',
            tipoProducto='generico',
            precioCompra= 0.15,
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
    modificarProducto(codigo=1,propiedad = 'descripcion',nuevoValor='algo'){
        let item = this.productos.find(ele => ele.codigo == codigo);
        switch(propiedad){
            case 'descripcion':
                item.descripcion = nuevoValor;
            break;
            case 'tipoProducto':
                item.tipoProducto = nuevoValor;
            case 'precioCompra':
                item.precioCompra = nuevoValor;
            break;
            case 'precioVenta':
                item.precioVenta = nuevoValor;
            break;
            default:
                return 'Propiedad dada no valida';
        }
    }
    vender(codigo=1,cantidad=2){
        let item = this.productos.find(ele => ele.codigo == codigo);
        this.ventas.push(
            {
                codigo:codigo,
                cantidad:cantidad,
                total:cantidad*item.precioVenta
            }
        );
        item.stock-=cantidad;
    }
    
}
var tienda = new Tienda();
tienda.agregarProducto();
tienda.modificarProducto();
tienda.vender();
console.log(tienda.productos);
console.log(tienda.ventas);
