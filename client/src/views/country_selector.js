var ApiRequest = require('../models/api_request.js');
var DBHandler = require('../models/db_handler.js');

var CountrySelector = function() {
  this.render();
}

CountrySelector.prototype.createSelect = function(){
  var select = document.createElement('select');
  var api = new ApiRequest()
  api.getCountries(function(countries){
    countries.forEach(function(country, index){
      var option = document.createElement('option');
      option.text = country.name;
      option.value = index.toString();
      select.appendChild(option);
    }) 
  var countrySelector = document.getElementById('select-wrapper');
  countrySelector.appendChild(select);
  this.addListener(countries, select);
  }.bind(this)) 
}

CountrySelector.prototype.addListener = function(countriesArray, selectElement){
  selectElement.addEventListener("change", function(event){
    var country = countriesArray[event.target.value];
    // print the item to screen to screen
    var wrapper = document.getElementById('selected-countries');
    var selected = document.createElement('p');
    selected.innerText = country.name;
    wrapper.appendChild(selected)
    // save the country to mongo
    var db = new DBHandler();
    db.save(country)

  })    
}






CountrySelector.prototype.render = function(){
  this.createSelect();
}

module.exports = CountrySelector;