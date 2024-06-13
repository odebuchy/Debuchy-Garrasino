let form = document.querySelector('form');
let email = document.querySelector('#email');
let pass = document.querySelector('#pass');
let errorMail = document.querySelector('.errorMail');
let errorPass = document.querySelector('.errorPass');


form.addEventListener('submit', function(e){
   e.preventDefault();
   if(email.value == ''){
       errorMail.innerText ='Por favor complete el campo email'
   }
   else if(pass.value == '' || pass.length <3){
       errorPass.innerText = 'Por favor complete el campo contraseña'
   }
   else{
       user.email = email.value;
       user.password = pass.value
   }




})
