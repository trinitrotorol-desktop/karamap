const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const KaraokeStore = sequelize.define('KaraokeStore', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
  },
  opening_hours: {
    type: DataTypes.STRING,
  },
  website: {
    type: DataTypes.STRING,
  },
});

module.exports = KaraokeStore;
