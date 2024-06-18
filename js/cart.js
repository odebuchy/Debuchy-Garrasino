async function displayCart (){
    let datosCart = localStorage.getItem ("arrayCarrito")
    
    let datosParse = JSON.parse (datosCart)
    console.log (datosParse)
    
    
    fetch(`https://fakestoreapi.com/products`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log("producto", data[datosParse[0]]);
            })
            .catch(function(e){
                console.log(e)
               });
                
    
    }
    
    displayCart ()