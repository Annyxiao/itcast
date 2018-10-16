// 导包
const db = require('../tools/sqlhelper');


// 验证邮箱是否存在数据库中
const checkEmail = function(email,callback){
    
    const sqlstr = 'SELECT *FROM `users` WHERE email=?';
    db.query(sqlstr, email, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
        // callback(err,data);
    });
}

exports.checkEmail = checkEmail;

    