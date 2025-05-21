document.addEventListener("DOMContentLoaded", function () {
  let currentScreen = 0;
  const body = document.body;
  const screens = document.querySelectorAll(".screen");
  const nextButtons = document.querySelectorAll(".btn-next");
  const wearButton = document.querySelector(".wear-btn");
  const leaveButton = document.querySelector(".btn-leave");
  const spaceship = document.querySelector(".spaceship");
  const item = document.querySelector(".item img");
  const itemOnAlien = document.querySelector(".item-on-alien");
  const itemBox = document.querySelector(".item-box");
  const background = document.getElementById("planet-background");

  // === Setup from data attributes ===
  const planetName = body.dataset.planetName || "PLANET";
  const bgDefault = body.dataset.bg;
  const bgExpanded = body.dataset.bgExpanded;
  const itemImg = body.dataset.item;
  const itemLabel = body.dataset.itemName || "item";

  // Update UI with planet name and item
  document.querySelectorAll("h1").forEach(h => h.textContent = planetName);
  document.querySelectorAll(".planet-name").forEach(span => span.textContent = planetName);
  document.querySelectorAll(".item-name").forEach(span => span.textContent = itemLabel);
  item.src = itemImg;
  itemOnAlien.src = itemImg;
  background.style.backgroundImage = `url('${bgDefault}')`;

  // === Helper Functions ===
  function showScreen(index) {
    screens.forEach((screen, i) => {
      screen.style.display = i === index ? "flex" : "none";
    });

    itemBox.style.display = index === 3 ? "block" : "none";
  }

  function expandPlanet() {
    background.classList.add("planet-expanded");
    background.style.backgroundImage = `url('${bgExpanded}')`;
  }

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

  // === Button Events ===
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

  if (wearButton) {
    wearButton.addEventListener("click", () => {
      itemBox.classList.add("wear-animation");
      setTimeout(() => {
        itemOnAlien.style.opacity = 1;
        item.style.display = "none";
      }, 1400);
    });
  }

  if (leaveButton) {
    leaveButton.addEventListener("click", () => {
      spaceship.classList.remove("from-top", "park-top-left");
      spaceship.classList.add("fly-up-exit");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    });
  }

  // Initialize
  showScreen(currentScreen);
  spaceshipFlyIn();
});
