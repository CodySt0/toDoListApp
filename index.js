// Add a todo

//Access the button element

const button = document.getElementById("add-todo");
console.log(button);
//Function to run when the button is clicked
function handleAddTodo() {
  console.log("button is clicked!");
}
// add an event listener to my button
button.addEventListener("click", handleAddToDo);
