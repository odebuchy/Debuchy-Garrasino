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
            let descripcionProd = document.querySelector(".descrpicionprod")
            let categoriaProd = document.querySelector(".categoriaprod")
            let precioProd = document.querySelector(".precioprod")
            let CarritoAgregar = document.querySelector(".aagregarcarrito")
    
            
    
            tituloProd.innerHTML = arrayProduct.title
            imagenProd.src = arrayProduct.image
             descripcionProd.innerHTML = arrayProduct.description
            precioProd.innerHTML = arrayProduct.price
            categoriaProd.innerHTML = arrayProduct.category
            categoriaProd.href = `./category.html?categories=${arrayProduct.category}`
           
            // let sectionDetalle = document.querySelector (".detalleproducto div")
        // sectionDetalle.style.flexDirection = 'row'
        // sectionDetalle.style.display = 'flex'
        // sectionDetalle.style.flexWrap = 'wrap'
        //  sectionDetalle.style.alignSelf = 'center'
        //  sectionDetalle.style.justifyContent = 'space-around'
        //  sectionDetalle.style.margin = '10px'
        //  sectionDetalle.style.paddingTop = '30px'
        //  sectionDetalle.style.paddingBottom = '30px'
        //  sectionDetalle.style.paddingLeft = '10px'
        //  sectionDetalle.style.paddingRight = '10px'
        //  sectionDetalle.style.width = '70%'
        //  sectionDetalle.style.backgroundColor = 'none'
        //  sectionDetalle.style.borderRadius = '10px'
        //  sectionDetalle.style.textAlign = "center"



        //  let imagenDetalle = document.querySelector (".detalleproducto div img")
        //  imagenDetalle.style.flexDirection = 'row'
        //  imagenDetalle.style.flexWrap = 'wrap'
        //  imagenDetalle.style.alignSelf = 'center'
        //  imagenDetalle.style.justifyContent = 'space-around' 
        //  imagenDetalle.style.paddingBottom = '50px'
         
            
    
            // let sectionDetalle = document.querySelector (".detalleproducto img")
            // sectionDetalle.style.flexDirection = 'row'
            //  sectionDetalle.style.display = 'flex'
            // sectionDetalle.style.flexWrap = 'wrap'
            //  sectionDetalle.style.alignSelf = 'center'
            //  sectionDetalle.style.justifyContent = 'space-around'
    
          
            // imagenProd.style.width = 'default'
            // imagenProd.style.height = 'default'
            // imagenProd.style.marginTop = '20px'
            // imagenProd.style.alignSelf = 'center'
    
            
        })
        