document.addEventListener("DOMContentLoaded", function () {
  let currentScreen = 0;
  const screens = document.querySelectorAll(".screen");
  const nextButtons = document.querySelectorAll(".btn-next");

  let selectedAlien = '';
  let explorerName = '';

  function showScreen(index) {
    screens.forEach((screen, i) => {
      screen.style.display = i === index ? "flex" : "none";
    });
  }

  window.selectAlien = function (img, element) {
    selectedAlien = img;
    document.querySelectorAll('.alien-select img').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
  };

  function nextScreen() {
    currentScreen++;
    showScreen(currentScreen);
  }

  function confirmAlien() {
    const nameInput = document.getElementById('explorerName');
    const name = nameInput.value.trim();

    if (!selectedAlien || !name) {
      alert("Please pick an alien and enter a name!");
      return;
    }

    explorerName = name;

    // Update text
    document.getElementById('greetingText').innerText =
      `“HELLO HUMAN, I’M ${explorerName.toUpperCase()}, WITH YOUR HELP, I KNOW WE WILL FIND A NEW PLANET FOR MY KIND!”`;

    // Show selected alien image
    document.getElementById('selectedAlien').innerHTML =
      `<img src="images/${selectedAlien}" style="width: 120px;">`;

    nextScreen();
  }

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest(".screen");

      // If screen contains the name input, run confirmAlien()
      if (parent.querySelector("#explorerName")) {
        confirmAlien();
      } else {
        nextScreen();
      }
    });
  });

  showScreen(currentScreen);
});
