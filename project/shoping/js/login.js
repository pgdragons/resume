/**
 * Created by Administrator on 2017/7/9.
 */
$(function () {
    // 点击输入框中的圆×，删除输入的内容
    $('.login-show .delete').on('click',function () {
         $(this).prev().val("");//上一个同胞(JQ写法)
    });
    // 电脑与手机登录切换
    var isClick = false;
    $('.icon-sys>img').on('click',function () {
        isClick = !isClick;
        if(isClick){
            $(this)[0].src = 'images/login/computer.png';
            $('.login-show').hide();
            $('.login-hide').show();
            $('.login-header>h4').html('手机扫码，安全登录');
        }else{
            $(this)[0].src = 'images/login/二维码-1.png';
            $('.login-show').show();
            $('.login-hide').hide();
            $('.login-header>h4').html('密码登录');
        }
    });
    // 点击右下角x关闭login窗口
    $('.btn-err').on('click',function () {
        $('.login').hide();
        $('#none').css({width:0,height:0,zIndex:0,position:"absolute",left:0,top:0,backgroundColor:"#fff",opacity:1});
    });
});

