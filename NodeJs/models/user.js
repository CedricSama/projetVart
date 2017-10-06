const Sequelize = require('Sequelize');
const connection = require('../connection/connection');

const User = connection.define('user', {
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    allowNull: false,
    primaryKey: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  socity: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING
  },
  /*creditCart: {
    type: Sequelize.NUMBER,
    validate: {
      isCreditCard: true
    }
  }
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
  }*/
});

connection.sync({force: true}).then(() => User.create({
  email: 'tamerelajane@gmail.com',
  password: 1111,
  socity: false
})).then(lajane => {
  console.log('Ouai ouai ouai', lajane.get({plain: true}));
});

module.exports = User;
