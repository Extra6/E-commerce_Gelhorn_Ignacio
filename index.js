const data = [
  {
      id: 1,
      titulo: "Producto 1",
      detalle: "Descripción del producto 1.",
      precio: 199.99,
      stock: 10,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg"
  },
  {
      id: 2,
      titulo: "Producto 2",
      detalle: "Descripción del producto 2.",
      precio: 299.99,
      stock: 5,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg"
  },
  {
      id: 3,
      titulo: "Producto 3",
      detalle: "Descripción del producto 3.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg"
  },
  {
      id: 4,
      titulo: "Producto 4",
      detalle: "Descripción del producto 4.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg"
  },
  {
      id: 5,
      titulo: "Producto 5",
      detalle: "Descripción del producto 5.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg"
  },
  {
      id: 6,
      titulo: "Producto 6",
      detalle: "Descripción del producto 6.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg"
  },
  {
      id: 7,
      titulo: "Producto 7",
      detalle: "Descripción del producto 7.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg"
  },
  {
      id: 8,
      titulo: "Producto 8",
      detalle: "Descripción del producto 8.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg"
  },
  {
      id: 9,
      titulo: "Producto 9",
      detalle: "Descripción del producto 9.",
      precio: 149.99,
      stock: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg"
  }
];

function displayProducts(products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
  products.forEach(product => {
      productList.innerHTML += `
          <div class="col-4">
              <div class="card">
                  <img src="${product.imagen}" class="card-img-top" alt="${product.titulo}">
                  <div class="card-body">
                      <h5 class="card-title">${product.titulo}</h5>
                      <p class="card-text">${product.detalle}</p>
                      <p>Precio: $${product.precio.toFixed(2)}</p>
                      <a href="./producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>
                  </div>
              </div>
          </div>
      `;
  });
}

displayProducts(data);

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const clearButton = document.getElementById('clear-button');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const filteredData = data.filter(product => product.titulo.toLowerCase() === searchTerm);
  
  if (filteredData.length > 0) {
      displayProducts(filteredData);
  } else {
      alert("No se encontraron productos.");
      displayProducts(data);
  }
});

clearButton.addEventListener('click', () => {
  searchInput.value = '';
  displayProducts(data);
});