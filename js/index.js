fetch('https://fakestoreapi.com/products/category/women\'s clothing')
.then (function(response){
    return response.json();
  })
  .then (function (data){
    console.log(data); 
    let arrayCategoriaMujer = data;
    let sectionRopaMujer = document.querySelector(`.ropamujerhome`);
    let RopaMujer = [];
    
    for (let i = 0; i <arrayCategoriaMujer.length ; i++) {
    RopaMujer+=` <div>
    <h2>${arrayCategoriaMujer[i].title}</h2>
      <img src="${arrayCategoriaMujer[i].image}" class="imagenesMujer">
     <p>${arrayCategoriaMujer[i].description}</p>
     <p>${arrayCategoriaMujer[i].price}</p>
     <a  href="./producto.html?id=${arrayCategoriaMujer[i].id}">VER MAS</a>
     </div>`
      
    
    sectionRopaMujer.innerHTML= RopaMujer



}
})


fetch('https://fakestoreapi.com/products/category/men\'s clothing')
.then (function(response){
    return response.json();
  })
  .then (function (data){
    console.log(data); 
    let arrayCategoriaHombre = data;
    let sectionRopaHombre = document.querySelector(`.ropahombrehome`);
    let RopaHombre = [];
    
    for (let i = 0; i <arrayCategoriaHombre.length ; i++) {
    RopaHombre+=` <div>
    <h2>${arrayCategoriaHombre[i].title}</h2>
      <img src="${arrayCategoriaHombre[i].image}" class="imagenesHombre">
     <p>${arrayCategoriaHombre[i].description}</p>
     <p>${arrayCategoriaHombre[i].price}</p>
     <a  href="./producto.html?id=${arrayCategoriaHombre[i].id}">VER MAS</a>
     </div>`
      
    
    sectionRopaHombre.innerHTML= RopaHombre

}
})