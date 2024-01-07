//create variables that select the HTML elements we need to use for interactivity

const newItemInput = document.getElementById(`newItemInput`);
const addItemButton = document.getElementById(`addItemButton`);
const myList = document.getElementById(`myList`);

//add event listener to the button with a function to add the <li>

//first create the function
function addNewItem() {
  const newItemText = newItemInput.value;

  if (newItemText.trim() !== ``) {
    const newListItem = document.createElement(`li`);

    // Create a new <button> element for removing the list item
    const removeButton = document.createElement("button");
    removeButton.textContent = "V";
    removeButton.addEventListener("click", function () {
      myList.removeChild(newListItem); // Remove the associated <li> when the button is clicked
    });

    // Set the text of the new <li> to the input value
    newListItem.textContent = newItemText;

    // Append the remove button to the <li> element
    newListItem.appendChild(removeButton);

    //append the new list item to the <ul>
    myList.appendChild(newListItem);

    //clear the input field after adding the item
    newItemInput.value = ``;
  } else {
    alert(`Please enter a value!`);
  }
}

//then the addEventListener on click

addItemButton.addEventListener(`click`, addNewItem);

//and we can also add an event listener to the input field so that it works also if we press the enter keypress

newItemInput.addEventListener(`keypress`, function (event) {
  //check if the pressed key is enter (key code 13)
  if (event.key === `Enter`) {
    addNewItem();
  }
});

// on click create the <li> element in HTML
// for each <li> add a button to mark it as done
//after marking as done, remove it from the list

//or use a class toDoList that adds text and then removes it
