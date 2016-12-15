var ApiRequest = require('../models/api_request.js')

var CountrySelector = function() {
  this.render();
}

CountrySelector.prototype.createSelect = function(){
  // var countrySelector = document.getElementById('select-wrapper');
  // var select = document.createElement('select');
  this.createCountryList();
  // countrySelector.appendChild(select);
}

CountrySelector.prototype.createCountryList = function(){
  var select = document.createElement('select');
  var api = new ApiRequest()
  api.getCountries(function(countries){
    for (country of countries){
      var option = document.createElement('option');
      option.text = country.name;
      select.appendChild(option);
    }
  var countrySelector = document.getElementById('select-wrapper');
  countrySelector.appendChild(select);
  }) 
}

CountrySelector.prototype.render = function(){
  this.createSelect();
}

module.exports = CountrySelector;