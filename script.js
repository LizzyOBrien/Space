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
  
  function spaceshipFlyIn() {
    spaceship.classList.add("fly-in");
  }

  function spaceshipFlyOut() {
    spaceship.classList.remove("fly-in", "from-top", "park-top-left");
    spaceship.classList.add("fly-out");
  }

  function spaceshipEnterFromTop() {
    spaceship.classList.remove("fly-out");
    spaceship.classList.add("from-top");
    setTimeout(() => {
      spaceship.classList.add("park-top-left");
    }, 10);
  }

  // Planet expands
  function expandPlanet() {
    planet.classList.add("expand");
  }

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (currentScreen === 0) {
        spaceshipFlyOut();
        setTimeout(() => {
          expandPlanet();
          setTimeout(spaceshipEnterFromTop, 1500);
        }, 1000);
      }
    
      if (currentScreen === screens.length - 2) {
        spaceship.classList.remove("park-top-left");
        spaceship.classList.add("from-top");
        setTimeout(() => {
          spaceship.style.top = "-300px";
        }, 100);
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
  spaceshipFlyIn();
});