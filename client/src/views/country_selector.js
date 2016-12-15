var CountrySelector = function() {
  this.render();
}

CountrySelector.prototype.createSelect = function(){
  var countrySelector = document.getElementById('select-wrapper');
  var select = document.createElement('select');
}



CountrySelector.prototype.render = function(){
  console.log("CountrySelector")
  this.createSelect();
}

module.exports = CountrySelector;