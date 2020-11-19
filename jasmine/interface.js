$(document).ready(function() {
  let endpoint = 'http://api.openweathermap.org/data/2.5/weather'
  let apiKey = 'ffdee33ee43b3154807ccd18142ac90c'
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

  // $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ffdee33ee43b3154807ccd18142ac90c', function(data) {
  //   $('#weather').text((data.main.temp - 273.15).toFixed(2))
  //   console.log(data.main.temp);
  // });

  $("#citySelect").submit(function(){
    event.preventDefault();
      var city = $("#cityText").val();
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ffdee33ee43b3154807ccd18142ac90c', function(data) {
        $('#weather').text((data.main.temp - 273.15).toFixed(2))
        console.log(data.main.temp);
      });
  });

  // $.ajax({
  //   url: endpoint + " ?q=" + 'London,uk' + "&appid=" + apiKey,
  //   contentType: "application/json",
  //   dataType: 'json',
  //   success: function(result){
  //     console.log(result);
  //   }
  // });

  function updateTemperature() {
    $('#temperature').text(thermostat.current());
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
    // $('#weather').text(thermostat.weather());
  };

});
