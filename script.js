const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const songs = [
  {
    title: "Come back home",
    file: "music/2NE1  COME BACK HOME  NIGHTCORE.mp3"
  },

  {
    title: "Medicine",
    file: "music/Daughter - Medicine ( Audio Edit ).mp3"
  },

  {
    title: "Monsoon",
    file: "music/song3.mp3"
  },

  {
    title: "song 4",
    file: "music/song4.mp3"
  }
];

const audioPlayer = document.getElementById("audioPlayer");
const playMusic = document.getElementById("playMusic");
const skipMusic = document.getElementById("skipMusic");
const songTitle = document.getElementById("songTitle");

let currentSong = -1;
let playing = false;

function randomSong(){

  let random;

  do{
    random = Math.floor(Math.random() * songs.length);
  }

  while(random === currentSong);

  currentSong = random;

  audioPlayer.src = songs[currentSong].file;

  songTitle.textContent = songs[currentSong].title;

  audioPlayer.play();

  playing = true;

  playMusic.textContent = "pause";
}

playMusic.addEventListener("click", () => {

  if(!playing){

    if(audioPlayer.src === ""){
      randomSong();
    }

    else{
      audioPlayer.play();
    }

    playing = true;
    playMusic.textContent = "pause";
  }

  else{
    audioPlayer.pause();

    playing = false;

    playMusic.textContent = "play ♡";
  }

});

skipMusic.addEventListener("click", () => {
  randomSong();
});

audioPlayer.addEventListener("ended", () => {
  randomSong();
});
