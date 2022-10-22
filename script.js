const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');
const username = document.querySelector('#id_name');
const email = document.querySelector('#id_email');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

const passError = document.querySelector('#pass-error');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');

function func(e){
    event.preventDefault();
    
    if (password.value.length < 1){
        passError.textContent= "password is required";
        passError.style.marginBottom='5px';
    }
    else if (password.value.length < 6){
        passError.textContent= "password min. 6 characters";
        password.value = "";
        passError.style.marginBottom='5px';
    }
    
    if (username.value.length < 1){
        nameError.textContent= "username is required";
        nameError.style.marginBottom='5px';
    }
    
    if (email.value.length < 1){
        emailError.textContent= "email is required";
        emailError.style.marginBottom='5px';
    }
    else if (email.value.length > 1){
        const verify = ValidateEmail(email);
        if (verify==false){
            emailError.textContent= "enter a valid email id";
        }
        }
    }
    



email.addEventListener('change', function(e) {
    emailError.textContent= "";
});
username.addEventListener('change', function(e) {
    nameError.textContent= "";
});
password.addEventListener('change', function(e) {
    passError.textContent= "";
});



function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{ return true; }
else
{ return false; }
}




