const apiKey = '8176b90cad5b182e9a15815da8e6bbfd'

const getData = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let longitude = position.coords.longitude;
            let latitude = position.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
            console.log(url)

            fetch(`${url}`)
                .then((res) => res.json())
                .then((data) => showData(data))
        })
    }
}

const getFilterCity = (city)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data)=> console.log(data.name))
}


window= getData()