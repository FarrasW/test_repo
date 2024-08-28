const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllTasksBtn = document.getElementById("clearAllTasksBtn");
let tasks = [];

function addTask() {
    // Get the value from the input field
    const taskText = taskInput.value.trim();

    // Ensure the task value is not empty
    if (taskText !== "") {
        // Add the new task to the tasks array
        tasks.push({ text: taskText});

        // Clear the input field
        taskInput.value = "";

        // Display the updated tasks list
        displayTasks();
    }
}

function displayTasks() {
    // Clear content within taskList
            taskList.innerHTML = ""; // innerHTML is set to empty
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
                li.querySelector("input").addEventListener("change", () => toggleTask(index));
                taskList.appendChild(li);
            });
        }

function toggleTask(index) { // Toggles the completion status of a specific task in the array
            tasks[index].completed = !tasks[index].completed;
            displayTasks();
        }

function clearCompletedTasks() {
            // Filter out completed tasks
            tasks = tasks.filter(task => !task.completed);
        
            // Display the updated tasks list
            displayTasks();
        }

function clearAllTasks() {
    while (tasks.length) {

        // Remove elements from array
        tasks.pop();
    }

    // Display the updated tasks list
    displayTasks();
}

// Add event listeners to the buttons
addTaskBtn.addEventListener("click", addTask);
displayTasks();
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllTasksBtn.addEventListener("click", clearAllTasks);
