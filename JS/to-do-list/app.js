const inputTask = document.getElementById("input-task");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
function addtask() {
    const task = inputTask.value;
    if(!task) {
        alert("Enter Your Task..")
    }
    else {
        const newTask = document.createElement("li");
        newTask.innerHTML = task + '<button class="btn-dlt">Delete</button>';
        todoList.appendChild(newTask);

        inputTask.value = "";
    }
}

todoList.addEventListener("click", function(event) {
    if(event.target.className === "btn-dlt") {
        event.target.parentElement.remove();
    }
});

//click on add buton

addButton.addEventListener("click",addtask);

// click enter to Add task
inputTask.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addtask();
    }
  });