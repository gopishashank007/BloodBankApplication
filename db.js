var mysql = require('mysql');

var pool = mysql.createPool({

host: process.env.RDS_HOSTNAME,
user: process.env.RDS_USERNAME,
 password: process.env.RDS_PASSWORD,
port: process.env.RDS_PORT


});
console.log("pool");
exports.executeQuery = function(sql, callback) {
  // get a connection from the pool
  pool.getConnection(function(err, connection) {
    if(err) { console.error(err); callback(err,null); return; }
    // make the query
    connection.query(sql, function(err, results) {
      connection.release();
      if(err) { console.error(err); callback(err,null); return; }
      callback(null, results);
    });
  });
};
