let form = document.querySelector('form');
let user = document.querySelector('#email')
let email = document.querySelector('#email');
let errorMail = document.querySelector('.errorMail');

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(email.value == ''){
     errorMail.innerText ='Por favor escriba su email.';
    }

    else{
        user.email = email.value;
    }
    if (recover.checked) {
        errorCheckbox.innerText = 'Por favor acepte el campo Quiero recuperar mi contraseña.'
    }
})