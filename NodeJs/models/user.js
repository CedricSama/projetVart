const Sequelize = require('sequelize');
const connection = require ('../connection/connection');

const User = connection.define('user', {
  creationDate:{
    type:  Sequelize.DATE,
    allowNull: false,
    isDate: true
  },
  eMail: {
    type: Sequelize.STRING,
    isEmail: true,
    allowNull: false,
    primaryKey: true
  },
  passWord: {
    type: Sequelize.STRING,
    allowNull: false
  },
  socity: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  creditCart: {
    type: Sequelize.NUMBER,
    isCreditCard: true
  },
  address: {
    type: Sequelize.STRING},
  getterMethods: {
    fullInformation() {
      return this.creationDate + ' ' + this.eMail + ' ' + this.socity + ' ' + this.address
    },
    getPassWord() {
      return this.getDataValue('passWord');
    }
  },
  setterMethods: {
    addAddress(address) {
      this.setDataValue('address', address.toString().toLowerCase());
    },
    changeAddress(address) {
      this.setDataValue('address', address.toString().toLowerCase());
    },
    deleteAddress(address) {
      this.setDataValue('address', address.toString().toLowerCase());
    },
    changeCreditCard(creditCart) {
      this.setDataValue('creditCart', creditCart.toString().toLowerCase());
    },
    addCreditCard(creditCart) {
      this.setDataValue('creditCart', creditCart.toString().toLowerCase());
    },
    deleteCreditCard(creditCart) {
      this.setDataValue('creditCart', creditCart.toString().toLowerCase());
    },
    changePassWord(passWord) {
      this.setDataValue('passWord', passWord.toString().toLowerCase());
    },
  }
});

connection.sync({force: true}).then(() => User.create({
  creationDate: new Date(1999, 9, 9),
  eMail: 'tamerelajane@gmail.com',
  passWord: 1234,
  socity: false
})).then(lajane => {
  console.log('Ouai ouai ouai' + lajane.get({plain: true}));
});

module.exports = User;
