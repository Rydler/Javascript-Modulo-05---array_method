const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const total = document.getElementById('total')
const check = document.getElementById('check')
let contador = 0
let tasks = [];
    

function addTask() {
    const taskName = taskInput.value.trim();
    
    if (taskName === '') return;

    const task = {
        id: Date.now(),
        name: taskName,
        completed: false
    };

    tasks.push(task);
    renderTask(task);
    taskInput.value = '';
}

function renderTask(task) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
    <span>${task.id}</span>
    <span>${task.name}</span>
    <input type="checkbox" onchange="toggleComplete(${task.id})" ${task.completed ? 'checked' : ''}>
    <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>`
    counttask();
    
    if (task.completed) {
        taskItem.classList.add('completed');
    }
        taskList.appendChild(taskItem);
}


function counttask(){
    total.innerHTML = `Total: ${tasks.length}`
}


function countcheck(){
    tasks.forEach((task) => {
        if (task.completed == true){
            contador = contador + 1
        }
        check.innerHTML = `Realizadas: ${contador}`
    })
    contador = 0
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
    counttask();
}

function toggleComplete(id) {
    tasks = tasks.map(task => {
    if (task.id === id) {
        return { ...task, completed: !task.completed };
    }
    return task;
    });
  
    countcheck();
    renderTasks();
}

  
function renderTasks(filteredTasks = tasks) {
    taskList.innerHTML = '';
    filteredTasks.forEach(task => renderTask(task));
}