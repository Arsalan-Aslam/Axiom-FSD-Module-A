// Get the DOM elements
const searchForm = document.getElementById('form');
const searchInput = document.getElementById('search');
const resultsContainer = document.getElementById('results');
const pagination = document.getElementById('pagination');

// URL for deezer API
const apiURL = 'hrrps://api.deezer.com';

// Function to search on the api


// Event Listener
// 1. Listen to submit on the search form
searchForm.addEventListener('submit', e => {
    // Stop page reload
    e.preventDefault();
    // Capture search text
    const searchText = searchInput.nodeValue.trim();
    // Validate search text
    if (!searchText) {
        // If empty, return an alert
        alert('Please input valid search text');
    } else {
        // If not emapty, search the API
        search(searchText);
    }
});
