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
            precioVenta = 0.25,
            stock= 10){                 
        if(
            !(typeof(descripcion) == 'string') || 
            !(typeof(tipoProducto)=='string') ||
            !(typeof(precioCompra) == 'number')||
            !(typeof(stock) == 'number')||
            !(typeof(precioVenta) == 'number') ) return 'Dato/s ingresado/s no validos'
        else if(precioCompra<0 || precioVenta<0) return 'No pueden haber precios negativos';
        else{
            this.productos.push(
                {
                    codigo:this.productos.length+1,
                    descripcion:descripcion,
                    tipoProducto:tipoProducto,
                    precioCompra:precioCompra,
                    precioVenta:precioVenta,
                    stock:stock
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
    vender(codigo=1,cantidad=10){
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
    mostrarStockCero(){
        let nuevo = [];
        this.productos.forEach((ele)=>{
            if(ele.stock == 0) nuevo.push(ele);
        });
        return nuevo;
    }
}
var tienda = new Tienda();
tienda.agregarProducto();
tienda.modificarProducto();
tienda.vender(1,10);
tienda.vender(2,10);

console.log(tienda.productos);
// console.log(tienda.mostrarStockCero());

// console.log(tienda.ventas);
