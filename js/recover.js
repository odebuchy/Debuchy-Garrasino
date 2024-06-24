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
let user = document.querySelector('#email')
let email = document.querySelector('#email');
let errorMail = document.querySelector('.errorMail');
let checkbox = document.querySelector('#checkbox');
let errorCheckbox = document.querySelector('.errorCheckbox');
let avisoMail = document.querySelector (".aviso")
let irALogin = document.querySelector ("#ir")

irALogin.style.display =`none`

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (email.value == '') {
        errorMail.innerText = 'Por favor escriba su email.';
    } else if (!checkbox.checked) {
        errorCheckbox.innerText = 'Por favor acepte el campo "Quiero recuperar mi contraseña."'
    } else if (this.submit){
        avisoMail.innerText = 'Recibiras un mail con las instrucciones para recuperar tu contraseña.'
        irALogin.style.display=`block`
    } else {
        user.email = email.value;
        localStorage.setItem('user', JSON.stringify(user))
    }
})