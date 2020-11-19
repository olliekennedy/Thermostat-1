$(document).ready(function() {
  let endpoint = 'http://api.openweathermap.org/data/2.5/weather?q='
  let apiKey = '&appid=ffdee33ee43b3154807ccd18142ac90c'
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').on('click', function() { // event listener
    thermostat.up(); // update model
    updateTemperature(); // update view
  });

  $('#temp-down').on('click', function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset-temp').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').on('click', function() {
    thermostat.switchPowerSavingOn();
    $('#psm').text('ON');
    updateTemperature();
  });

  $('#psm-off').on('click', function() {
    thermostat.switchPowerSavingOff();
    $('#psm').text('OFF');
  });

  displayWeather('london');

  $("#citySelect").submit(function(){
    event.preventDefault();
      var city = $("#cityText").val();
      displayWeather(city);
  });

  function displayWeather(city) {
    $.get(endpoint + city + apiKey, function(data) {
      $('#weather').text((data.main.temp - 273.15).toFixed(2))
    });
    $('#cityName').text(city);
  };

  function updateTemperature() {
    $('#temperature').text(thermostat.current());
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
  };

});
