let form = document.querySelector('form');
let email = document.querySelector('#email');
let pass = document.querySelector('#pass');
let errorMail = document.querySelector('.errorMail');
let errorPass = document.querySelector('.errorPass');
localStorage.setItem("#email", email)


form.addEventListener('submit', function(e){
   e.preventDefault();
   if(email.value == ''){
      alert (errorMail ='Por favor complete el campo email')
   }
   else if(pass.value == ''){
       alert (errorPass = 'Por favor complete el campo contraseña')
   }

   else if(pass.value.length < 6){
    alert (errorPass = 'La contraseña debe tener al menos 6 caracteres')
   }
   else{
       user.email = email.value;
       user.password = pass.value;
   }
   
})
