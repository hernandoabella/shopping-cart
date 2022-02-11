<<<<<<< HEAD
// variables

let numeroCarrito = document.querySelector('.numeroCarrito');
let btnPlus = document.querySelector('.mas');
let btnLess = document.querySelector('.menos');
let precio = document.querySelector('.precio');
let counter = document.querySelector('.placehold__number');

const mas = () => {
    +numeroCarrito.innerHTML++;
    +counter.innerHTML++;
}

const menos = () => {
    +numeroCarrito.innerHTML--;
    +counter.innerHTML--;
}

const checkout = () => {

}

// const lessthanZero = (numero) => {
//     if(numero <= 0){
//         return 0;
//     }
// }

btnPlus.addEventListener('click', mas)
btnLess.addEventListener('click', menos)
=======
alert("prueba js")
>>>>>>> a08b5d1e30d085d955f70ad054d1aa03dd426dd9
