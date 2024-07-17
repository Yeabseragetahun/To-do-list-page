document.addEventListener('DOMContentLoaded', () => {
    const newTaskForm = document.getElementById('new-task-form');
    const newTaskInput = document.getElementById('new-task-input');
    const tasksList = document.getElementById('tasks-list');

    newTaskForm.addEventListener('submit', e => {
        e.preventDefault();
        addTask(newTaskInput.value);
        newTaskInput.value = '';
    });

    function addTask(task) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task');
        taskSpan.innerText = task;

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', () => editTask(taskSpan));

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(taskItem));

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete');
        completeButton.innerText = 'Complete';
        completeButton.addEventListener('click', () => completeTask(taskSpan));

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        tasksList.appendChild(taskItem);
    }

    function editTask(task) {
        const newTask = prompt('Edit your task:', task.innerText);
        if (newTask) {
            task.innerText = newTask;
        }
    }

    function deleteTask(task) {
        tasksList.removeChild(task);
    }

    function completeTask(task) {
        task.classList.toggle('completed');
    }
});
