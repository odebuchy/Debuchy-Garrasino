////////header

fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(data => {
        let headerHome = document.querySelector('.sectionheader');

        headerHome.innerHTML =
            `<div class= listaHeader>
<li><a href="./index.html?">Home</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "jewelery"}">Accesorios</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "electronics"}">Electronica</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "men's clothing"}">Hombre</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "women's clothing"}">Mujer</a></li>
<li><a href="./cart.html?">Carrito</a></li>
<li><a href="./login.html?">Login</a></li>
<li><a href="./register.html?">Registro</a></li>
</div> `;
    })
    .catch(e => console.log(e));


////////producto
let queryString = location.search;
let productoQueryString = new URLSearchParams(queryString);
let idProducto = productoQueryString.get("id");

console.log("producto", idProducto);

fetch(`https://fakestoreapi.com/products/${idProducto}`)
    .then(response => response.json())
    .then(data => {
        let tituloProd = document.querySelector(".tituloproductoelegido");
        let imagenProd = document.querySelector(".imagenprod");
        let descripcionProd = document.querySelector(".descrpicionprod");
        let categoriaProd = document.querySelector(".categoriaprod");
        let precioProd = document.querySelector(".precioprod");
        let carritoAgregar = document.querySelector(".aagregarcarrito");

        tituloProd.innerHTML = data.title;
        imagenProd.src = data.image;
        descripcionProd.innerHTML = data.description;
        precioProd.innerHTML = `$${data.price}`;
        categoriaProd.innerHTML = data.category;
        categoriaProd.href = `./category.html?categories=${data.category}`;

        carritoAgregar.addEventListener("click", function () {
            let arrayCart = JSON.parse(localStorage.getItem("arrayCarrito")) || [];
            arrayCart.push(data.id);
            localStorage.setItem("arrayCarrito", JSON.stringify(arrayCart));
            console.log("Producto agregado al carrito");
        });
    })
    .catch(e => console.log(e));
