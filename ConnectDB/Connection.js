const mysql = require('mysql');


var connection = mysql.createConnection({
user: 'root',
password:'',
database : 'Product_DB'
});

connection.connect((err)=>{
if(err){
  console.log(err)
}else {
  console.log('Connected to the MySQL server.')
}

});

module.exports.connection = connection;