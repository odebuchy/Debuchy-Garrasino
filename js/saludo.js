
let datosUser = localStorage.getItem('user')

let datosParseUser = JSON.parse(datosUser)
console.log("parse user", datosParseUser)



if (datosParseUser) {
  fetch('https://fakestoreapi.com/products/categories')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("data", data)
      let arrayCategorias = data;
      let headerHome = document.querySelector('.sectionheader')

      headerHome.innerHTML =

        `<div><h2> "bienvenido  ${datosParseUser}" </h2></div>
    <div>
  <li><a href="./index.html?">Home</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "jewelery"}">Accesorios</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "electronics"}">Electronica</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "men's clothing"}">Hombre</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "women's clothing"}">Mujer</a></li>
<li><a href="./cart.html?">Carrito</a></li>
<li id="logout"><a href="" >logout</a></li>
</div>`

      // document.getElementById('logout').addEventListener('click', function(event) {
      //   event.preventDefault();
      //   localStorage.clear(); 
      //   alert('Has cerrado sesión');
      //   window.location.href = './index.html';
      //   console.log (datosParseUser)
      // });


    })
    .catch(function (e) {
      console.log("error1", e)
    })
} else {}




