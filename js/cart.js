
fetch('https://fakestoreapi.com/products/categories')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log("data", data)
    let arrayCategorias = data;
    let headerHome = document.querySelector('.sectionheader')
    let header = [];

    headerHome.innerHTML =
        `<li><a href="./index.html?">Home</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "jewelery"}">Accesorios</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "electronics"}">Electronica</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "men's clothing"}">Hombre</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "women's clothing"}">Mujer</a></li>
<li><a href="./cart.html?">Carrito</a></li>
<li><a href="./login.html?">Login</a></li>
<li><a href="./register.html?">Registro</a></li>`


})
.catch(function (e) {
    console.log(e)
})


    
    
    
    let datosCart = localStorage.getItem ("arrayCarrito")
    
    let datosParse = JSON.parse (datosCart)
    console.log (datosParse)
    
    
