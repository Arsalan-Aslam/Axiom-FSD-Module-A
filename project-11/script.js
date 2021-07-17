// Get the DOM elements

const filter = document.getElementById('filter-container');
const newsFeed = document.getElementById('news-feed-container');
const loader = document.getElementById('loader');

// Global variable for number of posts tp fetch api call and current page
let limit = 5;
let page = 1;

// Function to asynchronously fetch posts from API
async function fetchPosts() {
    // Fetch posts from the JSON Placeholder API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?limit=${limit}&page=${page}`);
    const data = await res.json();
    return data;
};

// Function to render the posts fetch from API
async function renderPosts() {
    // Fetch the data from the API that we want to render
    const posts = await fetchPosts();
    // For each object in the post array, render the post
    posts.forEach( post => {
        const postDiv = document.createElement('div');
        // Assign the post class to this div
        postDiv.classList.add('post');
        // Create the inner content for the main post div
        postDiv.innerHTML = `
            <div class="post-id">${post.id}</div>
            <div class="post-content">
                <h2 class="post-title">${post.title}</h2>           
                <p class="post-body">${post.body}</p>
            </div>
        `;
        // Render the postDiv in the DOM
        newsFeed.appendChild(postDiv); 
    } );
};

// Function to render the CSS Loader Animation
function showLoader() {
    // Display the CSS loader animation
    loader.classList.add('show');
}

// Event Listener
// Listen for scroll in the browser window
window.addEventListener('scroll', () => {
    // Destructuring properties from DOM
    const { ScrollTop, scrollHeight, clientHeight } = document.documentElement;
    // Check if scrolled to the bottom of page
    if ( scrollTop + clientHeight >= scrollHeight - 50 ) {
        // Display the loader animation
        showLoader(); 
    }

    console.log(document.documentElement);
});
renderPosts();