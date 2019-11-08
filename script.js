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

                console.log("response is: " , response)

                // Create div to display wind

                var wind = $("<div>").text("Wind Speed: " + windResponse + " MPH");

                // Append wind to weatherInfo

                weatherInfo.append(wind);


                // Ending curly bracket for response function 
            });
    }

// function geographicCoordinates(inputCityName) {

//     var query
//      = 

// }


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

    // Display 5-day forecast

    function displayFiveDayForecastDate() {


        // var forecastCard = $("#forecast").siblings()

        // console.log(forecastCard);

        // $(".forecast").empty()
        

        var dayOne = $("#day-one");
        var dayTwo = $("#day-two");
        var dayThree = $("#day-three");
        var dayFour = $("#day-four");
        var dayFive = $("#day-five");

        $("#day-one").empty()
        $("#day-two").empty()
        $("#day-three").empty()
        $("#day-four").empty()
        $("#day-five").empty()

       

        $(dayOne).text(moment().add(1, 'days').format('MM/DD/YYYY'))
        $(dayTwo).text(moment().add(2, 'days').format('MM/DD/YYYY'))
        $(dayThree).text(moment().add(3, 'days').format('MM/DD/YYYY'))
        $(dayFour).text(moment().add(4, 'days').format('MM/DD/YYYY'))
        $(dayFive).text(moment().add(5, 'days').format('MM/DD/YYYY'))

        var forecastArray = [dayOne, dayTwo, dayThree, dayFour, dayFive];

        for (var i = 0; i < forecastArray.length; i++) {
var forecastCards = $("<div>");

forecastCards.addClass("forecastDay");
forecastCards.attr(forecastArray[i]);
        
// AND THEN HOW TO I ADD THE DATES FROM MOMENTJS AND THEN THE API CALLS?

}

        // var tempForecastResponse = 
        // ADD ABOVE INTO BELOW VAR

    
        var tempForecast = $("<div>").text("Temp: " + "℉")

        // forecastCard.append(tempForecast)

        // dayOne.append(tempForecast)
        // dayTwo.append(tempForecast)
        // dayThree.append(tempForecast)
        // dayFour.append(tempForecast)
        // dayFive.append(tempForecast)

        // var weatherIcon = $("<div>").text("Weather Icon")

        // forecastCard.append(weatherIcon)

        //    tempForecast.append(weatherIcon)


        // var humidityForecastResponse = 
        // ADD ABOVE INTO BELOW VAR
        // var humidityForecast = $("<div>").text("Humidity: " + "%")

        // forecastCard.append(humidityForecast)


        // Ending curly bracket for displayFiveDayForecast
    }


    // NEED A FUNCTION  HERE FOR DISPLAYING 5-DAY ICONS

//
    // Function to display 5-day forecast temperatures calling OpenWeather:

function fiveDayForecastTemp(inputCityName) {
    var queryTemp = "http://api.openweathermap.org/data/2.5/forecast?q=" + inputCityName + "&APPID=" + APIKey;

    // Run AJAX call to the OpenWeatherMap API
        $.ajax({
            url: queryTemp,
            method: "GET"
        })

       
// Store retrieved data inside of an object called "responseTemp"

.then (function (responseTemp){

    console.log(responseTemp)

       for (var i = 0; i < 5; i++) {

            console.log(responseTemp.list[i].main.temp)

            var convertTime = 

// Feed a date to moment and convert it- hoe to feed it an unformatted date   maybe moment.format

        $(".forecastCards").append("<div class='col-sm-2 cardDay'><p> +"+responseTemp.list[i].dt+ "</p></div>")


        }

        // Create var for temperature response

        var tempResponse = response.main.temp;

    // }
    // )}

})
}


    // //    Function to display 5-day forecast humidity calling OpenWeather:

    // function fiveDayForecastHumidity(humidity) {

    // var humidityOne = $(".one-humidity");
    // var humidityTwo = $(".two-humidity");
    // var humidityThree = $(".three-humidity");
    // var humidityFour = $(".four-humidity");
    // var humidityFive = $(".five-humidity");

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

        $(".city").text((inputCityName) + " ")

        var todayDate = $('.today-date');
        console.log(todayDate)
        

        $(todayDate).text(" (" + (moment().format('MM/DD/YYYY')) + ")")

        

        // 5-Day Forecast

        var fiveDayText = $('#five-day-text')
        console.log(fiveDayText)
        $(fiveDayText).text("5-Day Forecast: ")


        // Call functions

        displayCurrentWeather(inputCityName);
        displaySearchedCity(inputCityName);
        // displayFiveDayForecastDate();
        fiveDayForecastTemp(inputCityName)
        console.log(cityArray)

    });




// Listening for a click on a searched city to display that city's weather again


$(".city-card-body").on("click", ".new-city-p",function(event){
   
    console.log(event.currentTarget.innerText);

    event.preventDefault();
    $(".city").text(event.currentTarget.innerText);
    displayCurrentWeather(event.currentTarget.innerText);

    // displayFiveDayForecast();
    // fiveDayForecastTemp(inputCityName)  
    // I WANT TO UNDERSTAND WHY I CAN'T I CAN'T USE THE ABOVE FUNCTIONS IN THIS CLICK EVENT. CONSOLE SAYS THESE FUNCTION'S AREN'T DEFINED
 

})


    // Closing curly bracket for document ready function
})
// TO DO:
// UV INDEX
// SEARCH ICON
// NEED TO DO THE 5-DAY FORECAST
// NEED ICONS IN 5-DAY FORECAST
// MAKE PREVIOUSLY SEARCHED CITY CLICK EVENT