document.getElementById('google-btn').addEventListener('click', function () {
    const Task = getInteger('navbar-task-count');
    const assignTask = getInteger('assigned-task-count');

    if (assignTask > 0) {

        alert("Board updated successfully");
        const taskCount = Task + 1;
        const assignTaskCount = assignTask - 1;

        document.getElementById('navbar-task-count').innerText = taskCount;
        document.getElementById('assigned-task-count').innerText = assignTaskCount;

        if (assignTaskCount === 0) {
            alert("Congrats! you have completed all the current task");
        }

        this.disabled = true;
    }
});