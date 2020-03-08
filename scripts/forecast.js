const key = 'b0AzO7b4PZ7ykA8KhlvwWaRss93pHBih'

//Get weather information
const getWeather = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const query = `${id}?apikey=${key}`

  const response = await fetch(base + query)
  const data = await response.json();
  return data[0]
}

//Get city key
const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${key}&q=${city}`

  const response = await fetch(base + query)
  const data = await response.json()

  return data[0]
}

// getCity('London')
//     .then(data => {
//         return getWeather(data.Key)
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => console.log(error))