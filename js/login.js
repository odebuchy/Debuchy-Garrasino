let form = document.querySelector('form');
let mail = document.querySelector('#mail');
let pass = document.querySelector('#pass');
let errorMail = document.querySelector('.errorMail');
let errorPass = document.querySelector('.errorPass');


form.addEventListener('submit', function (e) {
   e.preventDefault();
   let userMail = mail.value
   if (mail.value == '') {
      alert(errorMail = 'Por favor complete el campo email.')
   } else if (pass.value == '') {
      alert(errorPass = 'Por favor complete el campo contraseña.')
   } else if (pass.value.length < 6) {
      alert(errorPass = 'La contraseña debe tener al menos 6 caracteres.')
   } else {
      console.log("usuario log", userMail)
      localStorage.setItem('user', JSON.stringify(userMail))
      form.submit()
      document.location.href = "index.html"
   }


})
