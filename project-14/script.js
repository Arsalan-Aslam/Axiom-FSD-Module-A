const toggleBtn = document.getElementById('toggle');
const customTextContainer = document.getElementById('custom-text');
const closeBtn = document.getElementById('close');
const voicesDropdown = document.getElementById('voices');
const customText = document.getElementById('text');
const readBtn = document.getElementById('read');
const main = document.getElementById('main');



const data = [
    // For angry image
    {
        image: './img/angry.jpg', 
        text: "I'm angry"
    },
    // For drink image
    {
        image: './img/drink.jpg', 
        text: "I'm thirsty"
    },
    // For food image
    {
        image: './img/food.jpg', 
        text: "I'm hungry"
    },
    // For grandma image
    {
        image: './img/grandma.jpg', 
        text: "I miss grandma"
    },
    // For happy image
    {
        image: './img/happy.jpg', 
        text: "I'm happy"
    },
    // For home image
    {
        image: './img/home.jpg', 
        text: "I want to go home"
    },
    // For hurt image
    {
        image: './img/hurt.jpg', 
        text: "I'm hurt"
    },
    // For outside image
    {
        image: './img/outside.jpg', 
        text: "I like the outdoors"
    },
    // for sad image
    {
        image: './img/sad.jpg', 
        text: "I don't like being sad"
    },
    // For scared image
    {
        image: './img/scared.jpg', 
        text: "I'm scary"
    },
    // For school image
    {
        image: './img/school.jpg', 
        text: "Long time since I went to school"
    },
    // For tired image
    {
        image: './img/tired.jpg', 
        text: "I'm tired"
    },
];

// Array to save Web Speech API Voices
let voices = [];


// Function to create UI elements for pre-defined text to speech
function createUIElement(predefinedObject) {
    const {image, text} = predefinedObject;
    // Create the DOM Element
    const div = document.createElement('div');
    // Apply CSS to the div
    div.classList.add('box');
    // Add HTML content in the div
    div.innerHTML = `
        <img src="${image}" alt="${text}"/>
        <p class="imageInfo">${text}</p>    
    `;

    // Add event listener for the div
    div.addEventListener('click', () => {
        setText(text);
        speakText();
    });
    
    // Render in the UI
    main.appendChild(div);
};

// Initialize speech synth
const message = new SpeechSynthesisUtterance();



// Function to set text for speech
function setText(text) {
    message.text = text;
};

// Function for speaking the text
function speakText() {
    speechSynthesis.speak(message);
}

const speech = window.speechSynthesis;

// Function to fectch voices from the Web Speech API
function fetchVoices() {
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => renderVoices();
    }
  
};
//Function to render voices from fetchVoices()
function renderVoices() {
    const voices = speech.getVoices();

    voicesArray = voices;
    // Render voices in the drop down
    voicesArray.forEach((voice) => {
        let option = document.createElement('option');
        option.textContent = `${voice.name} ${voice.lang}`;
        if(voice.default) {
            option.textContent += ' (DEFAULT VOICE)';
        }
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voicesDropdown.appendChild(option);

    });
};

// Fetch voices on initial page load
fetchVoices();


// Run a loop on the data array to display the images in the UI
data.forEach(createUIElement);

// Event Listeners

// 1. Listen for click on the toggle button
toggleBtn.addEventListener('click', () => {
    // Show/Hide the custom text box when clicking the toggle button
    customTextContainer.classList.toggle('show');
});

// 2. Listen for click on close button
closeBtn.addEventListener('click', () => {
    // Hide the custom text box when clicking the toggle button
    customTextContainer.classList.remove('show');
});

// 3. Listen for voices changed in the speechSynthesis
speechSynthesis.addEventListener('voiceschanged',fetchVoices);

// 4. Listen for click on read button
readBtn.addEventListener('click', () => {
    setText(customText.value);
    speakText();
});