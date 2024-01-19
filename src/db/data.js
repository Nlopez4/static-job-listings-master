const dotenv = require('dotenv');
const pg = require("pg");

dotenv.config();
const pool = new pg.Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});
