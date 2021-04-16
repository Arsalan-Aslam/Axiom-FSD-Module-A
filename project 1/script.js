// retrieving HTML elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Create event listener for submit button
form.addEventListener('submit',function() {
    console.log('Submitted');
});