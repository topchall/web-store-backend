const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const Product = require('./product')
  
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

Category.hasMany(Product, {
    foreignKey: 'categoryId', 
    as: 'Products',
    // onDelete: 'RESTRICT',
    // onUpdate: 'RESTRICT'
});
  
module.exports = Category