//TODO: target elements in the HTML
const userInput = document.getElementById(`newItemInput`);
const addButton = document.getElementById(`addItemButton`);
const myList = document.getElementById(`myList`);

//TODO: create a function that adds a list item each time the addItemButton is clicked
function newItem() {
  //assign the value user inputs in a constant;
  const inputText = userInput.value;
  //if the input is not blank, add the new <li> element
  if (inputText.trim() !== "") {
    const newListItem = document.createElement(`li`);
    //set the content of the new element to the input text from user
    newListItem.textContent = inputText;
    //append item to the <ul>
    myList.appendChild(newListItem);
    //reset the value in the <input>, once the child element is added
    userInput.value = "";

    //in the same way add a remove button next to the new <li>
    const removeButton = document.createElement(`button`);
    removeButton.textContent = `V`;
    newListItem.appendChild(removeButton);

    //add interactivity to it so that on click it removes the <li> item
    removeButton.addEventListener(`click`, function () {
      myList.removeChild(newListItem);
    });
  }

  // alert user if input is blank
  else {
    alert(`Error! Please write something`);
  }
}

//TODO: addEvenentListener to the addButton to run the function on click
addButton.addEventListener(`click`, newItem);

//add a feature to run the same function also in case the user presses Enter on the keypad, in input field

userInput.addEventListener(`keydown`, function (event) {
  if (event.key === `Enter`) {
    newItem();
  }
});
