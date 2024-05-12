// A simple script to handle the to do list
        // Get the elements from the document
        var taskList = document.getElementById("task-list");
        var taskForm = document.getElementById("task-form");
        var taskInput = document.getElementById("task-input");
        var taskSubmit = document.getElementById("task-submit");

        // A function to add a task
        function addTask(event) {
            // Prevent the default form submission
            event.preventDefault();
            // Get the value of the input
            var task = taskInput.value;
            // Check if the input is not empty
            if (task) {
                // Create a new list item
                var li = document.createElement("li");
                // Set the text of the list item
                li.textContent = task;
                // Append the list item to the task list
                taskList.appendChild(li);
                // Clear the input value
                taskInput.value = "";
            }
        }

        // Add an event listener to the form submit button
        taskForm.addEventListener("submit", addTask);
