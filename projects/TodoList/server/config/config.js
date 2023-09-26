require('dotenv').config();
const env = process.env;

const development = {
  username: env.DEV_USERNAME,
  password: env.DEV_PASSWORD,
  database: env.DEV_DATABASE,
  host: env.DEV_HOST,
  dialect: "mysql",
}

const production = {
  username: env.PROD_USERNAME,
  password: env.PROD_PASSWORD,
  database: env.PROD_DATABASE,
  host: env.PROD_HOST,
  dialect: "mysql",
}

module.exports = { development, production }