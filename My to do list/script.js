// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Get the task form and task list elements
  const taskForm = document.getElementById('task-form');
  const taskList = document.getElementById('task-list');

  // Add an event listener to the task form to handle form submission
  taskForm.addEventListener('submit', (e) => {
      // Prevent the default form submission behavior (page refresh)
      e.preventDefault();

      // Get the values from the input fields
      const taskTitle = document.getElementById('task-title').value;
      const taskDescription = document.getElementById('task-description').value;
      const taskDueDate = document.getElementById('task-due-date').value;
      const taskCategory = document.getElementById('task-category').value;

      // Create a new div element to represent the task item
      const taskItem = document.createElement('div');
      taskItem.className = 'task-item'; // Add a class for styling

      // Set the inner HTML of the task item with the task details
      taskItem.innerHTML = `
          <input type="checkbox" class="task-checkbox">
          <label>${taskTitle}</label>
          <p>${taskDescription}</p>
          <p>Due: ${taskDueDate}</p>
          <p>Category: ${taskCategory}</p>
          <div>
              <button class="edit-btn">Edit</button>
              <button class="delete-btn">Delete</button>
          </div>
      `;

      // Append the task item to the task list
      taskList.appendChild(taskItem);

      // Clear the input fields after adding the task
      document.getElementById('task-title').value = '';
      document.getElementById('task-description').value = '';
      document.getElementById('task-due-date').value = '';
      document.getElementById('task-category').value = 'work';

      // Add event listeners to the newly created task item
      addTaskListeners(taskItem);
  });

  // Function to add event listeners to the task item for edit and delete functionality
  const addTaskListeners = (taskItem) => {
      // Get the delete button and add a click event listener
      const deleteBtn = taskItem.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => {
          // Remove the task item from the task list
          taskList.removeChild(taskItem);
      });

      // Get the edit button and add a click event listener
      const editBtn = taskItem.querySelector('.edit-btn');
      editBtn.addEventListener('click', () => {
          // Implement edit functionality here
      });
  };
});
