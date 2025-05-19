document.addEventListener("DOMContentLoaded", function () {
  let currentScreen = 0;
  const screens = document.querySelectorAll(".screen");
  const nextButtons = document.querySelectorAll(".btn-next");
  const wearButton = document.querySelector(".wear-btn");
  const leaveButton = document.querySelector(".btn-leave");
  const spaceship = document.querySelector(".spaceship");
  const planet = document.querySelector(".planet-mercury");
  const item = document.querySelector(".item");
  const itemOnAlien = document.querySelector(".item-on-alien");
  const itemBox = document.querySelector(".item-box");

  // Show only the current screen
  function showScreen(index) {
    screens.forEach((screen, i) => {
      screen.style.display = i === index ? "flex" : "none";
    });
  
    // Show item box only on screen 3
    item.style.display = index === 3 ? "block" : "none";
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

  //********Buttons**********//
  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (currentScreen === 0) {
        spaceshipFlyOut();
        setTimeout(() => {
          expandPlanet();
          setTimeout(spaceshipEnterFromTop, 1500);
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
      }, 1500); // Delay redirect so user sees spaceship leave
    });
  }

  showScreen(currentScreen);
  spaceshipFlyIn();
});