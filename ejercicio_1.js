class Tienda{
    constructor(){
        this.productos = [];
        this.ventas = [];
    }
    menu(){
        let op = 10;
        while(op!=5){
            op = prompt('Ingrese una opcion:\n 1-Agregar producto\n 2-Modificar Informacion\n 3-Vender\n 4-Mostrar Stock 0\n 5-Salir' );
            switch(op){
                case '1':
                    let descripcion = prompt('Ingrese la descripcion del producto nuevo');
                    let tipoProducto = prompt('Ingrese el tipo del producto nuevo');
                    let precioCompra =  Number(prompt('Ingrese el precio de compra del producto nuevo'));
                    let precioVenta = Number(prompt('Ingrese el precio de venta del producto nuevo'));
                    let stock = parseInt(prompt('Ingrese el stock del producto nuevo'));
                    alert(this.agregarProducto(descripcion,tipoProducto,precioCompra,precioVenta,stock));
                    break;
                case '2':
                    let codigo = prompt('Ingrese el codigo del producto a modificar');
                    let propiedad = prompt('Ingrese la propiedad a modificar');
                    let nuevoValor = prompt('Ingrese el nuevo valor de la propiedad');
                    alert(this.modificarProducto(codigo,propiedad,nuevoValor));
                    console.log(this.productos);

                break;
            }
        }        
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
            !(typeof(precioVenta) == 'number')||
            isNaN(precioCompra)||
            isNaN(precioVenta)||
            isNaN(stock) ) return 'Dato/s ingresado/s no validos'
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
            return 'Producto agregado exitosamente';
        }
    }
    modificarProducto(codigo=1,propiedad = 'descripcion',nuevoValor='algo'){
        let item = this.productos.find(ele => ele.codigo == codigo);
        switch(propiedad){
            case 'descripcion':
                item.descripcion = nuevoValor;
            return 'Elemento modificado exitosamente';
                case 'tipoProducto':
                item.tipoProducto = nuevoValor;
            return 'Elemento modificado exitosamente';
            
            case 'precioCompra':
                item.precioCompra = nuevoValor;
            return 'Elemento modificado exitosamente';
            case 'precioVenta':
                item.precioVenta = nuevoValor;
            return 'Elemento modificado exitosamente';
            
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
tienda.menu();
// tienda.agregarProducto();
// tienda.modificarProducto();
// tienda.vender(1,10);
// tienda.vender(2,10)
// console.log(tienda.productos);
// console.log(tienda.mostrarStockCero());
// console.log(tienda.ventas);
