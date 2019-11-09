$(document).ready(function () {

    // OPEN WEATHER CALL: http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}


    var APIKey = "2d54c14ad67ce359aeba792a000fb367";
    var cityArray = [];


    // Function to make the call and display current weather 

    function displayCurrentWeather(city) {

        // Var for OpenWeather Api Key, Var for text input and a Var to query the database

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey + "&units=imperial";

        // To convert to Fahrenheit: To get data in API for both current weather and forecast in Fahrenheit just add units=imperial parameter into your API call like in this example:
        // api.openweathermap.org/data/2.5/weather?q=London&units=imperial

        console.log(queryURL);

        // Run AJAX call to the OpenWeatherMap API
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // Store retrieved data inside of an object called "response"
            .then(function (response) {
                // Log the queryURL
                console.log(queryURL);

                $(".weather-info").empty()

                // Log the response object
                console.log(response);

                // Create a var for weather-info div

                var weatherInfo = $(".weather-info");

                console.log(weatherInfo);

                // Create var for temperature response

                var tempResponse = response.main.temp;

                // Create div to display temp

                var temperature = $("<div>").text("Temperature: " + tempResponse + "℉");

                // Append the temp to main WeatherInfo div

                weatherInfo.append(temperature)

                // Create a var for humidity response:

                var humidityResponse = response.main.humidity;

                // Create div to display humidity

                var humidity = $("<div>").text("Humidity: " + humidityResponse + "%");

                // Append the humidity to main WeatherInfo div

                weatherInfo.append(humidity);

                // Create var for wind response:

                var windResponse = response.wind.speed;

                console.log("response is: ", response)

                // Create div to display wind

                var wind = $("<div>").text("Wind Speed: " + windResponse + " MPH");

                // Append wind to weatherInfo

                weatherInfo.append(wind);


                // Ending curly bracket for response function 
            });
    }

    // Function to get the stored city to display on the left:
    // newCity is a local variable to that function

    function displaySearchedCity(newCity) {

        $(".city-card-body").empty();

        console.log(cityArray);

        localStorage.setItem("searchedCity", JSON.stringify(cityArray))

        // for loop over the cityarry and then dynamically append each item in the array to the city-card-body. 

        for (var i = 0; i < cityArray.length; i++) {
            var cityName = $("<p>");

            // Adding a class of new-city-p to <p>
            cityName.addClass("new-city-p");

            cityName.attr(cityArray[i]);

            // Providing the <p> text
            cityName.text(cityArray[i]);
            // Adding the button to the buttons-view div
            $(".city-card-body").append(cityName);

            // ending bracket for displaySearchedCity function
        }
    }


    // Function to display 5-day forecast temperatures calling OpenWeather:

    function fiveDayForecast(inputCityName) {
        var queryTemp = "http://api.openweathermap.org/data/2.5/forecast?q=" + inputCityName + "&APPID=" + APIKey + "&units=imperial";
        var queryConditionImage = 

        // Run AJAX call to the OpenWeatherMap API
        $.ajax({
            url: queryTemp,
            method: "GET"
        })

            // Store retrieved data inside of an object called "responseTemp"

            .then(function (responseTemp) {

                console.log(responseTemp)

                for (var i = 0; i < 5; i++) {

                    console.log(responseTemp.list[i].main.temp)

                    // Feed a date to moment and convert it- how to feed it an unformatted date   maybe moment.format

                    // var convertDate = moment().responseTemp.list[i].dt.format('MM/DD/YYYY')
                    // console.log(convertDate)
                

                    // Variables for forecast data:
                    var forecastDate = responseTemp.list[i].dt;
                    var conditionImage = "Image"
                    var forecastTemp = responseTemp.list[i].main.temp;
                    var forecastHumidity = responseTemp.list[i].main.humidity;

                    $(".forecastCards").append("<div class='col-sm-2 cardDay'><p>" + forecastDate + "</p><p>" + conditionImage + "</p><p>" + 'Temp: ' + forecastTemp + '℉' + "</p><p>" + 'Humidity: ' + forecastHumidity + '%' + "</p></div>")

                    // I AM NOT DOING THE BELOW RIGHT
                  

                }
            })
    }

    // var queryHumidity = "api.openweathermap.org/data/2.5/forecast.humidity?q=" + inputCityName + "&APPID=" + APIKey;

    // // Run AJAX call to the OpenWeatherMap API
    // $.ajax({
    //     url: queryHumidity,
    //     method: "GET"
    // })
    // }


    // CLICK EVENT FOR SEARCH BUTTON:

    $("#search-button").on("click", function (event) {

        event.preventDefault();

        // Grab the input data 

        var inputCityName = $("#city-input").val().trim();
        cityArray.push(inputCityName);

        $(".city").text((inputCityName))

        // Below I want to make inputCityName an H1 or Bold
        // inputCityName.addClass("")

        var todayDate = $('.today-date');
        console.log(todayDate)


        $(todayDate).text("\t" + "(" + (moment().format('MM/DD/YYYY')) + ")")

        // 5-Day Forecast heading text

        var fiveDayText = $('#five-day-text')
        console.log(fiveDayText)
        $(fiveDayText).text("5-Day Forecast: ")

        // Call functions

        displayCurrentWeather(inputCityName);
        displaySearchedCity(inputCityName);
        fiveDayForecast(inputCityName)
        console.log(cityArray)

    });


    // CLICK EVENT FOR previously searched city to display that city's weather again

    $(".city-card-body").on("click", ".new-city-p", function (event) {

        console.log(event.currentTarget.innerText);

        event.preventDefault();
        $(".city").text(event.currentTarget.innerText);
        displayCurrentWeather(event.currentTarget.innerText);

    })


    // Closing curly bracket for document ready function
})
// TO DO:
// Fix search icon
// Add icons to current weather
// Add humidty to 5-day forecast
// Icons for 5-day forecast
// Clear input box
// Emplty the 5-day forecast
