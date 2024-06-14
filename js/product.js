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
    let productoQueryString = new URLSearchParams(queryString)
    
    let idProducto = productoQueryString.get("id")
    
    
    console.log("producto", idProducto)
    
    
    
    fetch(`https://fakestoreapi.com/products/${idProducto}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("producto", data);
    
            let arrayProduct = data;
            let sectionProducto = document.querySelector(`section`);
            let producto = [];
            let tituloProd = document.querySelector(".tituloproductoelegido")
            let imagenProd = document.querySelector(".imagenprod")
            let descripcionProd = document.querySelector(".descrpicionproducto")
            let categoriaProd = document.querySelector(".categoriaproducto")
            let precioProd = document.querySelector(".precioproducto")
            let CarritoAgregar = document.querySelector(".aagregarcarrito")
    
            
    
            tituloProd.innerHTML = data.title
            imagenProd.src = data.image
            descripcionProd.innerHTML = data.description
            precioProd.innerHTML = data.price
            categoriaProd.innerHTML = data.category
            categoriaProd.href = `./category.html?categories=${data.category}`
           
    
            
    
            // let sectionDetalle = document.querySelector (".detalleproducto img")
            // sectionDetalle.style.flexDirection = 'row'
            // sectionDetalle.style.display = 'flex'
            // sectionDetalle.style.flexWrap = 'wrap'
            // sectionDetalle.style.alignSelf = 'center'
            // sectionDetalle.style.justifyContent = 'space-around'
    
          
            // imagenProd.style.width = 'default'
            // imagenProd.style.height = 'default'
            // imagenProd.style.marginTop = '20px'
            // imagenProd.style.alignSelf = 'center'
    
            
        })
        