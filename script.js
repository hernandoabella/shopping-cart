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

/* establece atributos de imagen que se aplican a todas las imágenes
   * esto también ahorra algo de desorden en el HTML
   */

function setAttributes() {
  const images = document.querySelectorAll("img");
  images.forEach(img => {
  img.addEventListener("click", function() {
    addItem(this);
    calculatePrice()
  });
  });
}
setAttributes();

// devuelve el precio de un artículo según la identificación de la imagen

function getPrice(obj) {
  let id = obj.id;
  return price[id] || 0;
}

// devuelve la categoría de un artículo según la identificación de la imagen

function getCategory(obj) {
  let id = obj.id;
  for (const [category, categoryIds] of Object.entries(cats)) {
    if (categoryIds.includes(id)) {
      return category;
    }
  }
}

// calcula el precio total de todos los artículos en cada div categoría 

function calculatePrice() {
  const totalDiv = document.getElementById("total");
  let total = 0;

  for (const category in cats) {
    const div = document.getElementById(category);
    if (!div) continue;

    const prices = [...div.querySelectorAll('[price]')].map(node => parseFloat(node.getAttribute('price')));
    total += prices.reduce((acc, price) => acc + price, 0);
  }

  totalDiv.innerHTML = `Total: $${total.toFixed(2)}`;
}

// borra cada div de categoría y restablece el índice de cada categoría a 0

function clearList() {
  for (const category in cats) {
    const div = document.getElementById(category);
    if (!div) continue;

    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  }

  drinkIdx = 0;
  breakfastIdx = 0;
  lunchIdx = 0;
  dinnerIdx = 0;
  sweetIdx = 0;

  
}

// borra una columna de categorías, restablece ese índice a 0 y borra el precio total (si está presente)

function clearColumn(obj) {
  const cat = obj.nextElementSibling.id;
  const div = document.getElementById(cat);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  if (cat === 'drink') {
    drinkIdx = 0;
  } else if (cat === 'breakfast') {
    breakfastIdx = 0;
  } else if (cat === 'lunch') {
    lunchIdx = 0;
  } else if (cat === 'dinner') {
    dinnerIdx = 0;
  } else if (cat === 'sweet') {
    sweetIdx = 0;
  }
  
}

/* borra el contenido de una sola celda.
   * porque el botón de borrar se superpone en la parte superior de la imagen del artículo
   * hacer clic en el botón da como resultado dos llamadas
   * 1) clearCell (...) elimina la "pila" de imágenes (realmente reduce el atributo de precio)
   * 2) deleteItem (...) elimina la imagen real de la columna
   */

function clearCell(obj, category, price) {
  const idx = obj.tabIndex;
  const div = document.getElementById(category);
  const nodes = div.childNodes;
  const itemP = parseFloat(nodes[idx].getAttribute("price"));
  const n = itemP / price;
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
    newDiv.setAttribute("price", getPrice(obj));
    newDiv.tabIndex = idx;
    newDiv.onclick = function () { deleteItem(this, category, getPrice(obj)); };

    let text = document.createElement("div");
    text.innerHTML = "x1";
    text.setAttribute("class", "fixed")

    let dollar = document.createElement("div");
    dollar.innerHTML = "$" + getPrice(obj).toFixed(2);
    dollar.setAttribute("class", "fixed")

    let inputDiv = document.createElement("div");
    let icono = document.createElement("i");

    icono.setAttribute("class", "fas fa-times");
    icono.onclick = function () { clearCell(newDiv, category, getPrice(obj)); };
    inputDiv.setAttribute("class", "fixer")
    inputDiv.appendChild(icono);
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

    let num = parseInt(count.innerHTML.substr(1, count.innerHTML.length)) - 1;
    let amount = parseFloat(dollar.innerHTML.substr(1, dollar.innerHTML.length));
    amount -= price;

    count.innerHTML = "x" + num;
    dollar.innerHTML = "$" + amount.toFixed(2);
  } else {
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

// modal
function toggleModal() {
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = toggleModal;
span.onclick = toggleModal;
window.onclick = function(event) {
  if (event.target == modal) {
    toggleModal();
  }
}