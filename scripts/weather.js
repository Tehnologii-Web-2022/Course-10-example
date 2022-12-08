const locationForm = document.querySelector('#locationInput');

const APP_KEY = '8808c6baf9d0847b26e708dac70f0195';

locationForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const latitudeInput = locationForm.querySelector('#latitude');
    const longitudeInput = locationForm.querySelector("#longitude");

    const location = {
        latitude: latitudeInput.value,
        longitude: longitudeInput.value,
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${APP_KEY}&lang=ro&units=metric`;


    const weatherResponse = await fetch(url);

    const weatherJson = await weatherResponse.json();

    console.log(weatherJson);


    const responseContainer = document.querySelector('#weatherAtLocation');

    responseContainer.innerHTML = '';

    const locationSpan = document.createElement('span');
    locationSpan.innerText = weatherJson.name + ": ";

    responseContainer.appendChild(locationSpan);

    const temperatureSpan = document.createElement('span');
    temperatureSpan.innerText = weatherJson.main.temp;

    responseContainer.appendChild(temperatureSpan);

});