tasks = [];

// Constructor
function Task(name) {
  this.name = name;
  this.isDone = false;
}

function addToArray(name) {
  createdTask = new Task(name);
  tasks.push(createdTask);
  console.log(tasks);
  displayBlocks();
}

function displayBlocks() {
  const block = document.getElementById("blocks");
  block.innerHTML = "";

  tasks.forEach((task, taskIndex) => {
    li = createToDoItem(task, taskIndex);
    block.append(li);
  });
}

function createToDoItem(task, taskIndex) {
  const todoLi = document.createElement("li");
  todoLi.className = "list";
  todoLi.innerHTML = `<input type="checkbox" id="toDo${taskIndex}" />
          <label class="customCheckbox" for="toDo${taskIndex}">
            <svg
              fill="transparent"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -1000 800 800"
              width="24px"
              fill="#fffff"
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
          </label>
          <label for="toDo${taskIndex}" class="inputText">${task.name}</label>
          <button class="delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fffff"
            >
              <path
                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
              />
            </svg>
          </button>
        </li>`;

  return todoLi;
}

// Input from form
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("toDoInput").value;

  addToArray(name);

  document.getElementById("toDoInput").value = "";
});
