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
  <li><a href="./login.html?">Carrito</a></li>
  <li><a href="./register.html?">Registro</a></li>`


    })
    .catch(function (e) {
        console.log(e)
    })

    let queryString = location.search;
let categoryQueryString = new URLSearchParams(queryString)

let categoria = categoryQueryString.get("categories")


console.log("categoria", categoria)

let tituloSeccion = document.querySelector ("h1")

if (categoria == "jewelery") {
    url = 'https://fakestoreapi.com/products/category/jewelery'
    tituloSeccion.innerText= "ACCESORIOS"

} else if (categoria == "electronics") {
    url = 'https://fakestoreapi.com/products/category/electronics'
     tituloSeccion.innerText= "ELECTRONICA"
} else if (categoria == "men's clothing") {
    url = "https://fakestoreapi.com/products/category/men's%20clothing"
     tituloSeccion.innerText= "ROPA DE HOMBRE"
}
else if (categoria == "women's clothing") {
    url = "https://fakestoreapi.com/products/category/women's%20clothing"
    tituloSeccion.innerText= "ROPA DE MUJER"
}
else url = "no funciona"

console.log(url)


fetch(`https://fakestoreapi.com/products/category/${categoria}`)
.then(function(response){
    return response .json();
})
.then(function(data){
    console.log("Categoria", data);
    
    let arrayCategories = data;
    let sectionCategories = document.querySelector(`section`);
    let categoriaIndicada= [];
    
    for (let i = 0; i <arrayCategories.length ; i++) {
    categoriaIndicada+=` <section>
    <h2>${arrayCategories[i].title}</h2>
      <img src="${arrayCategories[i].image}">
     <p>${arrayCategories[i].description}</p>
     <p>${arrayCategories[i].price}</p>
     <a  href="./producto.html?id=${categoria[i].id}">VER MAS</a>
     </section>`
    }

    sectionCategories.innerHTML = categoriaIndicada
})
.catch( function(e){
    console.log(e)
})