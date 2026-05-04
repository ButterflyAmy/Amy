const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

const revealItems = document.querySelectorAll(
  ".section-heading, .about-text, .info-box, .skill-card, .project-card, .contact"
);

revealItems.forEach(item => {
  item.classList.add("reveal");
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealItems.forEach(item => {
  observer.observe(item);
});
