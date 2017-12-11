/**
 * Created by Administrator on 2017/7/13.
 */
$(function () {
    for (var i=0;i<$(".goodType li").length-1;i++){
        var div = $("<div></div>");
        div.html($(".menu-content").html());
        div.addClass("menu-content");
        $("#ads").append(div);
    };
    $(".goodType li").hover(function () {
        $(".menu-content").eq($(this).index()).show();
    },function () {
        $(".menu-content").hover(function () {
            $(".menu-content").show();
        },function () {
            $(".menu-content").hide();
        });
        $(".menu-content").eq($(this).index()).hide();
    });
});