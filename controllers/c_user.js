const m_user = require('../model/m_user');

const pageHTML = (req, res) => {
    res.render('signin.html');
}

/* 1. code==500 服务器错误
2. code==1      邮箱错误
3. code==2      密码错误
4. code==200  登陆成功 跳转到话题列表页 客户端重定向 */
const handleSignin = (req, res) => {
    // console.log(req.body);
    const body = req.body;
    // console.log(body);
    m_user.checkEmail(body.email, (err, result) => {
        if (err) {
            return res.send({
                code: 500,
                message: '服务器错误'
            })
        }
        // 邮箱不存在
        if (!result[0]) {
            return res.send({
                code: 1,
                message: ' 邮箱不存在'
            })
        }
        // 密码错误
        if (result[0].password != body.password) {
            return res.send({
                code: 2,
                message: '密码错误'
            })
        }
        // code==200  登陆成功 跳转到话题列表页 客户端重定向 
        res.send({
            code: 200,
            message: '邮箱和密码都正确，可以登录了'
        })
        // req.session.user = result[0];
        // res.redirect('/');
    })

}

exports.pageHTML = pageHTML
exports.handleSignin = handleSignin