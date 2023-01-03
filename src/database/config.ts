"use strict";

const config = {
    database: process.env.MYSQL_PRIMARY_DATABASE,
    host: process.env.MYSQL_PRIMARY_HOST,
    port: process.env.MYSQL_PRIMARY_PORT,
    user: process.env.MYSQL_PRIMARY_USERNAME,
    password: process.env.MYSQL_PRIMARY_PASSWORD,
};

export default config