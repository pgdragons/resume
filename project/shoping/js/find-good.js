/**
 * Created by Administrator on 2017/7/13.
 */
$(function () {
    var findGoods = [
        {"good":"Beats蓝牙无线音响","imgSrc":"./images/find/find-img1.jpg"},
        {"good":"Bose 测心率版智能耳机","imgSrc":"./images/find/find-img2.jpg"},
        {"good":"索爱拉杆户外音响","imgSrc":"./images/find/find-img3.jpg"},
        {"good":"学院风牛仔衬衫","imgSrc":"./images/find/find-img4.jpg"},
        {"good":"荣耀Magic 曲面手机","imgSrc":"./images/find/find-img5.jpg"},
        {"good":"JBL多媒体音箱","imgSrc":"./images/find/find-img6.jpg"}
    ];
    var album = [
        {
            "page":[
                {
                    "titleTop":"Hold印花T，潮男风骚刷新时髦度",
                    "imgSrc":[
                        "./images/find/center-01.jpg",
                        "./images/find/center-02.jpg",
                        "./images/find/center-03.jpg"
                    ]
                },
                {
                    "titleBottom":"胖妞挑衣难，显瘦大码宽松T恤来帮你",
                    "imgSrc":[
                        "./images/find/center-04.jpg",
                        "./images/find/center-05.jpg",
                        "./images/find/center-06.jpg"
                    ]
                }
            ]
        },
        {
            "page":[
                {
                    "titleTop":"商务4G手机，轻松让你在职场站稳脚跟",
                    "imgSrc":[
                        "./images/find/center-07.jpg",
                        "./images/find/center-08.jpg",
                        "./images/find/center-09.jpg"
                    ]
                },
                {
                    "titleBottom":"常熬夜皮肤松弛，紧致面膜来做青春的保鲜器",
                    "imgSrc":[
                        "./images/find/center-10.jpg",
                        "./images/find/center-11.jpg",
                        "./images/find/center-12.jpg"
                    ]
                }
            ]
        },
        {
            "page":[
                {
                    "titleTop":"不再等肾8，这几款旗舰手机已降至冰点",
                    "imgSrc":[
                        "./images/find/center-13.jpg",
                        "./images/find/center-14.jpg",
                        "./images/find/center-15.jpg"
                    ]
                },
                {
                    "titleBottom":"森系棉麻连衣裙，做个优雅女文青",
                    "imgSrc":[
                        "./images/find/center-16.jpg",
                        "./images/find/center-17.jpg",
                        "./images/find/center-18.jpg"
                    ]
                }
            ]
        }
    ];
    var plane = [
        {
            "title":"家电",
            "imgSrc":[
             "./images/find/right-01.jpg",
             "./images/find/right-02.jpg",
             "./images/find/right-03.jpg",
             "./images/find/right-04.jpg",
             "./images/find/right-05.jpg",
             "./images/find/right-06.jpg"
         ],
            "text":[
                "美的（Midea）CF9BD/N3-T1空气除湿机抽湿器多功能数显干衣水满自动断电静音",
                "TCL 正1.5匹 定速 冷暖 空调挂机（时尚印花 隐藏显示屏）（KFRd-35GW/FC23+）",
                "奥克斯（AUX）正1.5匹 冷暖 定速 空调挂机(KFR-35GW/HFJ+3)",
                "海尔（Haier）BCD-160TMPQ 160升 两门冰箱  冷冻速度快  经济实用两门冰箱",
                "奥克斯（AUX）大1匹 一级能效 变频冷暖 智能 30秒速冷 空调挂机 京东微联APP控制(KFR-26GW/BpTYC1+1)",
                "美的(Midea)BCD-206TM(E) 206升 时尚三门三温冰箱 日耗电0.49度 HIPS环保内胆 闪白银"
            ]
        },
        {
            "title":"手机通讯",
            "imgSrc":[
                "./images/find/right-iphone01.jpg!q90.webp",
                "./images/find/right-iphone02.jpg!q90.webp",
                "./images/find/right-iphone03.jpg!q90.webp",
                "./images/find/right-iphone04.jpg!q90.webp",
                "./images/find/right-iphone05.jpg!q90.webp",
                "./images/find/right-iphone06.jpg!q90.webp"
            ],
            "text":[
                "Apple iPhone 6 32G 金色 移动联通电信4G手机",
                "一加手机5 (A5000) 6GB+64GB 月岩灰 全网通 双卡双待 移动联通电信4G手机",
                "Apple iPhone 7 (A1660) 128G 玫瑰金色 移动联通电信4G手机",
                "荣耀8青春版 全网通 标配版 3GB+32GB 流光金",
                "荣耀 畅玩6A 2GB+16GB 金色 全网通4G手机 双卡双待",
                "小米 红米 4X 全网通版 2GB+16GB 香槟金 移动联通电信4G手机"
            ]
        },
        {
            "title":"生活电器",
            "imgSrc":[
                "./images/find/right-iphone01.jpg!q90.webp",
                "./images/find/right-iphone02.jpg!q90.webp",
                "./images/find/right-iphone03.jpg!q90.webp",
                "./images/find/right-iphone04.jpg!q90.webp",
                "./images/find/right-iphone05.jpg!q90.webp",
                "./images/find/right-iphone06.jpg!q90.webp"
            ],
            "text":[
                "Apple iPhone 6 32G 金色 移动联通电信4G手机",
                "一加手机5 (A5000) 6GB+64GB 月岩灰 全网通 双卡双待 移动联通电信4G手机",
                "Apple iPhone 7 (A1660) 128G 玫瑰金色 移动联通电信4G手机",
                "荣耀8青春版 全网通 标配版 3GB+32GB 流光金",
                "荣耀 畅玩6A 2GB+16GB 金色 全网通4G手机 双卡双待",
                "小米 红米 4X 全网通版 2GB+16GB 香槟金 移动联通电信4G手机"
            ]
        },
        {
            "title":"休闲跑鞋",
            "imgSrc":[
                "./images/find/right-iphone01.jpg!q90.webp",
                "./images/find/right-iphone02.jpg!q90.webp",
                "./images/find/right-iphone03.jpg!q90.webp",
                "./images/find/right-iphone04.jpg!q90.webp",
                "./images/find/right-iphone05.jpg!q90.webp",
                "./images/find/right-iphone06.jpg!q90.webp"
            ],
            "text":[
                "Apple iPhone 6 32G 金色 移动联通电信4G手机",
                "一加手机5 (A5000) 6GB+64GB 月岩灰 全网通 双卡双待 移动联通电信4G手机",
                "Apple iPhone 7 (A1660) 128G 玫瑰金色 移动联通电信4G手机",
                "荣耀8青春版 全网通 标配版 3GB+32GB 流光金",
                "荣耀 畅玩6A 2GB+16GB 金色 全网通4G手机 双卡双待",
                "小米 红米 4X 全网通版 2GB+16GB 香槟金 移动联通电信4G手机"
            ]
        }
    ];
    $.each(findGoods,function (index,val) {
        var temp = "<a href='#'><p>"+val.good+"</p><img src='"+val.imgSrc+"'/></a>";

        var li = $("<li></li>");
        li.append($(temp));
        $("#find-life-left .find-life-concent").append(li);
    });
    // 发现好货触摸特效
    $("#find-life-left .find-life-concent li").hover(function () {
        $("#find-life-left .find-life-concent a img").eq($(this).index()).
        css({"box-shadow":" 0px 0px 5px 2px gray","transform":"translateZ(-100deg)"});
    },function () {
        $("#find-life-left .find-life-concent a img").eq($(this).index()).css({"box-shadow":"none",zIndex:0});
    });
    // 优品专辑
    var ul = $("<ul></ul>");
    for (var i=0;i<album.length;i++){
         var page = $("<li></li>");//每页
        var div1 = $("<div></div>");//top图片放置
        var head1= $("<header>"+album[i].page[0].titleTop+"</header>");
        // 标题
        page.append(head1);
        // 图片
        for (var j=0;j<album[i].page[0].imgSrc.length;j++) {
           var img1 = $("<img src="+album[i].page[0].imgSrc[j]+" />");
            div1.append(img1);
        };
        page.append(div1);
        var head2= $("<header>"+album[i].page[1].titleBottom+"</header>");
        // 标题
        page.append(head2);
        // 图片
        var div2 = $("<div></div>");//bottom图片放置
        for (var k=0;k<album[i].page[1].imgSrc.length;k++) {
            var img2 = $("<img src="+album[i].page[1].imgSrc[k]+" />");
            div2.append(img2);
        };
        page.append(div2);
        ul.append(page);
    };
    $("#find-life-center .find-life-concent").append(ul);
    // 排行榜
    var ul2 = $("<ul></ul>");
    var head2= $("<header></header>");
    $.each(plane,function (index,val) {
        var page = $("<li></li>");//每页
        var a1 = $("<a>"+val.title+"</a>");
        var div = $("<div></div>");//top图片放置
        var dl = $("<dl></dl>");
        for (var i=0;i<val.imgSrc.length;i++){
            var dd = $("<dd></dd>");
            var img = $("<img src='"+val.imgSrc[i]+"'/>");
            var a2 = $("<a>"+val.text[i]+"</a>");
            dd.append(img);
            dd.append(a2);
            dl.append(dd);
        }
        if (index==plane.length-1){
            a1.css({borderRight:0});
        }
        div.append(dl);
        head2.append(a1);
        page.append(div);
        ul2.append(page);

    });
    $("#find-life-right .find-life-concent").append(head2);
    $("#find-life-right .find-life-concent").append(ul2);

    var width = $("#find-life-right header a").innerWidth();
    $("#find-life-right .find-life-concent span").css({width:width});
        // var  left = i*388/width;
        $("#find-life-right header a").mouseover(function () {
            console.log($(this).index());
            $("#find-life-right .find-life-concent span").stop().animate({left:(($(this).index())*(width+1))},'slow');
            $("#find-life-right .find-life-concent ul").stop().animate({left:($(this).index())*-388},'slow');
        })
});