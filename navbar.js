let categorias = [
    {
        nombre: "Inicio",
        href: "./index.html"
    },
    {
        nombre: "Productos",
        href: "./producto.html"
    },
    {
        nombre: "Contacto",
        href: "./contacto.html"
    }
];

let menuItems = [];

for (let item of categorias) {
    menuItems.push(`
        <li class="nav-item">
            <a class="nav-link" href="${item.href}">${item.nombre}</a>
        </li>
    `);
}

let menu = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Tienda</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                ${menuItems.join('')}
            </ul>
        </div>
    </div>
</nav>
`;

document.querySelector('header').innerHTML = menu;
