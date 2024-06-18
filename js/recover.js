let form = document.querySelector('form');
let user = document.querySelector('#email')
let email = document.querySelector('#email');
let errorMail = document.querySelector('.errorMail');
let checkbox = document.querySelector('#checkbox'); 
let errorCheckbox = document.querySelector('.errorCheckbox'); 

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(email.value == ''){
     errorMail.innerText ='Por favor escriba su email.';
    } else if(!checkbox.checked){
        errorCheckbox.innerText = 'Por favor acepte el campo "Quiero recuperar mi contraseña."'
    }
    
})