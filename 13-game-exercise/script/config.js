function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // + '1' ==> 1 as a number
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  // prevent button default behaviour that's to submit data to server.
  // means the page doesn't reload.
  event.preventDefault();
  const formData = new FormData(event.target); // put the font element into formData
  const enteredPlayerName = formData.get("playername").trim(); // key/value

  //validation

  if (!enteredPlayerName) {
    // enteredPlayName === ''
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name";
    return;
  }

  const updatePlayerDataElement = document.getElementById(
    "play-" + editedPlayer + "-data"
  );

  updatePlayerDataElement.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;
  closePlayerConfig();
}


