document.getElementById('meta-btn').addEventListener('click', function(){

let now = new Date();
let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

const assigntask = document.getElementById('assigned-task-count').innerText;   
const assignTask = parseInt(assigntask);

if (assignTask <= 6) {
    const taskTitle = document.getElementById('taskTitle4').innerText;
    const container = document.getElementById('activity-container')
    const p = document.createElement("p");
    p.innerText = `You have Complete The Task ${taskTitle} at ${currentTime}`;
    container.appendChild(p).style.padding  = "10px";
}
},
{ once: true }
);