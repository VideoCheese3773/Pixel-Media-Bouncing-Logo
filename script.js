const dvdLogo = document.getElementById("dvdLogo");

let posX = 100;
let posY = 100;
let speedX = 4;
let speedY = 4;

const colors = [
  "invert(28%) sepia(91%) saturate(1927%) hue-rotate(330deg) brightness(99%) contrast(104%)",
  "invert(52%) sepia(92%) saturate(206%) hue-rotate(114deg) brightness(94%) contrast(101%)",
  "invert(24%) sepia(74%) saturate(4005%) hue-rotate(235deg) brightness(92%) contrast(109%)",
  "invert(76%) sepia(100%) saturate(2044%) hue-rotate(273deg) brightness(96%) contrast(106%)",
  "invert(76%) sepia(100%) saturate(742%) hue-rotate(43deg) brightness(95%) contrast(95%)"
];

function getRandomFilter() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function animate() {
  posX += speedX;
  posY += speedY;

  if (posX <= 0 || posX + dvdLogo.clientWidth >= window.innerWidth) {
    speedX = -speedX;
    dvdLogo.style.filter = getRandomFilter();
  }
  if (posY <= 0 || posY + dvdLogo.clientHeight >= window.innerHeight) {
    speedY = -speedY;
    dvdLogo.style.filter = getRandomFilter();
  }

  dvdLogo.style.transform = `translate(${posX}px, ${posY}px)`;
  requestAnimationFrame(animate);
}

animate();