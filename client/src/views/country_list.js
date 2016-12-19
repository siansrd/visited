var DBHandler = require('../models/db_handler.js');

var CountryList = function() {
}

CountryList.prototype.createListItem = function(country){
  var wrapper = document.getElementById('selected-countries');
  var listItem = document.createElement('p');
  listItem.innerText = country.name;
  wrapper.appendChild(listItem)
  this.addDeleteButton(listItem, country);
}

CountryList.prototype.addDeleteButton = function(item, country){
  var deleteButton = document.createElement('button')
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", function(){
    console.log("delete clicked and sends:", country);
    var db = new DBHandler();
    db.delete(country);
  })
  item.appendChild(deleteButton);
}

module.exports = CountryList;


