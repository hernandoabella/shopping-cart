// Define los precios de cada artículo
const price = {
  egg: 2.00,
  muffin: 1.75,
  pancake: 3.00,
  biscuit: 2.00,
  oj: 1.50,
  pbj: 2.00,
  bologna: 2.00,
  taco: 2.00,
  soup: 2.00,
  water: 1.00,
  burger: 4.00,
  pizza: 2.00,
  chicken: 3.00,
  salad: 2.50,
  soda: 1.60,
  icecream: 2.50,
  flan: 3.00,
  cookie: 1.25,
  cupcake: 1.75,
  milkshake: 3.00
};

// Define las categorias para cada artículo
let drink = ["oj", "water", "soda", "milkshake"];
let breakfast = ["egg", "muffin", "pancake", "biscuit"];
let lunch = ["pbj", "bologna", "taco", "soup"];
let dinner = ["burger", "pizza", "chicken", "salad"];
let sweet = ["icecream", "flan", "cookie", "cupcake"];

// Agrega cada categoria a un objeto ()
// add each category to an object (used for match individual items to their categories)
let cats = { drink, breakfast, lunch, dinner, sweet };

/* índices para elementos agregados a divisiones de categoría
   * p.ej. si se agrega muffin después del panqueque, el muffin tendrá un índice de 1
   */
let drinkIdx = 0;
let breakfastIdx = 0;
let lunchIdx = 0;
let dinnerIdx = 0;
let sweetIdx = 0;

// Función para establecer atributos de imagen que se aplican a todas las imágenes
function setAttributes() {
  // Seleccionar todas las imágenes en el documento
  const images = document.querySelectorAll("img");
  // Para cada imagen
  images.forEach(img => {
    // Agregar un evento de clic para agregar un artículo al carrito y calcular el precio total
    img.addEventListener("click", function() {
      addItem(this);
      calculatePrice()
    });
  });
}
// Llamar a la función para establecer los atributos de las imágenes
setAttributes();

// Función para obtener el precio de un artículo según la identificación de la imagen
function getPrice(obj) {
  // Obtener la identificación de la imagen
  let id = obj.id;
  // Devolver el precio del artículo según la identificación de la imagen
  // Si no existe, devolver 0
  return price[id] || 0;
}

// Función para obtener la categoría de un artículo según la identificación de la imagen
function getCategory(obj) {
  // Obtener la identificación de la imagen
  let id = obj.id;
  // Recorrer las categorías y sus identificaciones
  for (const [category, categoryIds] of Object.entries(cats)) {
    // Si la identificación de la imagen está en la lista de identificaciones de la categoría actual
    if (categoryIds.includes(id)) {
      // Devolver la categoría
      return category;
    }
  }
  // Si no se encuentra la categoría, devolver null
  return null;
}

// Función para calcular el precio total de todos los artículos en cada categoría
function calculatePrice() {
  // Obtener el elemento div total
  const totalDiv = document.getElementById("total");
  let total = 0;

  // Recorrer todas las categorías
  for (const category in cats) {
    // Obtener el div de la categoría
    const div = document.getElementById(category);
    // Si el div no existe, continuar
    if (!div) continue;

    // Obtener los precios de los elementos en el div de la categoría
    const prices = [...div.querySelectorAll('[price]')]
                  .map(node => parseFloat(node.getAttribute('price')));
    // Sumar los precios
    total += prices.reduce((acc, price) => acc + price, 0);
  }

  // Mostrar el total en el div
  totalDiv.innerHTML = `Total: $${total.toFixed(2)}`;
}

// Función para calcular el precio de todos los artículos en cada categoría después de eliminar productos del carrito manualmente
function calculatePriceAfterRemoval(removedPrice) {
  // Obtener el elemento div total
  const totalDiv = document.getElementById("total");
  let total = 0;

  // Recorrer todas las categorías
  for (const category in cats) {
    // Obtener el div de la categoría
    const div = document.getElementById(category);
    // Si el div no existe, continuar
    if (!div) continue;

    // Obtener los precios de los elementos en el div de la categoría
    const prices = [...div.querySelectorAll('[price]')]
                  .map(node => parseFloat(node.getAttribute('price')));
    // Sumar los precios
    total += prices.reduce((acc, price) => acc + price, 0);
  }

  // Restar el precio eliminado y mostrar el nuevo total en el div
  total -= removedPrice;
  totalDiv.innerHTML = `Total: $${total.toFixed(2)}`;
}


// Removes every category div and resets each category index to 0
function clearList() {
  // Iterate through each category in cats object
  for (const category in cats) {
  // Get the div element corresponding to the current category
  const div = document.getElementById(category);
  // If the div is not found, continue to the next iteration
  if (!div) continue;

  // Remove all children of the div
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  // Reset the total cost to $0.00
  document.getElementById("total").innerHTML = "Total: $0.00";
}

  // Reset all category indexes to 0
  drinkIdx = 0;
  breakfastIdx = 0;
  lunchIdx = 0;
  dinnerIdx = 0;
  sweetIdx = 0;
}

/* 
  * borra el contenido de una sola celda.
  * porque el botón de borrar se superpone en la parte superior de la imagen del artículo
  * hacer clic en el botón da como resultado dos llamadas
  * 1) clearCell (...) elimina la "pila" de imágenes (realmente reduce el atributo de precio)
  * 2) deleteItem (...) elimina la imagen real de la columna
*/
function clearCell(obj, category, price) {
  // obtiene el índice de la celda
  const idx = obj.tabIndex;
  // obtiene el elemento div con el id especificado en la categoría
  const div = document.getElementById(category);
  // obtiene los nodos dentro del div
  const nodes = div.childNodes;
  // obtiene el precio del elemento seleccionado
  const itemP = parseFloat(nodes[idx].getAttribute("price"));
  // calcula el número de veces que el precio del elemento aparece
  const n = itemP / price;
  // elimina la cantidad correcta de elementos
  for (let i = 1; i < n; i++) {
    deleteItem(obj, category, price);
  }
}


// agrega la imagen de un elemento en una categoría div en función de la identificación de la imagen
function addItem(obj) {
  let idx; 
  let category = getCategory(obj);
  let div = document.getElementById(category);

  switch (category) {
    case "drink":
      idx = drinkIdx;
      break;
    case "breakfast":
      idx = breakfastIdx;
      break;
    case "lunch":
      idx = lunchIdx;
      break;
    case "dinner":
      idx = dinnerIdx;
      break;
    case "sweet":
      idx = sweetIdx;
      break;
  }

  var stack = false;
  if (idx > 0) {
    var srcImg = 'url("' + obj.src + '")';
    var nodes = document.getElementById(category).childNodes;
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].style.backgroundImage == srcImg) {
        stack = true;
      }
    }
  }

  if (!stack) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "fix");
    newDiv.style.backgroundImage = "url(" + obj.src + ")";
    newDiv.style.backgroundSize = "100px 100px";
    newDiv.style.backgroundRepeat = "no-repeat";
    newDiv.style.width = "300px";
    newDiv.style.height = "70px";
    newDiv.setAttribute("price", getPrice(obj));
    newDiv.tabIndex = idx;
    newDiv.onclick = function () { deleteItem(this, category, getPrice(obj)); };

    let text = document.createElement("div");
    text.innerHTML = "x1";
    text.setAttribute("class", "fixed cantidad")

    let dollar = document.createElement("div");
    dollar.innerHTML = "$" + getPrice(obj).toFixed(2);
    dollar.setAttribute("class", "fixed dolar")

    let inputDiv = document.createElement("div");
    let icono = document.createElement("i");

    icono.setAttribute("class", "fas fa-times");
    icono.onclick = function () { clearCell(newDiv, category, getPrice(obj)); };
    inputDiv.setAttribute("class", "fixer")
  
    newDiv.appendChild(text);
    newDiv.appendChild(dollar);
    newDiv.appendChild(inputDiv);
    div.appendChild(newDiv);

    switch (category) {
      case "drink":
        drinkIdx++;
        break;
      case "breakfast":
        breakfastIdx++;
        break;
      case "lunch":
        lunchIdx++;
        break;
      case "dinner":
        dinnerIdx++;
        break;
      case "sweet":
        sweetIdx++;
        break;
    }
  } else {
    let index;
    for (i = 0; i < div.childNodes.length; i++) {
      if (div.childNodes[i].style.backgroundImage == srcImg) {
        index = i;
      }
    }
    let node = div.childNodes[index];
    let itemP = parseFloat(node.getAttribute("price"));
    let count = node.firstElementChild;
    let num = parseInt(count.innerHTML.substr(1, count.innerHTML.length)) + 1;

    let dollar = count.nextElementSibling;
    let amount = parseFloat(dollar.innerHTML.substr(1, dollar.innerHTML.length));
    amount += getPrice(obj);

    count.innerHTML = "x" + num;
    dollar.innerHTML = "$" + amount.toFixed(2);
    node.setAttribute("price", itemP + getPrice(obj));
  }
  
};



/* detecta un elemento de la columna
   * si el artículo está apilado (es decir, su atributo de precio es mayor que el precio del artículo)
   * entonces la función disminuye el precio por el precio del artículo hasta que el precio base permanece
   * 
   * si la imagen no está apilada
   * la función elimina la imagen, disminuye el índice de categoría,
   * y actualiza el tabIndex para cada imagen
   */

function deleteItem(obj, category, price) {
  let idx = obj.tabIndex;
  let div = document.getElementById(category);
  let nodes = div.childNodes;
  let itemP = parseFloat(nodes[idx].getAttribute("price")).toFixed(2);

  if (itemP > price) {
    nodes[idx].setAttribute("price", itemP - price);
    let count = nodes[idx].firstElementChild;
    let dollar = count.nextElementSibling;
    let num = parseInt(count.textContent.substring(1)) - 1;
    let amount = parseFloat(dollar.textContent.substring(1));
    amount -= price;

    count.textContent = "x" + num;
    dollar.textContent = "$" + amount.toFixed(2);
    } else {
    calculatePriceAfterRemoval(price)
    div.removeChild(nodes[idx])
    for (i = idx; i < nodes.length; i++) {
      nodes[i].tabIndex = i;
    }

    switch (category) {
      case "drink":
        drinkIdx--;
        break;
      case "breakfast":
        breakfastIdx--;
        break;
      case "lunch":
        lunchIdx--;
        break;
      case "dinner":
        dinnerIdx--;
        break;
      case "sweet":
        sweetIdx--;
        break;
    }
  }
  
};

// Caja modal
function toggleModal() {
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = toggleModal;
span.onclick = toggleModal;
window.onclick = function(event) {
  if (event.target == modal) {
    toggleModal();
  }
}