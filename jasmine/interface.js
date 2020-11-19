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

  function updateTemperature() {
    $('#temperature').text(thermostat.current());
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
  };

})
