const Sequelize = require('sequelize');
const connection = require('../connection/connection');
const Run = connection.define('run'
/*
  {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  creationDate: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    isDate: true
  },
  startAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  arrivedAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  startDate: {type: Sequelize.NUMBER},
  arrivedDate: {type: Sequelize.NUMBER},
  price: {type: Sequelize.NUMBER},
  getterMethods: {
    fullInformations() {
      return this.id + ' ' + this.creationDate + ' ' + this.startAddress + ' ' + this.arrivedAddress + ' ' + this.startDate + ' ' + this.arrivedDate + ' ' + this.price
    },
    getPrice() {
      return this.getDataValue('price');
    },
    getStartDate() {
      return this.getDataValue('startDate');
    },
    getArrivedDate() {
      return this.getDataValue('arrivedDate');
    },
    getStartAddress() {
      return this.getDataValue('startAddress');
    },
    getArrivedAddress() {
      return this.getDataValue('arrivedAddress');
    }
  },
  setterMethods: {
    addStartAddress(startAddress) {
            this.setDataValue('startAddress', startAddress.toString().toLowerCase());
    },
    changeStartAddress(startAddress) {
            this.setDataValue('startAddress', startAddress.toString().toLowerCase());
    },
    addArrivedAddress(arrivedAddress) {
            this.setDataValue('arrivedAddress', arrivedAddress.toString().toLowerCase());
    },
    changeArrivedAddress(arrivedAddress) {
            this.setDataValue('arrivedAddress', arrivedAddress.toString().toLowerCase());
    },
    addStartDate(startDate) {
            this.setDataValue('startDate', startDate.toString().toLowerCase());
    },
    changeStartAddress(startDate) {
            this.setDataValue('startDate', startDate.toString().toLowerCase());
    },
    addArrivedAddress(arrivedDate) {
            this.setDataValue('arrivedDate', arrivedDate.toString().toLowerCase());
    },
    changeArrivedAddress(arrivedDate) {
            this.setDataValue('arrivedDate', arrivedDate.toString().toLowerCase());
    }
  }
}
*/
);

module.exports = Run;
