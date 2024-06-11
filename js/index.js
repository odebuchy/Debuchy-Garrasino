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

    sectionRopaMujer.style.flexDirection = 'row'
    sectionRopaMujer.style.display = 'flex'
    sectionRopaMujer.style.flexWrap = 'wrap'
   sectionRopaMujer.style.alignSelf = 'center'
   sectionRopaMujer.style.justifyContent = 'space-around'
    
    }
    divMujer = document.querySelectorAll('.ropamujerhome div')
    for (let i = 0; i < divMujer.length; i++) {
    divMujer[i].style.margin = '10px'
    divMujer[i].style.paddingTop = '30px'
    divMujer[i].style.paddingBottom = '10px'
    divMujer[i].style.paddingLeft = '10px'
    divMujer[i].style.paddingRight = '10px'
    divMujer[i].style.width = '20%'
    divMujer[i].style.border = '1PX solid black'
    divMujer[i].style.backgroundColor = 'none'
    divMujer[i].style.borderRadius = '10px'
    divMujer[i].style.textAlign = "center"
  }
   let imagenMujer = document.querySelectorAll('.ropahombrehome div img')
    for (let i = 0; i < imagenMujer.length; i++) {
    imagenMujer[i].style.width = '"28%'
    imagenMujer[i].style.height = '40%'
    imagenMujer[i].style.textAlign = 'center'
     imagenMujer[i].style.marginTop = '20px'
     imagenMujer[i].style.alignSelf = 'center'
    }

    let tituloMujer = document.querySelectorAll('.ropamujerhome div h2')
    for (let i = 0; i < tituloMujer.length; i++) {
      tituloMujer[i].style.fontSize = "115%"
      tituloMujer[i].style.fontWeight = "400"
      tituloMujer[i].style.fontFamily ="Bebas Neue", "sans-serif"
    }
      let descripcionMujer = document.querySelectorAll('.ropamujerhome div p')
    for (let i = 0; i < descripcionMujer.length; i++) {
     descripcionMujer[i].style.fontSize = '85%'
     descripcionMujer[i].style.fontFamily ="Bebas Neue", "sans-serif"
   }
    
})
.catch(function(e){
  console.log(e)
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
      <img src="${arrayCategoriaHombre[i].image}" class="im">
     <p>${arrayCategoriaHombre[i].description}</p>
     <p>${arrayCategoriaHombre[i].price}</p>
     <a  href="./producto.html?id=${arrayCategoriaHombre[i].id}">VER MAS</a>
     </div>`
      
    
    sectionRopaHombre.innerHTML= RopaHombre
  
    sectionRopaHombre.style.display = 'flex'
   sectionRopaHombre.style.flexDirection = 'row'
    sectionRopaHombre.style.flexWrap = 'wrap'
   sectionRopaHombre.style.justifyContent = 'space-around'
   sectionRopaHombre.style.alignSelf = 'center'
    
    }
    divHombre = document.querySelectorAll('.ropahombrehome div')
    for (let i = 0; i < divHombre.length; i++) {
      divHombre[i].style.margin = '10px'
      divHombre[i].style.paddingTop = '30px'
      divHombre[i].style.paddingBottom = '10px'
      divHombre[i].style.paddingLeft = '10px'
      divHombre[i].style.paddingRight = '10px'
      divHombre[i].style.width = '20%'
      divHombre[i].style.border = '1PX solid black'
      divHombre[i].style.backgroundColor = 'none'
      divHombre[i].style.borderRadius = '10px'
      divHombre[i].style.textAlign = "center"
  }
   let imagenHombre = document.querySelectorAll('.ropahombrehome div img')
    for (let i = 0; i < imagenHombre.length; i++) {
    imagenHombre[i].style.width = '"28%'
      imagenHombre[i].style.height = '40%'
    imagenHombre[i].style.textAlign = 'center'
     imagenHombre[i].style.marginTop = '20px'
     imagenHombre[i].style.alignSelf = 'center'
    }

    let tituloHombre = document.querySelectorAll('.ropahombrehome div h2')
    for (let i = 0; i < tituloHombre.length; i++) {
      tituloHombre[i].style.fontSize = "115%"
      tituloHombre[i].style.fontWeight = "400"
      tituloHombre[i].style.fontFamily ="Bebas Neue", "sans-serif"
    }
      let descripcionHombre = document.querySelectorAll('.ropahombrehome div p')
    for (let i = 0; i < descripcionHombre.length; i++) {
     descripcionHombre[i].style.fontSize = '85%'
     descripcionHombre[i].style.fontFamily ="Bebas Neue", "sans-serif"
   
   }
    
})
.catch(function(e){
  console.log(e)
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


    sectionRopaHombre.style.display = 'flex'
   sectionRopaHombre.style.flexDirection = 'row'
    sectionRopaHombre.style.flexWrap = 'wrap'
   sectionRopaHombre.style.justifyContent = 'space-around'
   sectionRopaHombre.style.alignSelf = 'center'
    
    }
    divHombre = document.querySelectorAll('.ropahombrehome div')
    for (let i = 0; i < divHombre.length; i++) {
      divHombre[i].style.margin = '10px'
      divHombre[i].style.paddingTop = '30px'
      divHombre[i].style.paddingBottom = '10px'
      divHombre[i].style.paddingLeft = '10px'
      divHombre[i].style.paddingRight = '10px'
      divHombre[i].style.width = '20%'
      divHombre[i].style.border = '1PX solid black'
      divHombre[i].style.backgroundColor = 'none'
      divHombre[i].style.borderRadius = '10px'
      divHombre[i].style.textAlign = "center"
  }
   let imagenHombre = document.querySelectorAll('.ropahombrehome div img')
    for (let i = 0; i < imagenHombre.length; i++) {
    imagenHombre[i].style.width = '"28%'
      imagenHombre[i].style.height = '40%'
    imagenHombre[i].style.textAlign = 'center'
     imagenHombre[i].style.marginTop = '20px'
     imagenHombre[i].style.alignSelf = 'center'
    }

    let tituloHombre = document.querySelectorAll('.ropahombrehome div h2')
    for (let i = 0; i < tituloHombre.length; i++) {
      tituloHombre[i].style.fontSize = "115%"
      tituloHombre[i].style.fontWeight = "400"
      tituloHombre[i].style.fontFamily ="Bebas Neue", "sans-serif"
    }
      let descripcionHombre = document.querySelectorAll('.ropahombrehome div p')
    for (let i = 0; i < descripcionHombre.length; i++) {
     descripcionHombre[i].style.fontSize = '85%'
     descripcionHombre[i].style.fontFamily ="Bebas Neue", "sans-serif"
   
   }
    
})
.catch(function(e){
  console.log(e)
})

fetch('https://fakestoreapi.com/products/category/jewelery')
.then (function(response){
    return response.json();
  })
  .then (function (data){
    console.log(data); 
    let arrayAccesorios = data;
    let sectionAccesorios= document.querySelector('.accesorioshome');
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
for (let i = 0; i < divAccesorios.length; i++){
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
.catch(function(e){
  console.log(e)
})
