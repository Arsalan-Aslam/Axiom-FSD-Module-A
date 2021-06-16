// Get the DOM Elements

const word = document.getElementById('word');
const incorrectLetters = document.getElementById('incorrect-letters');
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('final-message');
const playBtn = document.getElementById('play-btn');
const notification = document.getElementById('notification-container');

// Get DOM Elements for Hangman

const figureParts = document.querySelectorAll('figure-part');

// This is the pool of words which will be used to select a random word
const words = ["pictured","moving","yard","for","trace","lovely","about","result","plenty","properly","attack","word","team","member","develop","wind","greater","movie","sand","daughter","write","related","fought","dull","brother","jack","appropriate","replace","serve","within","wind","production","base","snake","health","clock","cattle","desert","bear","helpful","vertical","progress"];

// Select the word at random from words array
let selectedWord = words[Math.floor(Math.random() * words.length)];

// Tracking arays for correct and incorrect guesses

const correctLettersArray = [];
const incorrectLettersArray = [];

// Function to display the selectedWord in the DOM

function displayWord() {
    // Display the selected word
    word.innerHTML = `
    ${selectedWord
        .split('')
        .map(letter => `
             <span class="letter">
                ${correctLettersArray.includes(letter) ? letter: ''}
            </span>
        `
        )
        .join('')
    }`

};

// Execute displayWord on page load
displayWord();
