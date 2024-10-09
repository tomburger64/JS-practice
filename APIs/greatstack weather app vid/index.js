// I'm supposed to do this in a script tag, but I'd rather do it in a proper file

// https://openweathermap.org/current
// I won't leave my API key for all to see as this is a public repo on git

// if you wanna try it out, you gotta make an acc at https://openweathermap.org/
// then go to the api section and select the "current weather data" docs (free to use as long as you have an acc made)
// your acc's api keys are there https://home.openweathermap.org/api_keys
// please note that it can take "a few hours" for the key to work if you just made your acc (took me about 20 mins)

// to make a "default" call with the API
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


// - - - - - - - - - - - - - - - - - - -

// first define the key and the basic api url removing the key calling part
const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// to select the form input
// didn't know, but selecting works just like in css, can call whole tags after other classes / ids / tags...
const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");



// make an async function
async function checkWeather(city){
    // first fetch the api and wait for its response
    // also create the query link that's fetched with the wanted content
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // convert the response in json using json()
    let data = await response.json();

    // link content to the html elements (that have the corresponding classes)
    // also hard coding the units
    // also rounding up the temp value
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}



searchBtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
})