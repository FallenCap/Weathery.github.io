require("dotenv").config();

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
      sunrise = response.sunrise;
      sunset = response.sunset;
      totalSun.innerHTML = Math.trunc((sunset - sunrise) / 3600);
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

// Static cities

//Sanghai
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Shanghai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    cloud_pct_San.innerHTML = response.cloud_pct;
    feels_like_San.innerHTML = response.feels_like;
    humidity_San.innerHTML = response.humidity;
    max_temp_San.innerHTML = response.max_temp;
    min_temp_San.innerHTML = response.min_temp;
    sunrise = response.sunrise;
    sunset = response.sunset;
    totalSun_San.innerHTML = Math.trunc((sunset - sunrise) / 3600);
    temp_San.innerHTML = response.temp;
    wind_speed_San.innerHTML = response.wind_speed;
    wind_degrees_San.innerHTML = response.wind_degrees;
    console.log(response);
  })
  .catch((err) => console.error(err));

//New York
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= New York",
  options
)
  .then((response) => response.json())
  .then((response) => {
    cloud_pct_New.innerHTML = response.cloud_pct;
    feels_like_New.innerHTML = response.feels_like;
    humidity_New.innerHTML = response.humidity;
    max_temp_New.innerHTML = response.max_temp;
    min_temp_New.innerHTML = response.min_temp;
    sunrise = response.sunrise;
    sunset = response.sunset;
    totalSun_New.innerHTML = Math.trunc((sunset - sunrise) / 3600);
    temp_New.innerHTML = response.temp;
    wind_speed_New.innerHTML = response.wind_speed;
    wind_degrees_New.innerHTML = response.wind_degrees;
    console.log(response);
  })
  .catch((err) => console.error(err));

//Delhi
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Delhi",
  options
)
  .then((response) => response.json())
  .then((response) => {
    cloud_pct_Del.innerHTML = response.cloud_pct;
    feels_like_Del.innerHTML = response.feels_like;
    humidity_Del.innerHTML = response.humidity;
    max_temp_Del.innerHTML = response.max_temp;
    min_temp_Del.innerHTML = response.min_temp;
    sunrise = response.sunrise;
    sunset = response.sunset;
    totalSun_Del.innerHTML = Math.trunc((sunset - sunrise) / 3600);
    temp_Del.innerHTML = response.temp;
    wind_speed_Del.innerHTML = response.wind_speed;
    wind_degrees_Del.innerHTML = response.wind_degrees;
    console.log(response);
  })
  .catch((err) => console.error(err));

//Mumbai
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Mumbai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    cloud_pct_Mum.innerHTML = response.cloud_pct;
    feels_like_Mum.innerHTML = response.feels_like;
    humidity_Mum.innerHTML = response.humidity;
    max_temp_Mum.innerHTML = response.max_temp;
    min_temp_Mum.innerHTML = response.min_temp;
    sunrise = response.sunrise;
    sunset = response.sunset;
    totalSun_Mum.innerHTML = Math.trunc((sunset - sunrise) / 3600);
    temp_Mum.innerHTML = response.temp;
    wind_speed_Mum.innerHTML = response.wind_speed;
    wind_degrees_Mum.innerHTML = response.wind_degrees;
    console.log(response);
  })
  .catch((err) => console.error(err));

//Moscow
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Moscow",
  options
)
  .then((response) => response.json())
  .then((response) => {
    cloud_pct_Mos.innerHTML = response.cloud_pct;
    feels_like_Mos.innerHTML = response.feels_like;
    humidity_Mos.innerHTML = response.humidity;
    max_temp_Mos.innerHTML = response.max_temp;
    min_temp_Mos.innerHTML = response.min_temp;
    sunrise = response.sunrise;
    sunset = response.sunset;
    totalSun_Mos.innerHTML = Math.trunc((sunset - sunrise) / 3600);
    temp_Mos.innerHTML = response.temp;
    wind_speed_Mos.innerHTML = response.wind_speed;
    wind_degrees_Mos.innerHTML = response.wind_degrees;
    console.log(response);
  })
  .catch((err) => console.error(err));

//London
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= London",
  options
)
  .then((response) => response.json())
  .then((response) => {
    cloud_pct_Lon.innerHTML = response.cloud_pct;
    feels_like_Lon.innerHTML = response.feels_like;
    humidity_Lon.innerHTML = response.humidity;
    max_temp_Lon.innerHTML = response.max_temp;
    min_temp_Lon.innerHTML = response.min_temp;
    sunrise = response.sunrise;
    sunset = response.sunset;
    totalSun_Lon.innerHTML = Math.trunc((sunset - sunrise) / 3600);
    temp_Lon.innerHTML = response.temp;
    wind_speed_Lon.innerHTML = response.wind_speed;
    wind_degrees_Lon.innerHTML = response.wind_degrees;
    console.log(response);
  })
  .catch((err) => console.error(err));
