/*
let nombre = prompt("Ingrese su nombre")
alert("Bienvenido " + nombre)


let numero1 = parseInt(prompt("Ingrese el primer numero"))
let numero2 = parseInt(prompt("Ingrese el segundo numero"))

alert(numero1 + numero2)


let numero1 = parseInt(prompt("Ingrese el primer numero"))
let numero2 = parseInt(prompt("Ingrese el segundo numero"))

if(numero1>numero2){
    alert(numero1)
}
if(numero1<numero2){
    alert(numero2)
}


let numero1 = parseInt(prompt("Ingrese el primer numero"))
let numero2 = parseInt(prompt("Ingrese el segundo numero"))
let numero3 = parseInt(prompt("Ingrese el tercer numero"))

if(numero1 === numero2 && numero1 === numero3){
    alert("Los numeros son iguales")
}
else{
    alert("Los numeros no son iguales")
}


let numero1 = parseInt(prompt("Ingrese el primer numero"))
let numero2 = parseInt(prompt("Ingrese el segundo numero"))
let numero3 = parseInt(prompt("Ingrese el tercer numero"))

???????????????????


let peso = parseInt(prompt("Ingrese su peso en Kg"))
let altura = parseInt(prompt("Ingrese su altura en metros"))

imc = parseInt(peso / (altura^2))

if(imc<18.5){
    alert("Bajo de peso")
}
if(imc>18.5 && imc<=24.9){
    alert("Normal")
}
if(imc>=25 && imc<=29.9){
    alert("Sobrepeso")
}
if(imc>30){
    alert("Obesidad")
}




let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
let i 

for(i = 0; i<dias.length; i++){
    if(i<5){
        console.log(dias[i])
    }
    if(i === 5 || i === 6){
        console.log(dias[i] + " Fin de semana!")
    }
}




let carrito = []
let articulo, cantidad, precio, suma = 0;

articulo = prompt("Ingresa un articulo")

while(articulo !== "0"){
    cantidad = parseInt(prompt("Ingresa la cantidad"))
    precio = parseInt(prompt("Ingresa el precio"))
    carrito.push(articulo)
    suma = suma + (precio * cantidad)
    articulo = prompt("Ingresa un articulo")
}
console.log(`************************************\n
FACTURA A - Número XXXXXXX-XXXXXXX-X\n
    Ítems:
    - ${carrito[0]}\n
    - ${carrito[1]}\n
    - ${carrito[2]}\n
    
    Total a facturar: $${suma}\n
    ************************************`)
    
    

let carrito = []
let articulo, cantidad, precio, suma = 0, editar, cambio, nArticulo;

articulo = prompt("Ingresa un articulo")

while(articulo !== "0"){
    cantidad = parseInt(prompt("Ingresa la cantidad"))
    precio = parseInt(prompt("Ingresa el precio"))
    carrito.push(articulo)
    suma = suma + (precio * cantidad)
    articulo = prompt("Ingresa un articulo")
}
editar = prompt("Quieres editar")
while(editar === "si"){
    cambio = parseInt(prompt("Ingrese el numero del articulo a modificar"))
    nArticulo = prompt("Ingrese el nuevo articulo")
    carrito[cambio] = nArticulo
    editar = prompt("Quieres seguir editando?")
}
console.log(`************************************\n
FACTURA A - Número XXXXXXX-XXXXXXX-X\n
    Ítems:
    - ${carrito[0]}\n
    - ${carrito[1]}\n
    - ${carrito[2]}\n
    
    Total a facturar: $${suma}\n
    ************************************`)
    */