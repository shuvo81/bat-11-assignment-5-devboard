document.getElementById('shopEase-btn').addEventListener('click', function(){
   
    alert("Board updated successfully");
    // const task = document.getElementById('navbar-task-count').innerText;    
    // const assigntask = document.getElementById('assigned-task-count').innerText;    
    
    // const Task =parseInt(task);
    // const assignTask = parseInt(assigntask);


    const Task = getInteger('navbar-task-count');
    const assignTask = getInteger('assigned-task-count');
    const taskCount = Task + 1;
    const assignTaskCount = assignTask - 1;


    document.getElementById('navbar-task-count').innerText = taskCount;
    document.getElementById('assigned-task-count').innerText = assignTaskCount; 
    
},
{ once: true }
);


