const searchForm = document.getElementById('location-search');
searchForm.addEventListener('submit', async event => {
    event.preventDefault();  // Stop page reload
    searchForm.querySelector('button').disabled = true;  // Disable form submit

    try {
        const formData = new FormData(event.target);
        const weatherData = await fetchWeatherData(formData.get('location'));

        if (weatherData) {
            displayWeatherData(weatherData);
        } else {
            alert('Something went wrong!');
        }
    } finally {
        searchForm.querySelector('button').disabled = false;  // Re-enable form submit
    }
});

async function fetchWeatherData(location) {
    try {
        const params = new URLSearchParams();
        params.append('key', 'ALVPKRF66EGEQCVHL899P5LDP');
        const request = new Request(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?${params}`);
        
        const response = await fetch(request);
        if (!response.ok) throw Error('Could not fetch weather data');  // Check that fetch worked

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error(error);
        return null;
    }
}

function displayWeatherData(weatherData) {
    console.log(weatherData);
}