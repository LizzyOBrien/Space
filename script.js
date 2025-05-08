document.addEventListener("DOMContentLoaded", function () {
  let currentScreen = 0;
  const screens = document.querySelectorAll(".screen");
  const nextButtons = document.querySelectorAll(".btn-next");
  const leaveButton = document.querySelector(".btn-leave");
  const spaceship = document.querySelector(".spaceship");
  const planet = document.querySelector(".planet-mercury");

  // Show only the current screen
  function showScreen(index) {
    screens.forEach((screen, i) => {
      screen.style.display = i === index ? "flex" : "none";
    });
  }
  
  //Spaceship animations
  function spaceshipEnter() {
    spaceship.classList.remove("fly-out");
    spaceship.classList.add("fly-in");
  }

  function spaceshipExit() {
    spaceship.classList.remove("fly-in");
    spaceship.classList.add("fly-out");
  }
  
  //planet expands 
  function expandPlanet() {
    planet.classList.add("expand");
  }

  //Buttons!!!!
  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (currentScreen === 0) expandPlanet();
      if (currentScreen === 1) spaceshipEnter();
      if (currentScreen === screens.length - 2) spaceshipExit();

      currentScreen++;
      showScreen(currentScreen);
    });
  });

  if (leaveButton) {
    leaveButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  showScreen(currentScreen);
});