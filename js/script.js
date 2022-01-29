
var apikey = "92116fa7c4ec4239661e565843dd0ea7"
var userFormEl = document.querySelector("#user-form")
var cityInputEl = document.querySelector("#city")
var cityContainerEl = document.querySelector("#city-container");
var citySearchTerm = document.querySelector("#city-search-term");
var description = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var weather = document.querySelector("#weather");
var humidity = document.querySelector("#humidity")


var citySearch = function(city) {
    
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + apikey;
    fetch(apiURL).then(function(response) {
      response.json().then(function(data) {
        displayCity(data, city);
      })
      
  });
      
  };
  var formSubmitHandler = function(event,) {
      event.preventDefault();
      var city = cityInputEl.value.trim();
      if (city) {
        citySearch(city);
        cityInputEl.value = "";
      } else {
        alert("please enter a city name");
      }
      console.log(event);
  };

  var displayCity = function(city, searchTerm) {
    cityContainerEl.textContent = "";
    citySearchTerm.textContent = searchTerm;
  
    
    document.getElementById("description").innerHTML = city.weather[0].description;
    document.getElementById("temp").innerHTML = "Temp: " + city.main.temp + "&deg";
    document.getElementById("humidity").innerHTML = "Humidity: " + city.main.humidity;
    document.getElementById("wind").innerHTML = "Wind Speed: " + city.wind_speed;
    
  }
  userFormEl.addEventListener("submit", formSubmitHandler);

  

 