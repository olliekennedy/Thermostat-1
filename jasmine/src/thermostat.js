class Thermostat {

  constructor() {
    this._temp = 20
    this._powerSavingMode = true
    this._MIN = 10
    this._max = 25
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



}
