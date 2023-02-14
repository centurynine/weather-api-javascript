const container = document.querySelector('.container');
const search = document.querySelector('.search-box');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const weatherError = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const API = '7a1c7eb2aa9098c4fa28542c50cd383d';
    const city = document.querySelector('.search-box input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;

    if(city === '')
        return;

    fetch(url)
    .then(response => response.json())
    .then(json => {

        if (json.cod === '404') {
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            weatherError.style.display = 'block';
            weatherError.classList.add('fadeIn');
            return;
        }
            weatherError.style.display = 'none';
            weatherError.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const humidity = document.querySelector('.weather-box .humidity span');
            const description = document.querySelector('.weather-box .description');
            const wind = document.querySelector('.weather-box .wind');
            
            switch(data.weather[0].main){
                case 'Clouds':
                    image.src = 'https://img.icons8.com/color/96/000000/cloud.png';
                    break;
                case 'Clear':
                    image.src = 'https://img.icons8.com/color/96/000000/sun.png';
                    break;
                case 'Rain':
                    image.src = 'https://img.icons8.com/color/96/000000/rain.png';
                    break;
                case 'Snow':
                    image.src = 'https://img.icons8.com/color/96/000000/snow.png';
                    break;
                case 'Thunderstorm':
                    image.src = 'https://img.icons8.com/color/96/000000/thunderstorm.png';
                    break;
                case 'Drizzle':

        }
    }).catch(err => {

        console.log(err);
    });
});