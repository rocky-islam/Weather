const API_Key = `9f0790eb423d4a2b002f671357fff7d3`;
// let city = rajshahi;

const weather = (city) =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`)
        .then(res => res.json())
        .then(data => displayTemperature (data))

}

const displayTemperature = data =>{
    const temperature = document.getElementById('temp');
    const lead = document.getElementById('lead')
    temperature.innerText = data.main.temp;
    lead.innerText = data.weather[0].main;
    console.log(data.weather[0].main);
}

document.getElementById('btn-search').addEventListener('click', ()=>{
    const city = document.getElementById('search-field');
    const cityName = document.getElementById('city-name');
    const cityValue =city.value;
    cityName.innerText = cityValue;
    weather(cityValue);
})
// weather()