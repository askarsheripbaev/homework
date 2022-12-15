const searchInput = document.querySelector('.input')
const textSublime = document.querySelector('.text')
const hide = document.querySelector('.finish')
const errorCatch = document.querySelector('.error')
const searchCountry = document.querySelector('.country')
const searchDate = document.querySelector('.date')
const searchTime = document.querySelector('.time')
const searchIcon = document.querySelector('.icon')
const searchNumber = document.querySelector('.number')
const searchWeather = document.querySelector('.sun')
const searchFeels = document.querySelector('.feelslike')
const searchHumidity = document.querySelector('.humidity')
const searchWind = document.querySelector('.wind')

const API = {
    key: "9afde3f439ba4858ad393024221412",
    base: "http://api.weatherapi.com/v1/current.json"
}
getCurrentDate()
function getCurrentDate(date){
    let dateNow = new Date(date).toLocaleString('en-us',{month:'long', day:'numeric', year:'numeric', weekday:'long'})
    return dateNow
}

searchInput.addEventListener('keypress', function (event) {
     if (event.keyCode === 13 && event.target.value){
        let query = `${event.target.value}`
        try {
                async function getWeather() {
                    const response = await fetch(`${API.base}?key=${API.key}&q=${query}`)
                    const data = await response.json()
                    const result = await data
                    console.log(result);

                    const value = data.location
                    const valute = data.current
                    textSublime.style.display = 'none'
                    hide.style.display = 'flex'
                    searchCountry.textContent = value.name + ' ' +  value.country
                    // searchDate
                    searchTime.textContent = value.localtime
                    searchDate.textContent = getCurrentDate(value.localtime.split(' ').shift())
                    searchIcon.src = `https://${data.current.condition.icon}` 
                    searchNumber.textContent = valute.temp_c + "°C"
                    searchWeather.textContent = valute.condition.text
                    searchFeels.textContent = "Feels like: " + valute.feelslike_c
                    searchHumidity.textContent = "Humidity: " + valute.humidity + "%"
                    searchWind.textContent = "Wind: " + valute.wind_kph + "kph"
                }
        getWeather();
        } catch {
            hide.style.display = 'none'
            textSublime.style.display = 'none'
            errorCatch.style.display = 'No mathcing location found'  
            console.log('Error catch')  
            getWeather()
        }
    
    }})
    // searchInput.addEventListener('change', () => {
    //     if (getWeather(searchInput.value)) {
    //         searchInput.textContent = "Вы ввели не число"
    //     } else {
    //         searchInput.textContent = 0
    //     }
    // })



// function setDefault () {
//     searchInput.value = ''
// }

//°········°°°°

// searchCountry = result.location.name.region.country
// rates.EUR = result.Valute.EUR