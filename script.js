let currentScreen = 0;
const screens = document.querySelectorAll(".screen");
const nextButtons = document.querySelectorAll(".btn-next");
const leaveButton = document.querySelector(".btn-leave");
const spaceship = document.querySelector(".spaceship");
const planet = document.querySelector(".planet");

// Shows only the current screen
function showScreen(index) {
  screens.forEach((screen, i) => {
    screen.style.display = i === index ? "block" : "none";
  });
}

// spaceship entrance animation
function spaceshipEnter() {
  spaceship.classList.remove("fly-out");
  spaceship.classList.add("fly-in");
}

// spaceship exit animation
function spaceshipExit() {
  spaceship.classList.remove("fly-in");
  spaceship.classList.add("fly-out");
}

// Expand planet to surface view
function expandPlanet() {
  planet.classList.add("expand");
}

// button clicks to move to next screen
nextButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (currentScreen === 0) expandPlanet();
    if (currentScreen === 1) spaceshipEnter();
    if (currentScreen === screens.length - 1) spaceshipExit();
    if (leaveButton) {
        leaveButton.addEventListener("click", () => {
          window.location.href = "index.html"; // change path if needed
        });
      }
    currentScreen++;
    showScreen(currentScreen);
  });
});

showScreen(currentScreen);