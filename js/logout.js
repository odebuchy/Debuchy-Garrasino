
let datosUserLogout = localStorage.getItem('user')

let datosParseUserLogout = JSON.parse(datosUserLogout)
console.log("parse user", datosParseUser)



if (datosParseUserLogout) {
    fetch('https://fakestoreapi.com/products/categories')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("data", data)
            let arrayCategorias = data;
            let headerHome = document.querySelector('.sectionheader')

            headerHome.innerHTML =

                `<div><h2> "bienvenido  ${datosParseUserLogout}" </h2></div>
<div class= listaHeader>
<li><a href="./index.html?">Home</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "jewelery"}">Accesorios</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "electronics"}">Electronica</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "men's clothing"}">Hombre</a></li>
<li><a href="./category.html?categories=${arrayCategorias.category = "women's clothing"}">Mujer</a></li>
<li><a href="./cart.html?">Carrito</a></li>
<li id="logout"><a href="" >logout</a></li>
</div>`

            document.getElementById('logout').addEventListener('click', function (event) {
                event.preventDefault();
                localStorage.clear();
                alert('Has cerrado sesión');
                window.location.href = './index.html';
                console.log(datosParseUserLogout)
            });


        })
        .catch(function (e) {
            console.log("error1", e)
        })
} else {}





