// 1 导包
const mysql = require('mysql');

// 链接数据库
const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'itcast'  
});
connection.connect();

module.exports = connection;