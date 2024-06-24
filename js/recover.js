let form = document.querySelector('form');
let user = document.querySelector('#email')
let email = document.querySelector('#email');
let errorMail = document.querySelector('.errorMail');
let checkbox = document.querySelector('#checkbox');
let errorCheckbox = document.querySelector('.errorCheckbox');
let avisoMail = document.querySelector (".aviso")
let irALogin = document.querySelector ("#ir")

irALogin.style.display =`none`

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (email.value == '') {
        errorMail.innerText = 'Por favor escriba su email.';
    } else if (!checkbox.checked) {
        errorCheckbox.innerText = 'Por favor acepte el campo "Quiero recuperar mi contraseña."'
    } else if (this.submit){
        avisoMail.innerText = 'Recibiras un mail con las instrucciones para recuperar tu contraseña.'
        irALogin.style.display=`block`
    } else {
        user.email = email.value;
        localStorage.setItem('user', JSON.stringify(user))
    }
})