// Get DOM Elements
const addCardBtn = document.getElementById('add-card');
const clearCardsBtn = document.getElementById('clear-cards');
const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev-btn');
const currentCardNav = document.getElementById('current-card');
const nextBtn = document.getElementById('next-btn');
const cancelBtn = document.getElementById('cancel-btn');
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');
const addCardSubmitBtn = document.getElementById('add-card-btn');
const addCardContainer = document.getElementById('add-card-container');

// ID of current card
let currentCardID = 0;

// Collection of cards DOM Elements
const cards = [];

// Collection of Cards data
const cardData = [
    {
        // 0
        question: 'What is React?',
        answer: 'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.'
    },
    {
        // 1
        question: 'What is HTML',
        answer: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.'
    },
    {
        // 2
        question: 'What is MongoDB',
        answer: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.'
    }
];

// Function to update the currentCardNave
function currentCardNav () {
    currentCardNav.innerText = `${currentCardID + 1} / ${cards.length}`;
}

// Function to generate cards based on cardData
function generateCards () {
    // Itterate over cardData and generate cards
    cardData.forEach( (data, index) => generateCard( data, index) );
};

// function to generate a single card
function generateCard (data, index) {
    // create a div element for the card
    const card = document.createElement('div');
    // assign the card class
    card.classList.add('card');
    // Only make the first card active
    if (index === 0) {
        // If it is the first card, assign active class
        card.classList.add('active');
    }
    // Create the card content structure
    card.innerHTML = `
        <div class="inside-card">
            <div class="card-front">
                <p>${data.question}</p>
            </div>
            <div class="card-back">
                <p>${data.answer}</p>
            </div>
        </div>    
    `;
    // Listen for click on card
    card.addEventListener('click', () => card.classList.toggle('show-answer'));
    // Add the card into the DOM
    cards.push(card);
    // append the card into the cardsContainer
    cardsContainer.appendChild(card);
    // Update text for currentCardNav
    updateCurrentCardNav();

};

generateCards();
