const Sequelize = require('sequelize')
const sequelize = require('../config/db')
  
const Category = sequelize.define('categories', {
  
    id:{
  
        type:Sequelize.INTEGER,
  
        autoIncrement:true,

        allowNull:false,
  
        primaryKey:true
    },
  
    categoryName: { type: Sequelize.STRING, allowNull:false },
  
     createdAt: Sequelize.DATE,
     updatedAt: Sequelize.DATE,
})
  
module.exports = Category