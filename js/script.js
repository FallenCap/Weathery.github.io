const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e4501c6238msh7669aa551e0b892p168141jsn1d852d1bdbc2",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      console.log(response);
    })
    .catch((err) => console.error(err));
};

search.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Kolkata");
