function showWeatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '58e933a774d9ad59a3919cac89bb74b8'; // Replace your actual API key

    // Fetch latitude and longitude for the given city
    const geocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    
    fetch(geocodeUrl) 
        .then(response => response.json())
        .then(locationData => {
            if (locationData.length === 0) {
                throw new Error('City not found');
            }
            const { lat, lon } = locationData[0];
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            return fetch(apiUrl);
        })
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                     <p>Temperature: ${data.main.temp} &#8451;</p>
                                     <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);