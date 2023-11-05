const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const inputCity = document.querySelector('.city')
const weatherError = document.querySelector('.weather-error')

const renderWeather = (data) => {
    weatherError.textContent = ''
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${(data.main.temp).toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${(data.wind.speed).toFixed(0)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
}

const errorWeather = (city) => {
    weatherError.textContent = `Error! city not found for '${city}'!`;
    weatherIcon.className = 'weather-icon owf';
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
}

async function getWeather(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=b840a0bd0069942bd7b12a2f58f18778&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        renderWeather(data)
    } catch (error) {
        errorWeather(city)
    }
}

inputCity.value = 'Minsk'
getWeather('Minsk')


inputCity.addEventListener('keyup', () => {
    localStorage.setItem('city', inputCity.value);
})

inputCity.addEventListener('change', () => {
    getWeather(inputCity.value) 
    localStorage.setItem('city', inputCity.value);
})

function getLocalStorage() {
    if (localStorage.getItem('city')) {
        inputCity.value = localStorage.getItem('city');
        getWeather(inputCity.value)
    }
}

window.addEventListener('load', getLocalStorage)
window.addEventListener('beforeunload', setLocalStorage)