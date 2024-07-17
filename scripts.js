function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = document.getElementById('task-list');

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div class="actions">
                <button onclick="editTask(this)">Edit</button>
                <button onclick="deleteTask(this)">Delete</button>
                <button onclick="markCompleted(this)">Complete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const span = li.querySelector('span');
    const newTaskText = prompt('Edit your task', span.textContent);
    if (newTaskText !== null && newTaskText.trim()) {
        span.textContent = newTaskText.trim();
    }
}

function markCompleted(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('completed');
}
