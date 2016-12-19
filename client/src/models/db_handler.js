var Country = require("./country.js");
var CountryList = require("../views/country_list.js")

var DBHandler = function() {
  console.log("DB Handler")
}

DBHandler.prototype.getSavedCountries = function(callback) {
  var url = 'http://localhost:3000/countries';
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function() {
    if(request.status === 200) {
      var savedCountries = JSON.parse(request.responseText);
      callback(savedCountries)
    }
  }.bind(this);
  request.send(null);
}

DBHandler.prototype.save = function(data) {
  var url = "http://localhost:3000/countries";
  var request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function() {
    if(request.status === 200){
    }
  }
  var stringified = JSON.stringify(data);
  request.send(stringified);
}

DBHandler.prototype.delete = function(data) {
  var url = "http://localhost:3000/countries";
  var request = new XMLHttpRequest();
  request.open("DELETE", url);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function() {
    if(request.status === 204){
    }
  }
  var stringified = JSON.stringify(data);
  request.send(stringified);
}
  
module.exports = DBHandler;