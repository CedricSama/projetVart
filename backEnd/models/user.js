const Sequelize = require('Sequelize');
const connection = require('../connection/connect');
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
  name: {
    type: Sequelize.STRING,
  },
  familyname: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING
  },
/*
  getterMethods: {
    fullInformation() {
      return this.creationDate + ' ' + this.email + ' ' + this.socity + ' ' + this.name + ' ' + this.familyname + ' ' + this.address
    },
    getPassWord() {
      return this.getDataValue('password');
    },
    getCreditCard() {
      return this.getDataValue('creditcart');
    }
  },
  setterMethods: {
    addName(name) {
      this.setDataValue('name', name);
    },
    changeName(name) {
      this.setDataValue('name', name);
    },
    addFamilyName(familyname) {
      this.setDataValue('familyname', familyname);
    },
    changeFamilyName(familyname) {
      this.setDataValue('familyname', familyname);
    },
    addAddress(address) {
      this.setDataValue('address', address);
    },
    changeAddress(address) {
      this.setDataValue('address', address);
    },
    deleteAddress(address) {
      this.setDataValue('address', address);
    },
    changeCreditCard(creditCart) {
      this.setDataValue('creditCart', creditCart);
    },
    addCreditCard(creditCart) {
      this.setDataValue('creditCart', creditCart);
    },
    deleteCreditCard(creditCart) {
      this.setDataValue('creditCart', creditCart);
    },
    changePassWord(passWord) {
      this.setDataValue('passWord', passWord);
    }}
    creditcart: {
      type: Sequelize.NUMBER,
      isCreditCard: true
    },
    }
  */
});

connection.sync({force: true}).then(() => User.create({
  email: 'tamerelajane@gmail.com',
  password: 1234,
  socity: false
})).then(lajane => {
  console.log('Ouai ouai ouai', lajane.get({plain: true}));
});

module.exports = User;
