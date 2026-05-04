const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.onclick = () => {
  nav.classList.toggle("open");
};
