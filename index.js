
const addButton = document.getElementById('add-button');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
    const taskValue = todoInput.value.trim();
    if (taskValue) {
        const listItem = document.createElement('li');
        listItem.textContent = taskValue;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'; 
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        todoInput.value = ''; 
    }
});

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addButton.click();
    }
});
