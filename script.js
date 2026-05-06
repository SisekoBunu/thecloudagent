const heroBg = document.getElementById("heroBg");
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

const images = [
  "assets/images/01-problem.png",
  "assets/images/02-data-loss.png",
  "assets/images/03-meet-cloud-agent.png",
  "assets/images/04-setup.png",
  "assets/images/05-auto-backup.png",
  "assets/images/06-files-safe.png",
  "assets/images/07-disaster.png",
  "assets/images/08-restore.png",
  "assets/images/09-plans.png",
  "assets/images/10-peace-of-mind.png"
];

let index = 0;

function changeBackground() {
  if (!heroBg) return;

  heroBg.style.opacity = 0;

  setTimeout(() => {
    heroBg.style.backgroundImage = `url("${images[index]}")`;
    heroBg.style.opacity = 1;
    index = (index + 1) % images.length;
  }, 700);
}

if (heroBg) {
  changeBackground();
  setInterval(changeBackground, 10000);
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });
}