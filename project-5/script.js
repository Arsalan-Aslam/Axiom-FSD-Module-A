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
    
    // Get user name
    const user = data.results[0];
    console.log(user);

};

getRandomUser();
// getRandomUser();
// getRandomUser();