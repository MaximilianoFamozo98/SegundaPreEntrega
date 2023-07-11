class bebidas {
    constructor(nombre, precio, unidades) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.unidades = parseFloat(unidades)
    }
}
const todosLosProductos = [
    { nombre: "vodka", precio: 2100 },
    { nombre: "speed", precio: 500 },
    { nombre: "fernet", precio: 2500 },
    { nombre: "coca", precio: 530 },
    { nombre: "monster", precio: 550 },
]



console.log(todosLosProductos)

let carrito = []


function agregarAlCarrito(carrito,nombre,unidades,precio) {
    carrito.push(new bebidas(nombre,precio,unidades))
    console.log(carrito)
}

function informarMontoTotal(carrito) {
    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
    console.log(`El monto total a pagar es: ${total}`)
}



let seleccion = prompt("Hola desea realizar alguna compra? Indique si o no")
if (seleccion === "si") {
    alert("A continuacion nuestra lista de productos")
    let alchol = todosLosProductos.map((todosLosProductos) => todosLosProductos.nombre + " " +
        todosLosProductos.precio);
    alert(alchol.join(" - "))
} else if (seleccion === "no") {
    alert("Gracias por visitarnos!!  Hasta luego");
} else {
    alert("Elija una opcion valida");
}
while (seleccion != "no") {
    let todosLosProductos = prompt("Agrega un producto a tu carrito")
    let precio = 0
    if (todosLosProductos == "vodka" || todosLosProductos == "speed" || todosLosProductos == "fernet"
        || todosLosProductos == "coca" || todosLosProductos == "monster") {
        switch (todosLosProductos) {
            case "vodka":
                precio = 2100;
                break;
            case "speed":
                precio = 500;
                break;
            case "fernet":
                precio = 2500;
                break;
            case "coca":
                precio = 530;
                break;
            case "vodka":
                precio = 2100;
                break;
            case "monster":
                precio = 550;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades desea llevar?"))

        agregarAlCarrito(carrito, todosLosProductos,unidades,precio)


    } else {
        alert("No tenemos ese producto")
    }

    seleccion = prompt("Desea seguir comprando? Si o no")

    while (seleccion === "no") {
        alert("Gracias por su compra! Hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.nombre}, unidades: ${carritoFinal.unidades}, 
                Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

informarMontoTotal(carrito)