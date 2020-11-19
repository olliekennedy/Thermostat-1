'use strict';

describe('thermostat' , function () {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a current temperature of 20', function(){
    expect(thermostat.current()).toEqual(20);
  });

  describe('.up', function() {
    it('increases the temperature', function() {
      thermostat.up();
      expect(thermostat.current()).toEqual(21);
    });

    it("doesn't go above 25 if power saving is on", function() {
      for (var i = 0; i < 10; i++ ) {
        thermostat.up();
      }
      expect(thermostat.current()).toEqual(25);
    });

    it("doesn't go above 32 if power saving is off", function() {
      thermostat.switchPowerSavingOff()
      for (var i = 0; i < 15; i++ ) {
        thermostat.up();
      }
      expect(thermostat.current()).toEqual(32);
    });

  });


  describe('.down', function() {
    it('decreases the temperature', function() {
      thermostat.down();
      expect(thermostat.current()).toEqual(19);
    });

    it("doesn't go below 10", function() {
      for (var i = 0; i < 15; i++ ) {
        thermostat.down();
      }
      expect(thermostat.current()).toEqual(10);
    });
  });

  describe('.isPowerSavingModeOn', function() {
    it('the power saving mode is on by default', function() {
      expect(thermostat.isPowerSavingModeOn()).toEqual(true)
    });
  });

  describe('.switchPowerSavingOff', function() {
    it('switched the power saving mode off', function() {
      thermostat.switchPowerSavingOff()
      expect(thermostat.isPowerSavingModeOn()).toEqual(false)
    });
  });

  describe('.switchPowerSavingOn', function() {
    it('switched the power saving mode on', function() {
      thermostat.switchPowerSavingOff()
      thermostat.switchPowerSavingOn()
      expect(thermostat.isPowerSavingModeOn()).toEqual(true)
    });
  });

  describe('.resetTemperature', function() {
    it('changes the current temperature to 20', function() {
      for (var i = 0; i < 5; i++ ) {
        thermostat.down();
      }
      thermostat.resetTemperature()
      expect(thermostat.current()).toEqual(20)
    });
  });

  describe('.currentEnergyUsage', function() {

    it('returns low usage if the temperature is below 18', function() {
      for (var i = 0; i < 5; i++ ) {
        thermostat.down();
      }
      expect(thermostat.currentEnergyUsage()).toEqual('low-usage')
    });

    it('returns medium usage if the temperature is between 18 and 25', function() {
      expect(thermostat.currentEnergyUsage()).toEqual('medium-usage')
    });

    it('returns high usage if the temperature is above 25', function() {
      thermostat.switchPowerSavingOff()
      for (var i = 0; i < 12; i++ ) {
        thermostat.up();
      }
      expect(thermostat.currentEnergyUsage()).toEqual('high-usage')
    });

  });


});
