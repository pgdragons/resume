/**
 * Created by Administrator on 2017/7/8.
 */

$(document).ready(function () {
    // 头部触摸事件
   $('.dropdown').hover(function () {
       $(this).children('.dropdown-menu').show();
   },function () {
       $(this).children('.dropdown-menu').hide();
   });
   // 点击登录 显示登录窗口
    $('#login').on('click',function () {
        $('.login').show();
        $('.login').css({zIndex:5});
        // 在box内的子元素之后添加div元素
        $('#none').css({width:"100%",height:"100%",zIndex:1,position:"absolute",left:0,top:0,backgroundColor:"#eeeeee",opacity:0.6});
    })
});