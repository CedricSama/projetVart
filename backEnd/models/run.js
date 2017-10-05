const Sequelize = require('Sequelize');
const connection = require('../connection/connect');
const Run = connection.define('run',{
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
  price: {type: Sequelize.NUMBER}
  /*,
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
      this.setDataValue('startAddress', startAddress);
    },
    changeStartAddress(startAddress) {
      this.setDataValue('startAddress', startAddress);
    },
    addArrivedAddress(arrivedAddress) {
      this.setDataValue('arrivedAddress', arrivedAddress);
    },
    changeArrivedAddress(arrivedAddress) {
      this.setDataValue('arrivedAddress', arrivedAddress);
    },
    addStartDate(startDate) {
      this.setDataValue('startDate', startDate);
    },
    changeStartAddress(startDate) {
      this.setDataValue('startDate', startDate);
    },
    addArrivedAddress(arrivedDate) {
      this.setDataValue('arrivedDate', arrivedDate);
    },
    changeArrivedAddress(arrivedDate) {
      this.setDataValue('arrivedDate', arrivedDate);
    }
  }*/
});

module.exports = Run;
