const mysql = require('mysql2/promise');// menas all DB actions will yield a promise.

const pool = mysql.createPool({
  host: 'localhost',
  database: 'blog',
  user: 'root',
  password: 'admin12345.',
});

module.exports = pool;
