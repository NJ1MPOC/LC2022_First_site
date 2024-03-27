const toTop = document.querySelector(".to-top");
const redirectNavLogo = document.getElementById("navRedir");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

redirectNavLogo.addEventListener("click", function(){
     let response = window.confirm("This will open a new tab and send you to the author's Steam Community page. Do you want to continue?");
     if (response===true){
        window.open("https://steamcommunity.com/id/Zetsurin90");
     }       
})

let volDefault = document.getElementById("audioMp3");
volDefault.volume = 0.05;

/* todo: make all of this work */

/* const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const volumeSlider = document.getElementById('volume-slider');
const playlist = ['song1.mp3', 'song2.mp3', 'song3.mp3', 'song4.mp3'];
let currentSong = 0;

// update the song title and artist
const updateSongInfo = () => {
  const songTitle = document.getElementById('song-title');
  const artist = document.getElementById('artist');
  songTitle.textContent = `Song title: ${playlist[currentSong]}`;
  artist.textContent = 'Artist: Unknown';
};
updateSongInfo();

// play or pause the audio
const playPause = () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = '❚ ❚';
  } else {
    audio.pause();
    playPauseButton.textContent = '▶';
  }
};

// go to the previous song in the playlist
const previous = () => {
  currentSong = (currentSong + playlist.length - 1) % playlist.length;
  audio.src = playlist[currentSong];
  audio.play();
  updateSongInfo();
};

// go to the next song in the playlist
const next = () => {
  currentSong = (currentSong + 1) % playlist.length;
  audio.src = playlist[currentSong];
  audio.play();
  updateSongInfo();
};

// update the volume
const updateVolume = () => {
  audio.volume = volumeSlider.value;
};

// add event listeners to the buttons and volume slider
playPauseButton.addEventListener('click', playPause);
previousButton.addEventListener('click', previous);
nextButton.addEventListener('click', next);
volumeSlider.addEventListener('input', updateVolume);

// automatically play the next song when the current one ends
audio.addEventListener('ended', next); */
