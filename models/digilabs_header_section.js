const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('digilabs_header_section', {
    heading: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    public_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'digilabs_header_section',
    timestamps: false
  });
};
