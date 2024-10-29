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
    const filteredData = data.filter(product => product.titulo.toLowerCase().includes(searchTerm));
    
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

  const filterByCategory = (categoria) => {
      const filteredData = categoria === "todos" ? data : data.filter(product => product.categoria === categoria);
      displayProducts(filteredData);
  };
  
  const categoryButtons = document.querySelectorAll(".category-btn"); 
  categoryButtons.forEach(button => {
      button.addEventListener("click", () => filterByCategory(button.dataset.category));
  });
  