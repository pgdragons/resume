/**
 * Created by Administrator on 2017/7/12.
 */
$(function () {
    // var url = 'http://192.168.11.2/data/';
    // url=url+"scare-buying.php";
    // $.ajax({
    //     url: '../data/scare-buying.php',
    //     type: 'GET',
    //     dataType: 'jsonp',
    //     jsonp:"_jsonp",
    //     success:function (data) {
    //         data = JSON.parse(data);
    //         console.log(data);
    //     },
    //     error:function () {
    //         console.log("请求有误");
    //     }
    // });
   var scareBuying=[
        {"imgName":"./images/scare-buying/jdContentImg1.jpg","info":"荣耀 畅玩6X 4GB 64GB 全网通4G手机 尊享版 铂光金","nowMoney":1699.0,"price":"¥2699.0"},
        {"imgName":"./images/scare-buying/jdContentImg2.jpg","info":"戴尔 热血游匣2游戏本","nowMoney":3858.0,"price":"¥4525.0"},
        {"imgName":"./images/scare-buying/jdContentImg3.jpg","info":"58英寸液晶电视58E6000","nowMoney":4899.0,"price":"¥5200.0"},
        {"imgName":"./images/scare-buying/jdContentImg4.jpg","info":"香浓 雀巢咖啡 两袋装","nowMoney":32.8,"price":35.3},
        {"imgName":"./images/scare-buying/jdContentImg5.jpg","info":"美宜畅纯牛奶饮品 原味 338ml*10 ","nowMoney":43.2,"price":"¥46.2"},
        {"imgName":"./images/scare-buying/jdContentImg6.jpg","info":"","nowMoney":"","price":""}
    ];
    for (i=0;i<scareBuying.length;i++){
        var a1 = $("<a href=''><img src='"+ scareBuying[i].imgName +"'/></a>");
        var a2 = $("<a href=''><p>"+scareBuying[i].info+"</p></a>");
        if(i==scareBuying.length-1){//最后一张图处理
            var p = $("<p><i></i><span>"+scareBuying[i].nowMoney+"</span></p>");
        }else{
            var p = $("<p><i>¥</i><span>"+scareBuying[i].nowMoney+"</span></p>");
        }
        var del = $("<del>"+scareBuying[i].price+"</del>");
        var div = $('<div></div>');
        var li = $('<li></li>');
        div.append(p);
        div.append(del);
        li.append(a1);
        li.append(a2);
        li.append(div);
        $('.scare-buying ul').append(li);
        li.addClass('col-lg-2');
    }
    $(".scare-buying li").hover(function () {
        if($(this).index()<scareBuying.length-1){
            $(".scare-buying li img").eq($(this).index()).stop().animate({top:-5},100);
        }
    },function () {
        if($(this).index()<scareBuying.length-1){
            $(".scare-buying li img").eq($(this).index()).stop().animate({top:0},100);
        }
    })
    $(".scare-buying li").eq(0).children("a").attr("href","./html/details.html");
});