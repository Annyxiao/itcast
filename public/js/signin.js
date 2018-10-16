$(function () {

    //     $('form').on('submit', function (e) {
    //         e.preventDefault();
    //         const formData = $(this).serialize();
    //         $.ajax({
    //             url: '/signin',
    //             type: 'post',
    //             data: formData,
    //             success: function (info) {
    //                 console.log(info);
    //                 /* 1. code == 500 服务器错误
    //                 2. code == 1      邮箱错误
    //                 3. code == 2      密码错误
    //                 4. code == 200  登陆成功 跳转到话题列表页 客户端重定向
    //  */
    //                 switch (info.code) {
    //                     case 500:
    //                         alert(info.message);
    //                         break;
    //                     case 1:
    //                         alert(info.message);
    //                         break;
    //                     case 2:
    //                         alert(info.message);
    //                         break;
    //                     case 200:
    //                         window.location.href = '/';
    //                         break;
    //                     default:
    //                         break;
    //                 }
    //             }
    //         })

    //     })


    // 客户端发送表单请求
    // 1. 获取表单元素绑定事件
    // 2. 取消默认提交
    // 3. 获取表单数据
    // 4. 发送ajax

    // 箭头函数 ES6 不是所有的浏览器都支持
    $('#signin_form').on('submit', function (e) {
        e.preventDefault();
        var formdata = $(this).serialize();
        console.log(formdata);
        $.post('/signin', formdata, function (data) {
            console.log(data.code);
            if (data.code === 200) {
                // 跳转
                window.location.href = '/';
            } else {
                alert(data.message)
            }
        });

    });








});