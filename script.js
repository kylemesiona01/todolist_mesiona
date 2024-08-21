document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('task-input');
    const button = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = input.value.trim();
        if (taskText === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Task cannot be empty!',
            });
            return;
        }
       
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Task completly adedd!",
            showConfirmButton: false,
            timer: 1500
          });
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item d-flex justify-content-between align-items-center p-2';

        
        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;

       
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            Swal.fire({
                title: 'Are you sure?',
                text: 'This task will be permanently deleted!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    taskItem.remove();
                    Swal.fire(
                        'Deleted!',
                        'Your task has been deleted.',
                        'success'
                    );
                }
            });
        });

        
        const updateButton = document.createElement('button');
        updateButton.className = 'btn btn-warning btn-sm';
        updateButton.textContent = 'Update';
        updateButton.addEventListener('click', () => {
            Swal.fire({
                title: 'Update task',
                input: 'text',
                inputValue: taskTextElement.textContent,
                showCancelButton: true,
                confirmButtonText: 'Update',
                
                cancelButtonText: 'Cancel',
                inputValidator: (value) => {
                    if (!value) {
                        return 'You need to write something!';
                    }
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    if (result.value !== taskTextElement.textContent) {
                        taskTextElement.textContent = result.value;
                        Swal.fire(
                            'Updated!',
                            'Changes applied to the current task',
                            'success'
                        );
                }
                

                
            }
            });
        });
        
        
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(updateButton);
        taskItem.appendChild(deleteButton);

       
        taskList.appendChild(taskItem);

        
        input.value = '';
    }

    button.addEventListener('click', addTask);

    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
