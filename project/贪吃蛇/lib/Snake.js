function Snake(options){
	this._init(options);
}
Snake.prototype = {
	constructor:Snake,
	_init:function(options){
		options = options || {};
		this.dirction = options.dirction || "right";
		// 准备一个数组,用于保存所有的rect对象
		this.arr = [];
		for(var i=0;i<10;i++){
			var rect = new Rect({
				x:i*wh,
				y:wh,
				w:wh,
				h:wh,
				color:"orange",
				marginColor:"green",
				marginSize:3
			});
			this.arr.splice(0,0,rect);
		}
		// 来单独设置头的颜色
		this.header = this.arr[0];
		// 修改headercolor属性
		this.header.color = "blue";
	},
	render:function(ctx){
		// 从给定的数组中取出每一个rect对象,将每一个rect对象进行渲染
		for(var i=0;i<this.arr.length;i++){
			this.arr[i].render(ctx);
		}
	},
	// 添加一个移动的方法
	move:function(ctx,food){
		// 用于实现小蛇是否死亡的判断
		var isDead = this._isDead();
		if(isDead){
			alert("小蛇死亡");
		}
		var rect = new Rect({
			x:this.header.x,
			y:this.header.y,
			w:wh,
			h:wh,
			color:"orange",
			marginColor:"green",
			marginSize:3
		});
		// 此时对于header中的x跟y是需要根据特定的方向来进行区分设置的
		if(this.dirction == "right"){
			this.header.x += wh;
		}else if(this.dirction == "left"){
			this.header.x -= wh;
		}else if(this.dirction == "top"){
			this.header.y -= wh;
		}else if(this.dirction == "bottom"){
			this.header.y += wh;
		}
		this.arr.splice(1,0,rect);// 往下标为1的位置上插入一个rect对象
		// 判断小蛇是否已经吃到了食物
		var isEated = this._isEatFood(food);
		if(!isEated){
			// 在这个方法中,去修改this.arr中的值
			this.arr.pop();
		}else{
			// 修改food对象的x y 值
			this._changeFood(food);
		}
		this.render(ctx);
	},
	changeDirction:function(keyCode){
		switch(keyCode){
			case 37:
				if(this.dirction!="right"){
					// 向左
					this.dirction = "left";
				}
			break;
			case 39:
				if(this.dirction!="left"){
					// 向左
					this.dirction = "right";
				}
			break;
			case 38:
				if(this.dirction!="bottom"){
					// 向上
					this.dirction = "top";
				}
			break;
			case 40:
				if(this.dirction!="top"){
					// 向下
					this.dirction = "bottom";
				}
			break;
		}
	},
	_isEatFood:function(food){
		/*	
			只要两个rect对象的x 跟 y相等 , 
			就表明header跟食物重叠了
		*/
		if(this.header.x == food.x 
			&& this.header.y ==food.y){
			return true;
		}
		return false;
	},
	_changeFood:function(food){
		// 为了实现食物不会创建在蛇身上
		var isCreateFailed = true;
		var x;
		var y;
		while(isCreateFailed){
			isCreateFailed = false;
			x = parseInt(Math.random()*horizonNum)*wh;
			y = parseInt(Math.random()*verticalNum)*wh;
			for(var i=0;i<this.arr.length;i++){
				if(this.arr[i].x == x 
					&& this.arr[i].y == y){
					// 如果这个满足,意味着食物这个点就是出现在了蛇身上的
					isCreateFailed = true;
					break;
				}
			}
		}
		food.x = x;
		food.y = y;
	},
	_isDead:function(){
		/*
			撞自己身上 
			-->header上的x 跟 y跟
			蛇身上的某一个rect对象上的x 跟 y
			同时相等
		*/
		for(var i = 1;i<this.arr.length;i++){
			if(this.header.x == this.arr[i].x &&
				this.header.y == this.arr[i].y){
				return true; // 结束当前方法的继续往下执行
			}
		}
		/*
			撞到边界
			x : 小于0  or   大于最大值
			y : 小于0  or   大于最大值
		*/
		if(this.header.x<0 
			|| this.header.x > canvas.width
			|| this.header.y<0
			|| this.header.y>canvas.height
			){
			// alert(this.header.y);
			return true;
		}
		return false;
	}
}