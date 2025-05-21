document.addEventListener("DOMContentLoaded", function () {
  // keeps track of what screen we're on
  let currentScreen = 0;
  const screens = document.querySelectorAll(".screen");
  const nextButtons = document.querySelectorAll(".btn-next");

  // stores which alien you picked + the name you typed
  let selectedAlien = '';
  let explorerName = '';

  // grabs the explosion image element
  const explosion = document.getElementById('explosionEffect');

  // this shows the current screen and hides the others
  function showScreen(index) {
    screens.forEach((screen, i) => {
      screen.style.display = i === index ? "flex" : "none";
    });
  }

  // this runs when you click an alien image
  window.selectAlien = function (img, element) {
    selectedAlien = img;

    // unselect the others
    document.querySelectorAll('.alien-select img').forEach(el => el.classList.remove('selected'));

    // highlight the one you picked
    element.classList.add('selected');
  };

  // move forward to the next screen
  function nextScreen() {
    currentScreen++;
    showScreen(currentScreen);
  }

  // this runs when you're on the name input screen and hit NEXT
  function confirmAlien() {
    const nameInput = document.getElementById('explorerName');
    const name = nameInput.value.trim();

    if (!selectedAlien || !name) {
      alert("Please pick an alien and enter a name!");
      return;
    }

    explorerName = name;

    const alienNumber = selectedAlien.match(/\d+/)?.[0];
    const spaceshipImage = `AlienSpaceship${alienNumber}.png`;

    localStorage.setItem('selectedAlien', selectedAlien);
    localStorage.setItem('selectedSpaceship', spaceshipImage);

    document.getElementById('greetingText').innerText =
      `“Hello human, I’m ${explorerName}, with your help, I know we will find a new planet for my kind!”`;

    document.getElementById('selectedAlien').innerHTML =
      `<img id="selectedAlienImg" src="images/${spaceshipImage}" alt="Spaceship" />`;

    nextScreen();
  }

  // runs when any NEXT button is clicked
  nextButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const parent = button.closest(".screen");

      // if you're on the alien name screen
      if (parent.querySelector("#explorerName")) {
        confirmAlien();

      // if you're on the first screen, trigger explosion before switching
      } else if (currentScreen === 0) {
        explosion.style.width = "100px";
        explosion.style.opacity = "1";
        explosion.style.transform = "translate(-50%, -50%) scale(500)";

        setTimeout(() => {
        explosion.style.opacity = "1";
        explosion.style.transform = "scale(0)";
        explosion.style.width = "0";
        nextScreen();
      }, 1000); // match the fade-out duration


      // all other screens just go forward normally
      } else {
        nextScreen();
      }
    });
  });

  // show the first screen when the page loads
  showScreen(currentScreen);
});
