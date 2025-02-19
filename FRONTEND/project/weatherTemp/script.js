document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");


    
    // const city = "";
    // const units = "metric";  // celsius or fahrenheit
    const apiKey = "2a0fd9f28fc8f846227a764c187e1463" // env variables

    getWeatherBtn.addEventListener("click", async() => {
        const city = cityInput.value.trim();

                // Clear previous UI data before fetching new city
                resetUI();


        // if(!city)
        // {
        //     return;
        // }

        // or

        // Allow only letters and spaces (no numbers or special characters)
        if (!/^[a-zA-Z\s]+$/.test(city)) {
            showError("Invalid city name. Please enter a valid city.");
            return;
        }

        // it may throw an error
        // server/database is always in another continent.

        try {
           const weatherData = await fetchWeatherData(city);
           displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }

    });


   async function fetchWeatherData(city) {
        // gets the data
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        const response = await fetch(url);
        console.log(typeof response);
        console.log("RESPONSE", response);

        if (!response.ok)
        {
            throw new Error(" City Not Found");
            
        }

        const data = await response.json();
        return data;
    }


// or

// async function fetchWeatherData(city) {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
//     try {
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(" City Not Found");
//         }

//         const data = await response.json();

//         // If the API returns a city name, it's a real city
//         if (!data || !data.name || !data.main || !data.weather) {
//             return null;
//         }

//         return data;
//     } catch (error) {
//         return null;
//     }
// }





    function displayWeatherData(data) {
        // display
        // console.log(data);

        const {name, main, weather} = data;
        cityNameDisplay.textContent = `City: ${name}`;

        temperatureDisplay.textContent = `Temperature : ${main.temp}°C`;
        descriptionDisplay.textContent = `Description : ${weather[0].description}`;

        // unlock the display name
        // Show weather info and hide error message
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");

         // Clear input field after displaying weather
         cityInput.value = "";
    }


    function showError(message) {
        weatherInfo.classList.add("hidden");  // Hide weather info
        errorMessage.classList.remove("hidden"); // Show error message
        errorMessage.textContent = message;

       // Clear input field after error
       cityInput.value = ""; 
    }



    function resetUI() {
        // Clears previous data before new request
        cityNameDisplay.textContent = "";
        temperatureDisplay.textContent = "";
        descriptionDisplay.textContent = "";

        // Hide previous weather info and error messages
        weatherInfo.classList.add("hidden");
        errorMessage.classList.add("hidden");
    }
});