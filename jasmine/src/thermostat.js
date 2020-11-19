class Thermostat {

  constructor() {
    this._temp = 20
    this._powerSavingMode = true
    this._MIN = 10
    this._max = 25
    // this._API_KEY = process.env.WEATHER
  }

  current() {
    return this._temp
  }

  up() {
    if (this._temp === this._max) {
      return;
    }
    this._temp += 1
  }

  down() {
    if (this._temp <= this._MIN) {
      return;
    }
    this._temp -= 1
  }

  isPowerSavingModeOn() {
    return this._powerSavingMode === true;
  }

  switchPowerSavingOff() {
    this._powerSavingMode = false
    this._max = 32
  }

  switchPowerSavingOn() {
    this._powerSavingMode = true
    this._max = 25
  }

  resetTemperature() {
    this._temp = 20
  }

  currentEnergyUsage() {
    if (this._temp < 18) {
      return 'low-usage'
    }
    else if (this._temp > 25) {
      return 'high-usage'
    }
    else {
      return 'medium-usage'
    }
  }

  // weather() {
  //   var localTemp = $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ffdee33ee43b3154807ccd18142ac90c', function(data) {
  //   console.log(data.main.temp);
  //   });
  // }
}
