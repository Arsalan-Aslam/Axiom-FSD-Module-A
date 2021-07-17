// Get DOM Elements
const container = document.getElementById('container');
const previousBtn = document.getElementById('previous');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress'); 
const title = document.getElementById('song-title'); 
const albumArt = document.getElementById('album-art'); 

// Tracks Array
const tracks = ['Healing','Supplication','The_Source','Wherever_you_are'];

// Index of currently playing track
let trackIndex = 1;

// Load the initial track
loadTrack(tracks[trackIndex]);

// Function to load the selected track
function loadTrack(track) {
    // Update the text for the title of track
    title.innerText = track;
    // Update the src in the audio element with the audio file of the selecetd track
    audio.src = `music/${track}.mp3`;
    // Update the src in the img element with the image file of the selected track
    albumArt.src = `images/${track}.jpg`
};

// Function to play the track
function playTrack() {
    // Add the second class 'play' to the container
    container.classList.add('play');
    // replace the play icon with pause icon
    playBtn.innerHTML = '<i class="fas fa-pause"></i>'
    // play the track using the audio element
    audio.play();
}


// Event Listeners
// Listen for click on the play button
playBtn.addEventListener('click', () => {
    // Check if track is playing
    const isPlaying = container.classList.contains('play');
    // Conditional statement based on status of audio playback
    if (isPlaying) {
        // if the track is playing, pause the track
        pauseTrack();
    } else {
        // if the track is not playing, play the track
        playTrack();
    }
})