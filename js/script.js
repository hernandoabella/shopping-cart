// variables

let numeroCarrito = document.querySelector('.numeroCarrito');
let btnPlus = document.querySelector('.mas');
let btnLess = document.querySelector('.menos');
let precio = document.querySelector('.precio');
let counter = document.querySelector('.placehold__number');

const mas = () => {
    +numeroCarrito.innerHTML ++;
}

const menos = () => {
    counter.innerHTML--;
}

const checkout = () => {

}

btnPlus.addEventListener('click', mas)
btnLess.addEventListener('click', menos)