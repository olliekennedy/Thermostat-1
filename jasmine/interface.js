$(document).ready(function() {
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
  });

  $('#psm-off').on('click', function() {
    thermostat.switchPowerSavingOff();
    $('#psm').text('OFF');
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ffdee33ee43b3154807ccd18142ac90c', function(data) {
    $('#weather').text((data.main.temp - 273.15).toFixed(2))
  console.log(data.main.temp);
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.current());
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
    // $('#weather').text(thermostat.weather());
  };

});
