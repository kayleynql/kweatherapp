function formatDate(date){

    let hours =date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    
    let minutes = date.getMinutes();
        if (minutes <10) {
            minutes=`0${minutes}`;
    }
    
    let dayIndex = date.getDay();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[dayIndex];
  
    return `${day} ${hours} : ${minutes}`;
  }
  
//    cityElement.innerHTML =cityInput.value; 
// make an API call to Openweather API, once i get the http response, we display the city name and temp

  function search(event){
   event.preventDefault();
    let apiKey = "8cd9be374c7c96c39a9fe73f4bf2f055";
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
  
  function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 66;
  }
  
  function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 19;
  }
  
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  // let fahrenheitLink = document.querySelector("#fahrenheit-link");
  // fahrenheitLink.addEventListener("click", convertToFahrenheit);
  
  // let celsiusLink = document.querySelector("#celsius-link");
  // celsiusLink.addEventListener("click", convertToCelsius);