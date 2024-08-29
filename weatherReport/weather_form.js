function showWeatherDetails(event) {
    event.preventDefault();
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiKey = '58e933a774d9ad59a3919cac89bb74b8'; // Replace 'YOUR_API_KEY' with your actual API key

    console.log('Latitude:', lat); // Debugging line
    console.log('Longitude:', lon); // Debugging line

    // Fetch weather data for the given latitude and longitude
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    console.log('API URL:', apiUrl); // Debugging line

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('API Response:', data); // Debugging line
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