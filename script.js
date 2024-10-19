const apiKey = 'be9a0f0ce91ed79cb809d35e1c88e7a1';  // Replace with your OpenWeatherMap API key

document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        getWeather(city);
    }
});

function getWeather(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const cityName = document.getElementById('cityName');
    const weatherDesc = document.getElementById('weatherDesc');
    const temp = document.getElementById('temp');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    cityName.textContent = data.name;
    weatherDesc.textContent = data.weather[0].description;
    temp.textContent = `Temperature: ${data.main.temp}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    document.getElementById('weatherInfo').style.display = 'block';
}
