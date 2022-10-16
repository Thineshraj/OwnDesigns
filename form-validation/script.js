'use strict';

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.querySelector('.btn');

let usernameVal, emailVal, passVal;

username.addEventListener('input', usernameValidation);
email.addEventListener('input', emailValidation);
password.addEventListener('input', passwordValidation);
button.addEventListener('mouseover', (e) => {
  if (usernameVal && emailVal && passVal) {
    button.className = 'btn btn-valid';
  } else {
    button.className = 'btn invalidBtn';
  }
});

const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// Username Validation function
function usernameValidation(e) {
  if (e.target.name == 'username') {
    if (e.target.value.length > 3) {
      e.target.classList.add('valid');
      e.target.classList.remove('invalid');
      usernameVal = true;
    } else {
      e.target.classList.add('invalid');
      e.target.classList.remove('valid');
      usernameVal = false;
    }
  }
}

// Email validation function
function emailValidation(e) {
  if (e.target.name == 'email') {
    if (e.target.value.includes('@')) {
      e.target.classList.add('valid');
      e.target.classList.remove('invalid');
      emailVal = true;
    } else {
      e.target.classList.add('invalid');
      e.target.classList.remove('valid');
      emailVal = false;
    }
  }
}

// Password validation function
function passwordValidation(e) {
  if (e.target.name == 'password') {
    if (pass_reg.test(e.target.value)) {
      e.target.classList.add('valid');
      e.target.classList.remove('invalid');
      passVal = true;
    } else {
      e.target.classList.add('invalid');
      e.target.classList.remove('valid');
      passVal = false;
    }
  }
}

// Form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(`Username: ${username.value}, Email: ${email.value}`);
  username.value = '';
  email.value = '';
  password.value = '';
});
