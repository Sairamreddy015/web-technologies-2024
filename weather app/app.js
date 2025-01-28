var app = angular.module('weatherApp', []);

app.controller('WeatherController', function($scope) {
    // Simulated weather data for different cities
    var weatherData = {
        'London': {
            name: 'London',
            main: {
                temp: 15,
                humidity: 70
            },
            weather: [{
                description: 'clear sky'
            }]
        },
        'New York': {
            name: 'New York',
            main: {
                temp: 22,
                humidity: 65
            },
            weather: [{
                description: 'few clouds'
            }]
        },
        'Tokyo': {
            name: 'Tokyo',
            main: {
                temp: 18,
                humidity: 75
            },
            weather: [{
                description: 'light rain'
            }]
        }
    };

    // Predefined list of favorite cities
    $scope.favoriteCities = ['London', 'New York', 'Tokyo'];

    // Function to get weather data for a city
    $scope.getWeather = function(city) {
        var cityName = city || $scope.city;
        if (!cityName) return; // Prevent empty city search

        // Simulate getting weather data (in a real scenario, this would come from an API)
        $scope.weatherData = weatherData[cityName];
        $scope.weatherIcon = getWeatherIcon($scope.weatherData.weather[0].description);
    };

    // Function to get the weather icon based on the condition
    function getWeatherIcon(description) {
        const weatherIcons = {
            'clear sky': 'day-sunny',
            'few clouds': 'cloudy',
            'light rain': 'rain'
        };
        return weatherIcons[description] || 'na';
    }
});

// Custom filter for capitalizing text
app.filter('capitalize', function() {
    return function(input) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    };
});
