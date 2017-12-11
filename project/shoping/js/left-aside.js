window.onload=function () {

    function $$(id) {
        return document.getElementById(id);
    };
    //设置按钮触摸离开事件
    // var logo=document.getElementsByClassName("concent-logo");
    // var btnLeft=document.getElementsByClassName("btnleft");
    // var btnRight=document.getElementsByClassName("btnright");
    // for (var i = 0; i < logo.length; i++) {
    //     for (var j = 0; j < logo.length; j++) {
    //         btnLeft[j].style.display="none !important";
    //         btnRight[j].style.display="none !important";
    //     }
    //     logo[i].index=i;
    //     logo[i].onmouseover=function(){
    //         // console.log("触摸"+i);
    //         btnLeft[this.index].style.display="block !important";
    //         btnRight[this.index].style.display="block !important";
    //     };
    //     logo[i].onmouseleave=function(){
    //         // console.log("离开"+i);
    //         btnLeft[this.index].style.display="none !important";
    //         btnRight[this.index].style.display="none !important";
    //     }
    // }
// 兼容性 鼠标滚动
    function scrollTop(){
        if (window.pageYOffset!=null) {
            return window.pageYOffset;
        }else{
            return document.documentElement.scrollTop;
        }
    };


    var li=$$("fix").getElementsByTagName("li");
    var list=$$("content-model").getElementsByTagName("li");
    var height = [];//获取每个模块list的自身高度
    var top = [];//获取每个模块距离页面顶部的距离
    for (var i = 0; i < list.length; i++){
        var h = list[i].offsetHeight;
        var t = list[i].offsetTop;
        height.push(h);
        top.push(t);
    };
    // console.log(height);
    // console.log(top);

    var step = 0;//滚动距离
    window.onscroll = function () {
        step = scrollTop();
        // console.log("滚动距离="+step);
        for (var j = 0; j < top.length; j++){
            // console.log(top[j]);
            // console.log("height="+height[j]);
            var temp = top[j+1]==undefined?top[j]+height[top.length-1]+1400:top[j+1]+1400;
            if(1400>step){
                li[j].style.backgroundColor="#ED145B";
            }else　if(1400+top[j]<step&&step<temp){
                for(var k = 0; k < li.length; k++){
                    li[k].style.backgroundColor="#ED145B";
                };
                li[j].style.backgroundColor = "gray";
            }else　if(step>height[top.length-1]+1400){
                li[j].style.backgroundColor="#ED145B";
            }
        }
    };
    //做侧边栏点击事件
    var timer;
    var current = 0;//步长
    var target = 0;//目标距离
    for (var i = 0; i < li.length; i++){
        li[i].index = i;
        // console.log(target);
        li[i].onclick = function () {
            clearInterval(timer);
            // for(var j = 0; j < li.length; j++){
            //     li[j].style.backgroundColor="#666";
            // };
            // li[this.index].style.backgroundColor = "#c81623";
            target = top[this.index]+1440;
            timer = setInterval(function () {
                current += (target-current)/10;
                window.scrollTo(0, current);
                // console.log("current="+current);
                // console.log("target="+target);
                if (parseInt(target-current)==0) {
                    clearInterval(timer);
                }
            },100);
        };

    };
    var distance=0;
    //返回顶部,点击事件
    var returnTop=$$("fix").getElementsByTagName("p")[0];
    returnTop.onclick=function(){
        clearInterval(timer);
        for (var i = 0; i < li.length; i++) {
            li[i].style.backgroundColor="#666";
        }
        timer=setInterval(function(){
            step+=(distance-step)/10;
            window.scrollTo(0, step);
            if (parseInt(distance-step)==0) {
                step=0;
                clearInterval(timer);
            }
        }, 100);
    }
};