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

    let queryString = location.search;
let categoryQueryString = new URLSearchParams(queryString)

let categoria = categoryQueryString.get("categories")


console.log("categoria", categoria)

let tituloSeccion = document.querySelector ("h1")
tituloSeccion.style.fontSize = "160%";
tituloSeccion.style.textAlign = "center";
tituloSeccion.style.fontWeight = "700";
tituloSeccion.style.color = "black";
tituloSeccion.style.padding = '30px'

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
    categoriaIndicada+=
    ` <div>
     <h3 class="tituloprod">${arrayCategories[i].title}</h3>
    <img src="${arrayCategories[i].image}">
     <p class="descripcionprod">${arrayCategories[i].description}</p>
     <p class="precioprod">$${arrayCategories[i].price}</p>
     <a  href="./producto.html?id=${arrayCategories[i].id}">VER MAS</a>
     </div>`
    
    }

    sectionCategories.innerHTML = categoriaIndicada

//     sectionCategories.style.flexDirection = 'row'
//     sectionCategories.style.display = 'flex'
//     sectionCategories.style.flexWrap = 'wrap'
//    sectionCategories.style.alignSelf = 'center'
//    sectionCategories.style.justifyContent = 'space-around'

//    divCat = document.querySelectorAll('.categoriaseccionmujer div')
//     for (let i = 0; i < divCat.length; i++) {
//         divCat[i].style.margin = '10px'
//         divCat[i].style.paddingTop = '30px'
//         divCat[i].style.paddingBottom = '10px'
//         divCat[i].style.paddingLeft = '10px'
//         divCat[i].style.paddingRight = '10px'
//         divCat[i].style.width = '40%'
//         divCat[i].style.height = 'fit-content'
//         divCat[i].style.border = 'none'
//         divCat[i].style.backgroundColor = 'none'
//         divCat[i].style.textAlign = "center"
//   }
//   let imagenCat = document.querySelectorAll('.categoriaseccionmujer div img')
//     for (let i = 0; i < imagenCat.length; i++) {
//         imagenCat[i].style.width = 'default'
//         imagenCat[i].style.height = 'default'
//         imagenCat[i].style.textAlign = 'center'
//         imagenCat[i].style.marginTop = '20px'
//         imagenCat[i].style.alignSelf = 'center'
//     }

//     let tituloCat = document.querySelectorAll('.categoriaseccionmujer div h2')
//     for (let i = 0; i < tituloCat.length; i++) {
//         tituloCat[i].style.fontSize = "130%"
//         tituloCat[i].style.fontWeight = "550"
//         tituloCat[i].style.fontFamily ="Bebas Neue", "sans-serif"
//     }
//       let descripcionCat = document.querySelectorAll('.categoriaseccionmujer div p')
//     for (let i = 0; i < descripcionCat.length; i++) {
//         descripcionCat[i].style.fontSize = '90%'
//         descripcionCat[i].style.fontFamily ="Bebas Neue", "sans-serif"
//    }

    
})
.catch( function(e){
    console.log(e)
})