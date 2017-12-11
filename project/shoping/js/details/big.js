// 1. 查找所需的元素
function fangdajing(){
		var box = document.getElementById("boxd");
		var specImg = box.children[0];
		var detailImg = box.children[1];
		var bigImg = detailImg.children[0];
		var img = specImg.children[0];
		var deck = specImg.children[1];
		// 2. 设定触摸事件 --> 先使得deck跟detailImg显示跟隐藏
		box.onmouseover = function(){
			detailImg.style.display = "block";
			deck.style.display = "block";
		}
		box.onmouseleave = function(){
			detailImg.style.display = "none";
			deck.style.display = "none";
		}
		/*
		3. 设定鼠标的滑动事件 
		-> 为哪个元素设置
		-> 书写滑动事件目的
		-> 使得deck的left跟top发生变化
		-> 获取到鼠标触摸的位置
		*/ 
		specImg.onmousemove = function(event){
			var ev = event || window.event;
			// xxxxx
			var x = ev.clientX - box.offsetLeft - deck.offsetWidth/2;
			var y = ev.clientY + window.scrollY - box.offsetTop - deck.offsetHeight/2;
			// 3.1 对于获取到的x,y值的左 顶边距需要进行判断
			if(x<=0){
				x = 0;
			}
			if(y<=0){
				y = 0;
			}
			// 3.2 对于获取到的x,y值的右 底边距需要进行判断
			if(x>=box.offsetWidth - deck.offsetWidth){
				x = box.offsetWidth - deck.offsetWidth;
			}
			if(y>=box.offsetHeight - deck.offsetHeight){
				y=box.offsetHeight - deck.offsetHeight;
			}
			// 3.3 设定deck的lef以及top
			deck.style.left = x + "px";
			deck.style.top = y + "px";
			// 3.4 设定detailImg中的img的left以及top值
			bigImg.style.left = -x*detailImg.offsetWidth/specImg.offsetWidth + "px";
			bigImg.style.top = -y*detailImg.offsetHeight/specImg.offsetHeight + "px";
		}
		// 第二个模块
		var specList = document.getElementById("spec-list");
		var specUl = specList.children[0];
		var specLis = specUl.children;
		var prevBtn = document.getElementById("prev");
		var nextBtn = document.getElementById("next");
		var current = 0;
		var target = 0;
		nextBtn.onclick = function(){
			target-=210;
			console.log(target);
			if(target<=-210*3){
				target=-210*2
			}
			
		}
		prevBtn.onclick = function(){
			target += 210;
			if(target>0){
				target=0;
			}
		}
		var timer=setInterval(function(){
			current += (target - current)/10;
			specUl.style.left = current + "px";
		}, 10);
		var bigImgs = ["../images/callphone/big1.jpg","../images/callphone/big2.jpg","../images/callphone/big3.jpg","../images/callphone/big4.jpg","../images/callphone/big5.jpg","../images/callphone/big6.jpg","../images/callphone/big7.jpg","../images/callphone/big8.jpg","../images/callphone/big9.jpg"];
		var biggestImgs = ["../images/callphone/big01.jpg","../images/callphone/big02.jpg","../images/callphone/big03.jpg","../images/callphone/big04.jpg","../images/callphone/big05.jpg","../images/callphone/big06.jpg","../images/callphone/big07.jpg","../images/callphone/big08.jpg","../images/callphone/big09.jpg"];
		// 对于小图标的触摸事件的介绍
		for(var i = 0;i<specLis.length;i++){
			specLis[i].index = i;
			specLis[i].onmouseover = function(){
				bigImg.src = biggestImgs[this.index];
				img.src = bigImgs[this.index];
			}
		}
}