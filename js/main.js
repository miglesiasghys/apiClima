const $ = (selector) => document.querySelector(selector)

const showData=({main, name})=>{
    $('#temp-container').innerHTML = `<div class="box is-flex temperature m-4"><p>${main.temp}°C </p><i class="fa-solid fa-temperature-three-quarters px-3"></i></div>`
    $('#temp-min').innerHTML = `<div class="box temp-min-max ml-4 mt-2 py-5"><i class="fa-solid fa-temperature-arrow-down px-3"></i><p>${main.temp_min}°C </p><p class="text">Temperatura mínima</p></div>`
    $('#temp-max').innerHTML = `<div class="box temp-min-max mr-4 mt-2 py-5"><i class="fa-solid fa-temperature-arrow-up px-3"></i><p>${main.temp_max}°C </p><p class="text">Temperatura máxima</p></div>`
    $('#humidity').innerHTML = `<div class="box temp-min-max ml-4 mb-2 py-5"><i class="fa-solid fa-droplet px-3"></i><p>${main.humidity}% </p><p class="text">Humedad</p></div>`
    $('#feels-like').innerHTML = `<div class="box temp-min-max mr-4 mb-2 py-5"><i class="fa-solid fa-temperature-half px-3"></i><p>${main.feels_like}% </p><p class="text">Sensación térmica</p></div>`
    $('#location-container').innerHTML = `<div class="box is-flex location m-4"><p>${name}</p>
    </div>`
}

const showCity=()=>{
    let city=$('#select-input').value
    console.log(city)
    //getFilterCity(new URLSearchParams(city).toString())
}

$('#btn-select').addEventListener('click', ()=>showCity())