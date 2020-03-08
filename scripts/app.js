const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const detail = document.querySelector('.details')
const time = document.querySelector('.time')
const icon = document.querySelector('.icon img')

const UpdateUI = (data) => {

  const { cityDetails, weatherDetails } = data

  detail.innerHTML = `
    <div class="text-muted text-uppercase text-center details">
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weatherDetails.WeatherText}</div>
        <div class="display-4 my-4">
        <span>${weatherDetails.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>
    </div>
  `
  const iconSrc = `img/icons/${weatherDetails.WeatherIcon}.svg`
  icon.setAttribute('src', iconSrc)
  
  weatherDetails.IsDayTime ? time.setAttribute('src', 'img/day.svg') : time.setAttribute('src', 'img/night.svg')

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
}

const updateCity = async (city) => {

  const cityDetails = await getCity(city)
  const weatherDetails = await getWeather(cityDetails.Key)

  return { cityDetails, weatherDetails }
}

cityForm.addEventListener('submit', e => {

  e.preventDefault()

  const city = cityForm.city.value
  cityForm.reset()

  updateCity(city)
    .then(data => UpdateUI(data))
    .catch(error => console.log(error))
})