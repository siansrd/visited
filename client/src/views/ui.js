var CountrySelector = require('./country_selector');
var CountryList = require('./country_list');
var DBHandler = require('../models/db_handler.js');


var UI = function(){
  
}

UI.prototype.getDBCountries = function(){
  var db = new DBHandler();
  db.getSavedCountries(function(savedCountries){
    var countryList = new CountryList();
    for (country of savedCountries) {
      console.log("get onload", country._id);
      countryList.createListItem(country.country)
    }
  });
}

UI.prototype.render = function() {
  this.getDBCountries();
  var countrySelector = new CountrySelector();
}




module.exports = UI;