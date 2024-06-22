
    let datosUser = localStorage.getItem ("user")
    
    let datosParseUser = JSON.parse (datosUser)
    console.log (datosParseUser)



    if (datosUser) {
        fetch ('https://fakestoreapi.com/products/categories')
        .then (function(response){
          return response.json ();
        })
        .then (function(data){
          console.log("data",data)
          let arrayCategorias= data;
          let headerHome = document.querySelector ('.sectionheader')
          let header = [];
        
          headerHome.innerHTML = 
       
    `<h2> "bienvenido  ${datosUser}" </h2>`
    `<li><a href="./index.html?">Home</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "jewelery"}">Accesorios</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "electronics"}">Electronica</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "men's clothing"}">Hombre</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "women's clothing"}">Mujer</a></li>
// <li><a href="./cart.html?">Carrito</a></li>
<li><a href="./js/logout.js?">logout</a></li>`
         
          
        })
        .catch(function(e){
         console.log(e)
        });
      

    } else if (datosUser == null) {
        fetch ('https://fakestoreapi.com/products/categories')
        .then (function(response){
          return response.json ();
        })
        .then (function(data){
          console.log("data",data)
          let arrayCategorias= data;
          let headerHome = document.querySelector ('.sectionheader')
          let header = [];
        
          headerHome.innerHTML = 
          `<li><a href="./index.html?">Home</a></li>
          <li><a href="./category.html?categories=${arrayCategorias.category="jewelery"}">Accesorios</a></li>
          <li><a href="./category.html?categories=${arrayCategorias.category="electronics"}">Electronica</a></li>
          <li><a href="./category.html?categories=${arrayCategorias.category="men's clothing"}">Hombre</a></li>
          <li><a href="./category.html?categories=${arrayCategorias.category="women's clothing"}">Mujer</a></li>
          <li><a href="./cart.html?">Carrito</a></li>
          <li><a href="./login.html?">Login</a></li>
          <li><a href="./register.html?">Registro</a></li>`
         
          
        })
        .catch(function(e){
         console.log(e)
        });
    } else {}
