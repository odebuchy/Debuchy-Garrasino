let form = document.querySelector('form');
let mail = document.querySelector('#mail');
let user = document.querySelector('#email'); 
let pass = document.querySelector('#pass');
let errorMail = document.querySelector('.errorMail');
let errorPass = document.querySelector('.errorPass');
localStorage.setItem("#email", mail)


form.addEventListener('submit', function(e){
   e.preventDefault();
   if(mail.value == ''){
      alert (errorMail ='Por favor complete el campo email.')
   } else if(pass.value == ''){
      alert (errorPass = 'Por favor complete el campo contraseña.')
   } else if(pass.value.length < 6){
      alert (errorPass = 'La contraseña debe tener al menos 6 caracteres.')
   } else{
      form.submit()
      document.location.href = "index.html"
      localStorage.setItem("userEmail", mail.value)
   }

   
})
