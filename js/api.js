const $ = (selector) => document.querySelector(selector)

const apiKey = '8176b90cad5b182e9a15815da8e6bbfd'

const getMain = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let longitude = position.coords.longitude;
            let latitude = position.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
            console.log(url)

            fetch(`${url}`)
                .then((res) => res.json())
                .then((data) => showDataMain(data.main))
        })
    }
}


const showDataMain=({temp, temp_max, temp_min, humidity, feels_like})=>{
    $('#temp-container').innerHTML = `<div class="box is-flex temperature m-4"><p>${temp}°C </p><i class="fa-solid fa-temperature-three-quarters px-3"></i></div>`
    $('#temp-min').innerHTML = `<div class="box temp-min-max ml-4 mt-2 py-5"><i class="fa-solid fa-temperature-arrow-down px-3"></i><p>${temp_min}°C </p><p class="text">Temperatura mínima</p></div>`
    $('#temp-max').innerHTML = `<div class="box temp-min-max mr-4 mt-2 py-5"><i class="fa-solid fa-temperature-arrow-up px-3"></i><p>${temp_max}°C </p><p class="text">Temperatura máxima</p></div>`
    $('#humidity').innerHTML = `<div class="box temp-min-max ml-4 mb-2 py-5"><i class="fa-solid fa-droplet px-3"></i><p>${humidity}% </p><p class="text">Humedad</p></div>`
    $('#feels-like').innerHTML = `<div class="box temp-min-max mr-4 mb-2 py-5"><i class="fa-solid fa-temperature-half px-3"></i><p>${feels_like}% </p><p class="text">Sensación térmica</p></div>`
}
const getName = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let longitude = position.coords.longitude;
            let latitude = position.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
            console.log(url)

            fetch(`${url}`)
                .then((res) => res.json())
                .then((data) => showDataName(data.name))
        })
    }
}


const showDataName=(name)=>{
    $('#location-container').innerHTML = `<div class="box is-flex location m-4"><p>${name}</p>
    <select><option>Elija una opción...</option></select></div>`
}

window= getMain(), getName()