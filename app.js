class Objects{
    constructor(nombre,precio,stock,categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
    }
    incluyeIva(){
        this.precio = this.precio * 1.18;
    }
}

function hayStock(objeto){
    if(objeto.stock>0){
        carrito.push(objeto);
        objeto.stock -=1;
    }else{
        alert("Producto Agotado");
    }
}

const procesador = new Objects("AMD Ryzen 3 3200G",128,4,"Procesador");
const procesador2= new Objects("AMD Ryzen 5 3600",149,13,"Procesador");
const procesador3= new Objects("Intel Core i5-10400F",123,2,"Procesador");
const tarjetaVideo = new Objects("MSI Radeon RX 6900 XT",415,23,"Tarjeta de Video");
const tarjetaVideo2= new Objects("NVIDIA Geforce RTX 3060 Ti",375,5,"Tarjeta de Video");
const tarjetaVideo3= new Objects("EVGA GeForce GTX 1660s",215,17,"Tarjeta de Video");
const placaMadre = new Objects("Gigabyte H510M S2H",75,14,"Placa Madre");
const placaMadre2= new Objects("ASUS TUF GAMING B450-PLUS",106,38,"Placa Madre");
const placaMadre3= new Objects("MSI A320M-A PRO MAX",48,8,"Placa Madre");

const inventario = [];

inventario.push(procesador,procesador2,procesador3,tarjetaVideo,tarjetaVideo2,tarjetaVideo3,tarjetaVideo,tarjetaVideo2,tarjetaVideo3);

for (const producto of inventario){
    producto.incluyeIva();
}

const carrito = [];

let menu = prompt("Bienvenido a TechMasters, seleccione una categoria: \n 1 - PROCESADORES \n 2 - TARJETAS DE VIDEO \n 3 - PLACAS MADRE");
let total = 0;
while (menu != "ESC"){
    switch (menu){
        case "1":
            let numero = prompt("Seleccionaste PROCESADORES, tenemos disponibles los siguientes productos (digite un número entre 1 y 3): \n" + "1 - $" + procesador.precio + " " + procesador.nombre + "\n 2 - $" + procesador2.precio + " " + procesador2.nombre + "\n 3 - $" + procesador3.precio + " " + procesador3.nombre);
            if(isNaN(numero) || (numero>3 || numero<0)){
                alert("Opción inválida, elija nuevamente.");
                break;
            }
            switch (numero) {
                case "1":
                    hayStock(procesador);
                    break;
            case "2":
                    hayStock(procesador2);
                    break;
            case "3":
                    hayStock(procesador3);
                    break;
            }
            break;

        case "2":
            let numero2 = prompt("Seleccionaste TARJETAS DE VIDEO, tenemos disponibles los siguientes productos (digite un número entre 1 y 3): \n" + "1 - $" + tarjetaVideo.precio + " " + tarjetaVideo.nombre + "\n 2 - $" + tarjetaVideo2.precio + " " + tarjetaVideo2.nombre + "\n 3 - $" + tarjetaVideo3.precio + " " + tarjetaVideo3.nombre);
            if(isNaN(numero2) || (numero2>3 || numero2<0)){
                alert("Opción inválida, elija nuevamente.");
                break;
            }
            switch(numero2){
                case "1":
                    hayStock(tarjetaVideo);
                    break;
                case "2":
                    hayStock(tarjetaVideo2);
                    break;
                case "3":
                    hayStock(tarjetaVideo3);
                    break;
            }
            break;

        case "3":
            let numero3 = prompt("Seleccionaste PLACAS MADRE, tenemos disponibles los siguientes productos (digite un número entre 1 y 3): \n" + "1 - $" + placaMadre.precio + " " + placaMadre.nombre + "\n 2 - $" + placaMadre2.precio + " " + placaMadre2.nombre + "\n 3 - $" + placaMadre3.precio + " " + placaMadre3.nombre);
            if(isNaN(numero3) || (numero3>3 || numero3<0)){
                alert("Opción inválida, elija nuevamente.");
                break;
                }
            switch(numero3){
                case "1":
                    hayStock(placaMadre);
                    break;
                case "2":
                    hayStock(placaMadre2);
                    break;
                case "3":
                    hayStock(placaMadre3);
                    break;
            }
            break;
        default:
            alert("Opción inválida, elija nuevamente.");
            break;
    } if(confirm("¿Desea seguir comprando?")){
    }else break;
    menu = prompt("SELECCIONE UNA CATEGORIA \n 1 - PROCESADORES \n 2 - TARJETAS DE VIDEO \n 3 - PLACAS MADRE");
}

carrito.forEach((num) => {total += parseFloat(num.precio)});

alert("El total de su compra es: $" + Math.round(total));
