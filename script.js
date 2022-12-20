const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f3406c6821msh2fa68add0b4e80ap185e22jsn627f095b5cc5",
    "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Kolkata",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
