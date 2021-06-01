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
    console.log(user);

    // Create the new user
    const newUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        balance: Math.floor(Math.random()*1000000)
    }
    console.log(newUser);

    // Add the new user into the data array
    addData(newUser);

};

// Function to add user data into user data array


getRandomUser();
// getRandomUser();
// getRandomUser();