const hoursNum = new Date().getHours();
const greeting = document.querySelector('.greeting')
const greetingName = document.querySelector('.name')

const getTimeOfDay = (num) => {
    if (num < 6) {
        return 'Good night'
    } if (num < 12) {
        return 'Good morning'
    } if (num < 18) {
        return 'Good day'
    } if (num < 24) {
        return 'Good evening'
    }
}

greeting.textContent = getTimeOfDay(hoursNum)

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        greetingName.value = localStorage.getItem('name');
    } 
}

window.addEventListener('load', getLocalStorage)

function setLocalStorage() {
    localStorage.setItem('name', greetingName.value);
}

window.addEventListener('beforeunload', setLocalStorage)


