var mysql = require("mysql");
var util = require("util");

// var conn = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"dica_an_dico"
// })

var conn = mysql.createConnection({
  host: "bcsjub8prsasbrpn2hhn-mysql.services.clever-cloud.com", // e.g., "mysql.render.com"
  user: "u2b19nui4a7kvv4r",
  password: "5PnTGS8ZHw494ZEjVT6U",
  database: "bcsjub8prsasbrpn2hhn",
});


var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
