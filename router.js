// 路由模块
// 1 导包
// 2 express.Router()获取对象router
// 3 router.get
// 4 导出对象router



const express = require('express');
const c_user = require('./controllers/c_user');
const topic = require('./controllers/c_topic');
const router = express.Router();


router.get('/signin', c_user.pageHTML);
router.post('/signin', c_user.handleSignin);
// 渲染话题页
router.get('/',topic.showTopIc);

module.exports = router;