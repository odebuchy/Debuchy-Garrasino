
fetch('https://fakestoreapi.com/products/categories')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log("data", data)
    let arrayCategorias = data;
    let headerHome = document.querySelector('.sectionheader')
    let header = [];
})
.catch(function (e) {
    console.log(e)
})