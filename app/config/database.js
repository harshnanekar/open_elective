const { Client } = require('pg');

const postgres = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'root',
    database: 'open_elective',
});

module.exports = { postgres };