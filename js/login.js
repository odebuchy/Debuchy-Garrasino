
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
      `<div class= listaHeader>
<li><a href="./index.html?">Home</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "jewelery"}">Accesorios</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "electronics"}">Electronica</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "men's clothing"}">Hombre</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "women's clothing"}">Mujer</a></li>
<li><a href="./cart.html?">Carrito</a></li>
<li><a href="./login.html?">Login</a></li>
<li><a href="./register.html?">Registro</a></li>
</div> `


  })
  .catch(function (e) {
    console.log(e)
  });





let form = document.querySelector('form');
let mail = document.querySelector('#mail');
let pass = document.querySelector('#pass');
let errorMail = document.querySelector('.errorMail');
let errorPass = document.querySelector('.errorPass');


form.addEventListener('submit', function (e) {
   e.preventDefault();
   let userMail = mail.value
   if (mail.value == '') {
      alert(errorMail = 'Por favor complete el campo email.')
   } else if (pass.value == '') {
      alert(errorPass = 'Por favor complete el campo contraseña.')
   } else if (pass.value.length < 6) {
      alert(errorPass = 'La contraseña debe tener al menos 6 caracteres.')
   } else {
      console.log("usuario log", userMail)
      localStorage.setItem('user', JSON.stringify(userMail))
      form.submit()
      document.location.href = "index.html"
   }


})
