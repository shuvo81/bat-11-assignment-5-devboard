function getCurrentDayAndDate() {
    const today = new Date();

    const dayOptions = { weekday: 'long' };
    const day = today.toLocaleDateString('en-US', dayOptions);

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = today.toLocaleDateString('en-US', dateOptions); // forces Month Day, Year

    document.getElementById('today-day').textContent = day;
    document.getElementById('today-date').textContent = date;
}

getCurrentDayAndDate();




// function getCurrentDayAndDate() {
//     const today = new Date();

//     const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

//     const day = days[today.getDay()];
//     const date = `${months[today.getMonth()]} ${today.getDate()} ${today.getFullYear()}`;

//     document.getElementById('today-day').textContent = day;
//     document.getElementById('today-date').textContent = date;
// }

// getCurrentDayAndDate();

