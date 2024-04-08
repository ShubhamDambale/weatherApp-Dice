function getForecastSummary() {
    const city = document.getElementById('cityInput').value;
    fetch(`http://localhost:8080/forecast-summary?city=${city}`)
        .then(response => response.json())
        .then(data => {
            displayResult(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function getHourlyForecast() {
    const city = document.getElementById('cityInput').value;
    fetch(`http://localhost:8080/hourly-forecast?city=${city}`)
        .then(response => response.json())
        .then(data => {
            displayResult(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayResult(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = JSON.stringify(data, null, 2);
}
