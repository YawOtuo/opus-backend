var DataTypes = require("sequelize").DataTypes;
var _digilabs_emails = require("./digilabs_emails");
var _digilabs_header_section = require("./digilabs_header_section");

function initModels(sequelize) {
  var digilabs_emails = _digilabs_emails(sequelize, DataTypes);
  var digilabs_header_section = _digilabs_header_section(sequelize, DataTypes);


  return {
    digilabs_emails,
    digilabs_header_section,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
