document.addEventListener("DOMContentLoaded", function () {
  let currentScreen = 0;
  const screens = document.querySelectorAll(".screen");
  const nextButtons = document.querySelectorAll(".btn-next");
  const wearButton = document.querySelector(".wear-btn");
  const leaveButton = document.querySelector(".btn-leave");
  const spaceship = document.querySelector(".spaceship");
  const planet = document.querySelector(".planet-screen");
  const item = document.querySelector(".item");
  const itemOnAlien = document.querySelector(".item-on-alien");
  const itemBox = document.querySelector(".item-box");

  // Show only the current screen
  function showScreen(index) {
    screens.forEach((screen, i) => {
      screen.style.display = i === index ? "flex" : "none";
    });
  
    // Show item box only on screen 3
    itemBox.style.display = index === 3 ? "block" : "none";
  }

  // Spaceship animations
  
function spaceshipFlyIn() {
  spaceship.classList.remove("fly-out", "from-top", "park-top-left");
  spaceship.classList.add("fly-in");
}

function spaceshipFlyOut() {
  spaceship.classList.remove("fly-in", "from-top", "park-top-left");
  spaceship.classList.add("fly-out");
}

function spaceshipEnterFromTop() {
  spaceship.classList.remove("fly-out", "fly-in");
  spaceship.classList.add("from-top");

  setTimeout(() => {
    spaceship.classList.add("park-top-left");
  }, 100);
}

  // Planet expands and show surface
function expandPlanet() {
  const background = document.getElementById("planet-background");
  background.classList.add("planet-expanded");
}

  function animatePlanetZoom() {
    const planetBackground = document.getElementById("planet-background");
    planetBackground.style.backgroundImage = "url('images/MercuryB.png')";

    const planetImg = document.getElementById("planet");
    planetImg.classList.add("planet-zoom");

  // Fade out the first planet image
  setTimeout(() => {
    planetImg.style.opacity = "0";
  }, 1000);
}
  //********Buttons**********//
  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (currentScreen === 0) {
        spaceshipFlyOut();
        setTimeout(() => {
          expandPlanet();
          setTimeout(() => {
            spaceshipEnterFromTop();
          }, 1500);
        }, 1000);
      }

      currentScreen++;
      showScreen(currentScreen);
    });
  });

  //Wear button
  if (wearButton) {
    wearButton.addEventListener("click", () => {
      itemBox.classList.add("wear-animation");
      setTimeout(() => {
        itemOnAlien.style.opacity = 1;
        item.style.display = "none";
      }, 1400);
    });
  }
  
  // leave button - fly out with delay
  if (leaveButton) {
    leaveButton.addEventListener("click", () => {
      spaceship.classList.remove("from-top", "park-top-left");
      spaceship.classList.add("fly-up-exit");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    });
  }

  showScreen(currentScreen);
  spaceshipFlyIn();
});