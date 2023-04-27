let producto = parseInt(prompt("Selecciona un producto:"));

let precioProducto;

switch(producto) {
    case 1:
        precioProducto = 70.99;
        break;
    case 2:
        precioProducto = 78.99;
        break;
    case 3:
        precioProducto = 100.99;
        break;
    case 4:
        precioProducto = 58.50;
        break;        
    case 5:
        precioProducto = 35.00;
        break;
    default:
        alert("Debe ingresar un codigo correcto.");
        break;

    }

//Pedir cantidad SI selecciono un producto
let cantidad;
let descuento;
if(precioProducto > 0){
let cantidad = parseInt(prompt("Indique la cantidad:"));
    //Establecer descuento segun la cantidad
    if(cantidad < 10 ){
        descuento = 0.035;
    } else if(cantidad >= 10 && cantidad <= 20 ){
        descuento = 0.07;
    } else if(cantidad > 20){
        descuento = 0.095;
    }

    let descuentoTotal = (precioProducto*cantidad)*descuento;

  

    alert("Precio unitario: "+precioProducto.toFixed(2)+"\nPrecio cantidad: "+(precioProducto*cantidad).toFixed(2)+"\nPrecio descuento: "+descuentoTotal.toFixed(2)+"\nTotal a pagar: "+((precioProducto*cantidad)-descuentoTotal).toFixed(2));

}