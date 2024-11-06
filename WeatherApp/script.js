let inputBox = document.querySelector('.input-box')
let searchBtn = document.querySelector('#search-btn')
let WeatherImg = document.querySelector('.weather-img')
let temperature = document.querySelector('.temperature')
let description = document.querySelector('.description');
let humidity = document.querySelector('#humidity');
let windSpeed = document.querySelector('#wind-speed');
let locationNotFound = document.querySelector('.location-not-found');
let weatherBody = document.querySelector('.weather-body');


async function checkWeather(city) {
    const api_key = "59084dafe11647e597248be7121514a5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod === `404`) {
        locationNotFound.style.display = "flex";
        weatherBody.style.display = "none";
        console.log("error");
        return;
    }
    else {
        console.log("Location found, displaying weather data");
        locationNotFound.style.display = "none";
        weatherBody.style.display = "flex"
    }

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}<sup>°C</sup>`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main) {
        case 'Clouds':
            WeatherImg.src = "assets/cloud.png";
            break;

        case 'Clear':
            WeatherImg.src = "assets/clear.png";
            break;

        case 'Mist':
            WeatherImg.src = "assets/mist.png";
            break;

        case 'Rain':
            WeatherImg.src = "assets/rain.png";
            break;

        case 'Snow':
            WeatherImg.src = "assets/snow.png";
            break;
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
