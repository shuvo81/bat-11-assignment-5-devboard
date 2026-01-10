document.getElementById('shopEase-btn').addEventListener('click', function() {
    
    alert("Board updated successfully");

    const Task = getInteger('navbar-task-count');
    const assignTask = getInteger('assigned-task-count');
    const taskCount = Task + 1;
    const assignTaskCount = assignTask - 1;

    document.getElementById('navbar-task-count').innerText = taskCount;
    document.getElementById('assigned-task-count').innerText = assignTaskCount; 

    this.disabled = true; 

}, 
{ once: true });