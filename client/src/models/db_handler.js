var DBHandler = function() {
  console.log("DB Handler")
}

DBHandler.prototype.save = function(data) {
  console.log(data)
}

module.exports = DBHandler;