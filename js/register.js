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
let email = document.querySelector('#email');
let pass = document.querySelector('#pass');
let repepass = document.querySelector('#repepass');
let errorMail = document.querySelector('.errorMail');
let errorPass = document.querySelector('.errorPass');
let errorRepepass = document.querySelector('.errorRepepass')
localStorage.setItem("#email", email)


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (email.value == '') {
        errorMail.innerText = 'Por favor complete el campo.';
        errorMail.style.display = 'block';
        valid = false;
    }

    if (pass.value == '') {
        errorPass.innerText = 'Por favor complete el campo contraseña.';
        errorPass.style.display = 'block';
        valid = false;
    } else if (pass.value.length < 6) {
        errorPass.innerText = 'Debe ingresar al menos 6 caracteres.';
        errorPass.style.display = 'block'
        valid = false;
    }

    if (repepass.value == '') {
        errorRepepass.innerText = 'Por favor complete el campo.';
        errorRepepass.style.display = 'block';
        valid = false;
    } else if (pass.value !== repepass.value) {
        errorRepepass.innerText = 'Las contraseñas no coinciden.';
        errorRepepass.style.display = 'block';
        valid = false;
    } else {
        this.submit();
        document.location.href = 'login.html'
    }
})
