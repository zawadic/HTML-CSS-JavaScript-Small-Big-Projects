// Selecting elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Task cannot be empty.");
    return;
  }

  // Create task item
  const li = document.createElement("li");
  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;

  li.appendChild(taskContent);

  // Add actions: Complete, Edit, Delete
  const actions = document.createElement("div");
  actions.className = "task-actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.className = "complete";
  completeBtn.onclick = () => toggleComplete(li);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = () => editTask(taskContent);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(actions);

  taskList.appendChild(li);
  taskInput.value = "";
}

// Toggle Complete
function toggleComplete(task) {
  task.classList.toggle("completed");
}

// Edit Task
function editTask(taskContent) {
  const newTaskText = prompt("Edit your task:", taskContent.textContent);
  if (newTaskText !== null && newTaskText.trim() !== "") {
    taskContent.textContent = newTaskText.trim();
  }
}
