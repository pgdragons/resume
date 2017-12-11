/**
 * Created by Administrator on 2017/7/10.
 */
$(function(){
// 	var goodType=["家用电器","运营商",""]
// 	$(".goodType")
    var scrollAds = ["images/ads/ads-1.jpg","images/ads/ads-2.jpg","images/ads/ads-3.jpg","images/ads/ads-4.jpg","images/ads/ads-5.jpg","images/ads/ads-6.jpg",]
    var adsBottom =["images/ads/ads-bottom-1.jpg","images/ads/ads-bottom-2.png","images/ads/ads-bottom-3.png"];
    $.each(scrollAds,function(index, val) {
        // var img = $('<img src='+val+'>');
        // var li = $('<li></li>');
        // li.append(img);
        // $('#ads .scroll-ads ul').append(li);

        // $('#ads .scroll-ads ul img')[index].src = val;
        $('#carousel-example-generic .carousel-inner img')[index].src = val;
    });
    $.each(adsBottom,function(index, val) {
        // var img = $('<img src='+val+'>');
        // var li = $('<li></li>');
        // li.append(img);
        // $('#ads .ads-bottom ul').append(li);
        $('#ads .ads-bottom ul img')[index].src = val;
    });
    // ads触摸
    $('#carousel-example-generic').on('mouseover',function(){
        // $('#carousel-example-generic .left').show();
        // $('#carousel-example-generic .right').show();
    });
    // ads离开
    $('#carousel-example-generic').on('mouseleave',function(){
        // $('#carousel-example-generic .left').hide();
        // $('#carousel-example-generic .right').hide();
    });
    // 右侧图片及服务
    $('.ads-right .right-big-img img')[0].src="./images/ads/ads-right.jpg";
    $('.ads-right .right-big-img img').eq(0).css({'width':'100%','height':310});
    var txt=["话费","机票","酒店","游戏","企业购","加油卡","电影票","火车票","众筹","理财","礼品卡","白条"];
    for (var i = 0; i < txt.length; i++) {
        var a1 = $('<a href=""></a>');
        var a2 = $("<a href=''>"+txt[i]+"</a>");
        var li = $('<li></li>');
        li.append(a1);
        li.append(a2);
        var icons = "./images/ads/sprite_fs@1x.png";

        a1.css({"background-image":" url('"+ icons +"')"});
        if (i<4) {
            a1.css({"background-position":(-i*44)+"px 0px"});
        }else if(i>=4&&i<8){
            a1.css({"background-position":(-i%4*44)+"px" +" -44px"});
        }else if(i>=8&&i<12){
            a1.css({"background-position":(-i%4*44)+"px" +" -88px"});
        }
        $('.services ul').append(li);
    };
})