

document.addEventListener('DOMContentLoaded', function() {
    let cartContainer = document.querySelector('.cart-container');
    let finalizarCompra = document.querySelector(`.bottoncomprar`);

    let arrayCart = JSON.parse(localStorage.getItem('arrayCarrito')) || [];

    if (arrayCart.length === 0) {
        cartContainer.innerHTML = '<p>Su carrito está vacío</p>';
    } else {
        arrayCart.forEach(productId => {
            fetch(`https://fakestoreapi.com/products/${productId}`)
                .then(res => res.json())
                .then(data => {
                    cartContainer.innerHTML += `
                        <div class="product">
                            <h2>${data.title}</h2>
                            <img src="${data.image}" alt="${data.title}">
                            <p>Price: $${data.price}</p>
                            <p>${data.description}</p>
                        </div>`;
                })
                .catch(function(error){
                    console.log(error);
                });
        });
        finalizarCompra.style.display=  `block`;

        finalizarCompra.addEventListener(`click`,function(){
            localStorage.removeItem(`arrayCarrito`);

            alert(`Gracias por su compra`);

            document.location.href = `./index.html`;
        });

    }
});
