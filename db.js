const Pool = require('pg').Pool;
const pool = new Pool({
    user:'apple',
    password:'20202020',
    database:'mydb',
    host:"localhost",
    port:5432
});


module.exports = pool;

