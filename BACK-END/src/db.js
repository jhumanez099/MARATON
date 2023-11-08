const {Pool} = require('pg')

const pool = new Pool({
  user: 'root',
  password: '',
  host: 'localhost',
  port: 5432,
  database: ''
})

module.exports = pool;