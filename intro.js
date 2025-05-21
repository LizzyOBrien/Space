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

  // When an alien image is clicked, store its file name and visually highlight it
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

  // Get the number from the selected alien image name (e.g., "alien3.png" → "3")
  const alienNumber = selectedAlien.match(/\d+/)?.[0];
  const spaceshipImage = `AlienSpaceship${alienNumber}.png`;

  // ✅ Save alien + spaceship image names for the next page
  localStorage.setItem('selectedAlien', selectedAlien);
  localStorage.setItem('selectedSpaceship', spaceshipImage);

  // Update the greeting message with the explorer's name
  document.getElementById('greetingText').innerText =
    `“Hello human, I’m ${explorerName}, with your help, I know we will find a new planet for my kind!”`;

  // Show the corresponding spaceship image (no alien image)
 document.getElementById('selectedAlien').innerHTML =
  `<img id="selectedAlienImg" src="images/${spaceshipImage}" alt="Spaceship" />`;


  nextScreen();
}


  // Handle button clicks: either move to the next screen or confirm alien info
  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest(".screen");

      if (parent.querySelector("#explorerName")) {
        confirmAlien();
      } else {
        nextScreen();
      }
    });
  });

  showScreen(currentScreen);
});
