document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('task-input');
    const button = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = input.value.trim();
        if (taskText === '') return;

        // Create new list item
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        // Create task text element
        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskItem.remove();
        });

        // Create update button
        const updateButton = document.createElement('button');
        updateButton.className = 'update-button'; // Add class for styling
        updateButton.textContent = 'Update';
        updateButton.addEventListener('click', () => {
            const newTaskText = prompt('Update task:', taskTextElement.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskTextElement.textContent = newTaskText.trim();
            }
        });

        // Append elements to the list item
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(updateButton);
        taskItem.appendChild(deleteButton);

        // Append list item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        input.value = '';
    }

    button.addEventListener('click', addTask);

    // Allow pressing Enter to add task
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
