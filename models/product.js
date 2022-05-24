const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const Category = require('./category')
  
const Product = sequelize.define('products', {
  
    id:{
  
        type:Sequelize.INTEGER,
  
        autoIncrement:true,

        allowNull:false,
  
        primaryKey:true
    },

    categoryId: { type: Sequelize.INTEGER, allowNull:false },
  
    caption: { type: Sequelize.STRING, allowNull:false },
  
    price: { type: Sequelize.DOUBLE, defaultValue: 0 },
  
    quantity: { type: Sequelize.INTEGER, defaultValue: 0 },
  
    description: { type: Sequelize.TEXT, allowNull:false },
  
    rating: { type: Sequelize.DOUBLE, defaultValue: 0 },
  
    img: { type: Sequelize.STRING },
  
     createdAt: Sequelize.DATE,
     updatedAt: Sequelize.DATE,

});

// Product.belongsTo(Category, {
//     foreignKey: 'categoryId'
// });
  
module.exports = Product