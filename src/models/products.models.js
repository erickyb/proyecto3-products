//const Products = 'hola :D'
const { DataTypes } = require('sequelize')

const db = require('../utils/database')

//const Products = require('./products.models')

const Products = db.define('Products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  name: {
    type: DataTypes.STRING,
    allowNull:false
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  

})


module.exports = Products

