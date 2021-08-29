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
const cardData = getCardData();
// const cardData = [
//     {
//         // 0
//         question: 'What is React?',
//         answer: 'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.'
//     },
//     {
//         // 1
//         question: 'What is HTML',
//         answer: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.'
//     },
//     {
//         // 2
//         question: 'What is MongoDB',
//         answer: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.'
//     }
// ];

// Function to save cards in Local Storage
function saveCardData(cardData) {
    localStorage.setItem('cards',JSON.stringify(cardData));
    window.location.reload();
}

// Function to get cards from local storage
function getCardData() {
    // Get cards from localStorage
    const cards = JSON.parse(localStorage.getItem('cards'));
    // If there is data, return from localStorage, else return an empty array
    return cards === null ? [] : cards;
}

// Function to update the currentCardNave
function updateCurrentCardNav () {
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

// Event Listeners
// 1. Listen for click on the next button
nextBtn.addEventListener('click', () => {
    // Update the class for the current card to make it inactive
    cards[currentCardID].className = 'card left';
    // Increment currentCardID by 1
    currentCardID++;
    // Check if last card is reached
    if( currentCardID > cards.length - 1 ){
        currentCardID = 0;
    }
    // Now make the newly selected card active
    cards[currentCardID].className = 'card active';
    // Update text for currentCardNav
    updateCurrentCardNav();

} );

// 2. Listen for click on the previous button
prevBtn.addEventListener('click', () => {
    // Update the class for the current card to make it inactive
    cards[currentCardID].className = 'card right';
    // Decrement currentCardID by 1
    currentCardID--;
    // Check if the first card is reached
    if( currentCardID < 0 ){
        currentCardID = cards.length - 1;
    }
    // Now make the newly selected card active
    cards[currentCardID].className = 'card active';
    // Update text for currentCardNav
    updateCurrentCardNav();
} );

// 3. Listen for click on the addCardBtn
addCardBtn.addEventListener('click', () => addCardContainer.classList.add('active'));

// 4.Listen for click on the cancelBtn
cancelBtn.addEventListener('click', () => addCardContainer.classList.remove('active'));

// 5. Listen for click on the addCardSubmitBtn
addCardSubmitBtn.addEventListener('click', () => {
    // get the values of question and answer from the add question form
    const question = questionInput.value;
    const answer = answerInput.value;
    // Check if values are valid
    if ( question.trim() && answer.trim()) {
        // Create an object with Q & A
        const nextCard = {question, answer};
        // Generate a new card using nextCard object
        generateCard(nextCard);
        // clear the form fields
        questionInput.value = '';
        answerInput.value = '';
        // Hide the Add Card Form
        addCardContainer.classList.remove('active');
        // Save the nextCard object into cardData array
        cardData.push(nextCard);
        // Save to localStorage
        saveCardData(cardData); 
    }
});


// 6. Listen for click on clearCardsBtn
clearCardsBtn.addEventListener('click', () => {
    // Remove card from localStorage
    localStorage.clear();
    // clear cardscontainer
    cardsContainer.innerHTML = '';
    window.location.reload(); 
});
generateCards();
