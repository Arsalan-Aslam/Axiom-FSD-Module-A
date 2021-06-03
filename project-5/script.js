// Get DOM elements

const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const filterBtn = document.getElementById('filter');
const sortBtn = document.getElementById('sort');
const sumBtn = document.getElementById('sum');

// Initialize user data array
let data = [];

// Fetch random user from randomuser.me

async function getRandomUser() {
    // wait for the result from API
    const res = await fetch('https://randomuser.me/api');
    // Wait for response to convert into JSON
    const data = await res.json();

    // console.log(data);
    
    // Get user data
    const user = data.results[0];
    // console.log(user);

    // Create the new user
    const newUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        balance: Math.floor(Math.random()*1000000)
    }
    
    // Add the new user into the data array
    addData(newUser);

};

// Function to add user data into user data array
function addData(newUser) {
    // Add the new User data into the user data array
    data.push(newUser);
    // Update the DOM to display users in the data array
    updateDOM();
}

// Function to format random number as money
function formatNumberToDollar(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&, ');
}

// Update the UI with data from the user data array
function updateDOM(userData = data) {
    // Clear previous UI
    main.innerHTML = '<h2><strong>User</strong> Wealth</h2>'
    // Loop through userData and render in the UI
    userData.forEach(user => {
        // Create a new div element for the user
        const userDiv = document.createElement('div');
        // Apply the user class to the new div
        userDiv.classList.add('user');
        // Add inner HTML to the user div
        userDiv.innerHTML = `<strong>${user.name}</strong> ${formatNumberToDollar(user.balance)}`
        // Add the new element into the DOM
        main.appendChild(userDiv);
    }); 
}

// Event Listeners
?

// Create a random user
getRandomUser();
getRandomUser();
getRandomUser();