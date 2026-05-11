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
    file: "music/TOKIO HOTEL - MONSOONI#spotify#8daudio #lyricssongs #tokiohotel#monsoon.mp3"
  },
  {
    title: "Born without a heart",
    file: "music/Born without a heart-lyrics #trending #music #song #lyrics #shorts.mp3"
  },
  {
    title: "Ruler of my heart <3",
    file: "music/W E I G E  Ruler Of My Heart  ALIEN STAGE.mp3"
  }
];

const audioPlayer = document.getElementById("audioPlayer");
const playMusic = document.getElementById("playMusic");
const skipMusic = document.getElementById("skipMusic");
const songTitle = document.getElementById("songTitle");

let currentSong = -1;
let playing = false;

function randomSong() {
  let random;

  do {
    random = Math.floor(Math.random() * songs.length);
  } while (random === currentSong && songs.length > 1);

  currentSong = random;
  audioPlayer.src = songs[currentSong].file;
  songTitle.textContent = songs[currentSong].title;

  audioPlayer.play();
  playing = true;
  playMusic.textContent = "pause";
}

playMusic.addEventListener("click", () => {
  if (!playing) {
    if (audioPlayer.src === "") {
      randomSong();
    } else {
      audioPlayer.play();
    }

    playing = true;
    playMusic.textContent = "pause";
  } else {
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

const loreCards = document.querySelectorAll(".lore-card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

loreCards.forEach((card) => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalText.textContent = card.dataset.text;
    modal.classList.add("show");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});
