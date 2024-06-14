let form = document.querySelector('form');
let email = document.querySelector('#email');
let pass = document.querySelector('#pass');
let repepass = document.querySelector('#repepass');
let errorMail = document.querySelector('.errorMail');
let errorPass = document.querySelector('.errorPass');
let errorRepepass = document.querySelector('.errorRepepass')
localStorage.setItem("#email", email)


form.addEventListener('submit', function(e){
   e.preventDefault();
   if(email.value == ''){
    errorMail.innerText ='Por favor complete el campo';
   }

   else if(pass.value == ''){
    errorPass.innerText = 'Por favor complete el campo contraseña';
   }

   else if(pass.value.length < 6){
    errorPass.innerText = 'Debe ingresar al menos 6 caracteres';
   }

   if(repepass.value == ''){
    errorRepepass.innerText = 'Por favor complete el campo'; 
   } else if (repepass.value == repepass.value){
    errorRepepass.innerText = 'Las contraseñas no coinciden';
   }

   else{
       user.email = email.value;
       user.password = pass.value;
       user.repepass = repepass.value;
   }
   
})
