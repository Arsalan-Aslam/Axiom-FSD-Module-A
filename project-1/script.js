// retrieving HTML elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Function to update class and message for error
function showError(input, message) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add error
    formControl.className = 'form-control error';
    // get the small element for the error message
    const small = formControl.querySelector('small');
    // Replace the text for small element using the input message
    small.innerText = message;
}

// Function to update class for success
function showSuccess(input) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add success
    formControl.className = 'form-control success';

}

//Function to check if the email is valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event Listeners
// Create event listener for submit button
form.addEventListener('submit',function(e) {
    // stop page from reloading on submit
    e.preventDefault();
    

    //Check to see if fields meet reuired field requirement
    // check is username input is empty
    if(username.value==='') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
    
    // check is email input is empty
    if(email.value==='') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)){
        showError(email,'Email is invalid');
    } else {
        showSuccess(email);
    }
    
    // check is password input is empty
    if(password.value==='') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    // check is password2 input is empty
    if(password2.value==='') {
        showError(password2, 'Confirm password is required');
    } else {
        showSuccess(password2);
    }

});