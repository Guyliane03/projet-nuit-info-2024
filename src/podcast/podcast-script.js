// Sample tracks
const tracks = [
    {
        title: "Oona Layolle-001-SD",
        artist: "Florian Sevellec",
        src: "audio/Florian Sevellec - Oona Layolle-001-SD 480p.mp3",
        cover: "images/logo.png"
    },
    {
        title: "Sevellec-004-SD",
        artist: "Florian Sevellec",
        src: "audio/Florian Sevellec-004-SD 480p.mp3",
        cover: "images/logo.png"
    }
];

// References
const audio = document.getElementById('audio');
const tracklist = document.getElementById('tracklist');
const cover = document.getElementById('cover');
const trackTitle = document.getElementById('track-title');
const artist = document.getElementById('artist');
const playPauseBtn = document.getElementById('play-pause');
const progressBar = document.getElementById('progress-bar');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');

let currentTrackIndex = 0;
let isPlaying = false;

// Populate tracklist
tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = `${track.title} - ${track.artist}`;
    li.addEventListener('click', () => loadTrack(index));
    tracklist.appendChild(li);
});

// Load track
function loadTrack(index) {
    currentTrackIndex = index;
    const track = tracks[index];
    audio.src = track.src;
    cover.src = track.cover;
    trackTitle.textContent = track.title;
    artist.textContent = track.artist;
    playTrack();
}

// Play and Pause
playPauseBtn.addEventListener('click', () => {
    isPlaying ? pauseTrack() : playTrack();
});

function playTrack() {
    audio.play();
    isPlaying = true;
    playPauseBtn.textContent = '⏸';
}

function pauseTrack() {
    audio.pause();
    isPlaying = false;
    playPauseBtn.textContent = '▶️';
}

// Update Progress Bar
audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    progressBar.value = (currentTime / duration) * 100;
    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = formatTime(duration);
});

// Seek
progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Next and Previous
document.getElementById('next').addEventListener('click', nextTrack);
document.getElementById('prev').addEventListener('click', prevTrack);

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
}

// Format time
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
}

// Load first track by default
loadTrack(0);
