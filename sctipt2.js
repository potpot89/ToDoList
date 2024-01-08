// 1-create variables to store the targeted elements from the HTML

//input text from user
const newItemInput = document.getElementById("newItemInput");
//press of the add button
const addItemButton = document.getElementById("addItemButton");
//ul
const myList = document.getElementById("myList");

// 2- add an event listener to the button so that it creates a new <li> in the <ul> with the text written by user in the input

//create the function first
function addNewItem() {
  //fetch user's input
  const newItemText = newItemInput.value;
  //create new item if user's input is not blank
  if (newItemText.trim() !== ``) {
    const newListItem = document.createElement(`li`);
    newListItem.textContent = newItemText;

    //add a remove button next to the new <li> item
    const removeButton = document.createElement(`button`);
    removeButton.textContent = `V`;
    //add EventListener with its own function directly, for the remove button
    removeButton.addEventListener(`click`, function () {
      myList.removeChild(newListItem);
    });

    //append children both for <li> and for the removeButton
    myList.appendChild(newListItem);
    newListItem.appendChild(removeButton);

    //clear the input field after adding the children
    newItemInput.value = "";
  }
  //give an alert if input is blank
  else {
    alert(`Error! No valid input.`);
  }
}

//add EventListener to the addButton
addItemButton.addEventListener(`click`, addNewItem);

//add the feature for user to input text directly using the enter key, besides clicking pon button

newItemInput.addEventListener(`keydown`, function (event) {
  if (event.key === `Enter`) {
    addNewItem();
  }
});
