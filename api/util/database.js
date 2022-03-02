const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: '.config/env' })

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'postgres',
    password: 'Cris!1721',
    port: 5432,
    database: 'todoBD',
    dialect: 'postgres',
    // dialectOptions: {
    //     ssl:{
    //         require: true,
    //         rejectUnauthorized: false,
    //     },
    // },
});

module.exports = { sequelize };