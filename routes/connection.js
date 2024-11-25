var mysql = require("mysql");
var util = require("util");

// var conn = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"dica_an_dico"
// })

var connection = mysql.createConnection({
  host: "mysql-21ffbda8-akashramsonule-0c32.b.aivencloud.com", // e.g., "mysql.render.com"
  user: "avnadmin",
  password: "AVNS_rKdpWGqMQ-DVDJwwQv4",
  database: "defaultdb",
});


var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
