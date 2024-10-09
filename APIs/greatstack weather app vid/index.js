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

// name speaks for itself
const weatherIcon = document.querySelector(".weather-icon")



// make an async function
async function checkWeather(city){
    // first fetch the api and wait for its response
    // also create the query link that's fetched with the wanted content
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // error msg display
    // .status = fetch response code
    if (response.status === 404){
        document.querySelector(".error").style.display = "block";
    }
    else{

        // convert the response in json using json()
        let data = await response.json();

        // link content to the html elements (that have the corresponding classes)
        // also hard coding the units
        // also rounding up the temp value
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // changing the icon depending on the weather
        // [0] is where the "main" weather is
        // src = the source
        if (data.weather[0].main === "Clouds"){
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4834/4834559.png";
        }
        else if (data.weather[0].main === "Clear"){
            weatherIcon.src = "https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-511x512-zfj6vb21.png";
        }
        else if (data.weather[0].main === "Rain"){
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4150/4150897.png";
        }
        else if (data.weather[0].main === "Drizzle"){
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/6142/6142570.png";
        }
        else if(data.weather[0].main === "Mist"){
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
        }



        // making the display switch to block "when entering a query" (actually when the function is run)
        document.querySelector(".weather").style.display = "block";
    }

}



searchBtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
})

// weather icon links
// clear https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-511x512-zfj6vb21.png
// cloudy https://cdn-icons-png.flaticon.com/512/4834/4834559.png
// drizzly https://cdn-icons-png.flaticon.com/512/6142/6142570.png
// misty https://cdn-icons-png.flaticon.com/512/4005/4005901.png
// snowy https://cdn-icons-png.flaticon.com/512/414/414866.png