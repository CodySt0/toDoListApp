// Add a todo

//Access the button element

const button = document.getElementById("add-todo");
console.log(button);
//Function to run when the button is clicked
function handleAddTodo() {
  const ul = document.querySelector("ul"); //acessing and element
  console.log(ul);
  //create an li to go into my unordered list
  const li = document.createElement("li"); //creating a new element
  console.log("created list item", li);
  //access the input element
  const input = document.querySelector("input");
  console.log(input.value);
  //set the input text to my list item text
  li.textContent = input.value;
  console.log(li);
  //append(add) my list item to my unordered lists
  //( as a child element)
  ul.appendChild(li);
}
// add an event listener to my button
button.addEventListener("click", handleAddTodo);
