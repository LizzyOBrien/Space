document.addEventListener("DOMContentLoaded", function () {
  let currentScreen = 0;
  const screens = document.querySelectorAll(".screen");
  const nextButtons = document.querySelectorAll(".btn-next");
  const wearButton = document.querySelector(".wear-btn");
  const leaveButton = document.querySelector(".btn-leave");
  const spaceship = document.querySelector(".spaceship");
  const planet = document.querySelector(".planet-mercury");
  const sunglassReward = document.querySelector(".sunglass-reward");
  const sunglassesOnAlien = document.querySelector(".sunglasses-on-alien");
  const sunglassBox = document.querySelector(".sunglass-box");

  // Show only the current screen
  function showScreen(index) {
    screens.forEach((screen, i) => {
      screen.style.display = i === index ? "flex" : "none";
    });
  
    // Show sunglasses box only on screen 3
    sunglassReward.style.display = index === 3 ? "block" : "none";
  }

  // Spaceship animations
  function spaceshipEnter() {
    spaceship.classList.remove("fly-out");
    spaceship.classList.add("fly-in");
  }

  function spaceshipExit() {
    spaceship.classList.remove("fly-in");
    spaceship.classList.add("fly-out");
  }

  // Planet expands
  function expandPlanet() {
    planet.classList.add("expand");
  }

  // Button click handling
  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (currentScreen === 0) {
        expandPlanet();
        setTimeout(spaceshipEnter, 1000); // delay alien until planet expands
      }

      if (currentScreen === 1) {
        spaceshipEnter();
      }

      if (currentScreen === screens.length - 2) {
        spaceshipExit();
      }

      currentScreen++;
      showScreen(currentScreen);
    });
  });

  //Wear button
  if (wearButton) {
    wearButton.addEventListener("click", () => {
      sunglassBox.classList.add("wear-animation");
      setTimeout(() => {
        sunglassReward.classList.add("fade-out");
        sunglassesOnAlien.style.opacity = 1;
      }, 800);
    });
  }
  
  // Leave button
  if (leaveButton) {
    leaveButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  showScreen(currentScreen);
});