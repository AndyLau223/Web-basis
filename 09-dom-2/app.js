let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked!";
  console.log("clicked!!!!!");
}

paragraphElement.addEventListener("click", changeParagraphText());

let inputElement = document.querySelector("input");

function retrievedUserInput(event) {
  // get the value of input form

  // let enteredText = inputElement.value;
  // let enteredText = event.target.value;
  // let enteredText = event.data; ==> this is different!
  let enteredText = event.target.value; // best practices!(get rid of external objects)
  console.log(enteredText);
}

inputElement.addEventListener("input", retrievedUserInput);
