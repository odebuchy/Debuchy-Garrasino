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

fetch('https://fakestoreapi.com/products/category/jewelery')
.then (function(response){
    return response.json();
  })
  .then (function (data){
    console.log(data); 
    let arrayAccesorios = data;
    let sectionAccesorios= document.querySelector(`.accesorioshome`);
    let Accesorios = [];
    
    for (let i = 0; i <arrayAccesorios.length ; i++) {
    Accesorios+=` <div>
    <h2>${arrayAccesorios[i].title}</h2>
      <img src="${arrayAccesorios[i].image}" class="imagenesAccesorios">
     <p>${arrayAccesorios[i].description}</p>
     <p>${arrayAccesorios[i].price}</p>
     <a  href="./producto.html?id=${arrayAccesorios[i].id}">VER MAS</a>
     </div>`
      
    
    sectionAccesorios.innerHTML= Accesorios

    sectionAccesorios.style.flexDirection = 'row'
    sectionAccesorios.style.display = 'flex'
    sectionAccesorios.style.flexWrap = 'wrap'
    sectionAccesorios.style.alignSelf = 'center'

}


divAccesorios = document.querySelectorAll('.accesorioshome div')
for (let i = 0; i < divMujer.length; i++){
  divAccesorios[i].style.margin = '10px'
  divAccesorios[i].style.paddingTop = '30px'
  divAccesorios[i].style.paddingBottom = '10px'
  divAccesorios[i].style.paddingLeft = '10px'
  divAccesorios[i].style.paddingRight = '10px'
  divAccesorios[i].style.width = '20%'
  divAccesorios[i].style.border = '1px solid black'
  divAccesorios[i].style.backgroundColor = 'none'
  divAccesorios[i].style.borderRadius = '10px'
  divAccesorios[i].style.textAlign = 'center'
}

let imagenAccesorios = document.querySelectorAll('.accesorioshome div img')
for (let i = 0; i < imagenAccesorios.length; i++){
  imagenAccesorios[i].style.width = '30%'
  imagenAccesorios[i].style.height = '40%'
  imagenAccesorios[i].style.textAlign = 'center'
  imagenAccesorios[i].style.marginTop = '20px'
  imagenAccesorios[i].style.alignSelf = 'center'
}

let tituloAccesorios =  document.querySelectorAll('.accesorioshome div h2')
for (let i = 0; i < tituloAccesorios.length; i++){
  tituloAccesorios[i].style.fontSize = "115%"
  tituloAccesorios[i].style.fontWeight = "400"
  tituloAccesorios[i].style.fontFamily = "Bebas Neue", "sans-sherif"
}

let descriptionAccesorios = document.querySelectorAll('.accesorios div p')
for (let index = 0; index < descriptionAccesorios.length; index++) {
  descriptionAccesorios[i].style.fontSize = '85%'
  descriptionAccesorios[i].style.fontFamily = "Bebas Neue", 'sans-serif'
  
}
})

.catch(function(e) {
  console.log(e)
  
})