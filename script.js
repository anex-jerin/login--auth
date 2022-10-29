const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorE = document.querySelector('#error-e');
const errorP = document.querySelector('#error-p');
const btn = document.querySelector('#btn');
const loginError = document.querySelector('#login-error');

let emailValidation = false;
let passwordValidation = false;

email.addEventListener('input', (e) => {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let value = e.target.value;
  let message = 'Enter a valid email address';
  let error = errorE;
  formValidation(email, value, regex, message, error);
  if (regex.test(value)) {
    emailValidation = true;
  }
});
password.addEventListener('input', (e) => {
  let regex = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])^.{8,16}$/;
  let value = e.target.value;
  let message =
    'Your password must be at least 8 characters long, contain at least one number,a special character and have a mixture of uppercase and lowercase letters';
  let error = errorP;
  formValidation(password, value, regex, message, error);
  if (regex.test(value)) {
    passwordValidation = true;
  }
});

const formValidation = (name, value, regex, message, error) => {
  if (value) {
    if (regex.test(value)) {
      name.classList = 'check';
      error.style.display = 'none';
    } else {
      name.classList = 'excl';
      error.innerText = message;
      error.style.display = 'block';

    }
  }
  if (!value) {
    name.classList.remove('check');
    name.classList.remove('excl');
    error.style.display = 'none';
  }
};

btn.addEventListener('click', (e) => {
  if (!emailValidation && !passwordValidation) {
    e.preventDefault();
     loginError.innerText = 'email or password is not valid';
  }
  
});
