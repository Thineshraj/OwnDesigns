'use strict';

const btn = document.querySelector('.btn-submit');
const formSubmit = document.querySelector('#form-submit');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

let validation = false;

const formValidation = () => {
  if (
    username.value.trim() === '' ||
    !email.value.includes('@') ||
    password.value.length < 5
  ) {
    validation = false;
  } else {
    validation = true;
  }
};

btn.addEventListener('mouseover', function () {
  formValidation();
  if (validation) {
    btn.classList.remove('invalid');
    formSubmit.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(`Username: ${username.value}, Email: ${email.value}`);
    });
  } else {
    btn.classList.add('invalid');
  }
});
