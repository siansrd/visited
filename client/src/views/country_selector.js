var ApiRequest = require('../models/api_request.js')

var CountrySelector = function() {
  this.render();
}

CountrySelector.prototype.createSelect = function(){
  var countrySelector = document.getElementById('select-wrapper');
  var select = document.createElement('select');
  this.createCountryList(select);
  countrySelector.appendChild(select);
}

CountrySelector.prototype.createCountryList = function(selectElement){
  var api = new ApiRequest()
  api.getCountries(function(countries){
    for (country of countries){
      var option = document.createElement('option');
      option.text = country.name;
      selectElement.appendChild(option);
    }
  }) 
}

CountrySelector.prototype.render = function(){
  this.createSelect();
}

module.exports = CountrySelector;