const time = document.querySelector('.time');
const date = document.querySelector('.date')

function showTime() {
    const watch = new Date();
    const options = { month: 'long', day: 'numeric', weekday: 'long' };
    const currentDate = watch.toLocaleDateString('en-US', options);
    time.textContent = watch.toLocaleTimeString();
    date.textContent = currentDate
    setTimeout(showTime, 1000);

}
showTime();
