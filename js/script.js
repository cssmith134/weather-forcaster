
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
var uvi = document.querySelector("#uvi");
var icon = document.querySelector("#icon");
var leftBox = document.querySelector("#leftBox");
var cities = JSON.parse(localStorage.getItem("cities")) || [];

console.log(cities)


var citySearch = function(city) {
    
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + apikey;
    fetch(apiURL).then(function(response) {
      response.json().then(function(data) {
        displayCity(data, city);

        displayForecast(city);
      })
      
  });
      
  };
  var formSubmitHandler = function(event,) {
      event.preventDefault();
      var city = cityInputEl.value.trim();
      if (city) {
        cities.push(city)
        // save to localstorage
        saveEvent();
        // create new button
        saveSearch(city)
        // get and display weather data
        citySearch(city);
        cityInputEl.value = "";
      } else {
        alert("please enter a city name");
      }
      
  };

  var saveSearch = function (name) {
    var newBtn = document.createElement("button");
    newBtn.textContent = name;
   
    newBtn.addEventListener("click", function(event) {
      citySearch(event.target.textContent)
    
    })

    leftBox.appendChild(newBtn)

  }
   for (let index = 0; index < cities.length; index++) {
    saveSearch(cities[index]);
     
   }



  var displayCity = function(city, searchTerm) {
    cityContainerEl.textContent = "";
    citySearchTerm.textContent = searchTerm ;
    console.log(city)

    document.getElementById("date").innerHTML = city.dt;
    document.getElementById("description").innerHTML = city.weather[0].description;
    document.getElementById("temp").innerHTML = "Temp: " + city.main.temp + "&deg *F";
    document.getElementById("humidity").innerHTML = "Humidity: " + city.main.humidity + "%";
    document.getElementById("wind").innerHTML = "Wind Speed: " + city.wind.speed + " MPH";
    document.getElementById("icon").src = "http://openweathermap.org/img/wn/" + city.weather[0].icon + ".png";
   
  };

  var displayCity1 = function(data) {
    
    document.getElementById("temp1").innerHTML = "Temp: " + data.list[4].main.temp + "&deg *F";
    document.getElementById("humidity1").innerHTML = "Humidity: " + data.list[4].main.humidity + "%";
    document.getElementById("wind1").innerHTML = "Wind Speed: " + data.list[4].wind.speed + " MPH";
    
  };

  var displayCity2 = function(data) {
    
    document.getElementById("temp2").innerHTML = "Temp: " + data.list[12].main.temp + "&deg *F";
    document.getElementById("humidity2").innerHTML = "Humidity: " + data.list[12].main.humidity + "%";
    document.getElementById("wind2").innerHTML = "Wind Speed: " + data.list[12].wind.speed + " MPH";
    
  };

  var displayCity3 = function(data) {
    
    document.getElementById("temp3").innerHTML = "Temp: " + data.list[20].main.temp + "&deg *F";
    document.getElementById("humidity3").innerHTML = "Humidity: " + data.list[20].main.humidity + "%";
    document.getElementById("wind3").innerHTML = "Wind Speed: " + data.list[20].wind.speed + " MPH";
    
  };

  var displayCity4 = function(data) {
    
    document.getElementById("temp4").innerHTML = "Temp: " + data.list[28].main.temp + "&deg *F";
    document.getElementById("humidity4").innerHTML = "Humidity: " + data.list[28].main.humidity + "%";
    document.getElementById("wind4").innerHTML = "Wind Speed: " + data.list[28].wind.speed + " MPH";
    
  };

  var displayCity5 = function(data) {
    
    document.getElementById("temp5").innerHTML = "Temp: " + data.list[36].main.temp + "&deg *F";
    document.getElementById("humidity5").innerHTML = "Humidity: " + data.list[36].main.humidity + "%";
    document.getElementById("wind5").innerHTML = "Wind Speed: " + data.list[36].wind.speed + " MPH";
    
  };

  userFormEl.addEventListener("submit", formSubmitHandler);

var displayForecast = function(city, searchTearm) {
  var apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&appid=" + apikey;
  fetch(apiURL).then(function(response) {
    response.json().then(function(data) {
      
      console.log(data)

      displayCity1(data);
      displayCity2(data);
      displayCity3(data);
      displayCity4(data);
      displayCity5(data);

    })
    
});
}

  var saveEvent = function() {
    
    
        localStorage.setItem("cities", JSON.stringify(cities));

  };





