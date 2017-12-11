// 书写一个构造函数,在构造函数中调用一个初始化数据的方法
function Ball(options){
	this._init(options);
}
/*
	结合原型对象,设计对象能够调用的方法 
	--> 此时的写法是使用一个自定义的对象去替换了Role这个
	构造函数原先默认的那个原型对象
*/
Ball.prototype = {
	constructor:Ball,
	_init:function(options){
		options = options || {};
		// 设计好小球绘制所需的属性
		this.color = options.color || "black";
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.radius = options.radius || 0;
		this.decreaseX = options.decreaseX || -1;
		this.decreaseY = options.decreaseY || -1;
	},
	render:function(ctx){
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius, 
			0, 2*Math.PI, false);
		ctx.fill();
	},
	update:function(){
		this.x += this.decreaseX;
		this.y += this.decreaseY;
		this.radius --;
		// 当这个指定的小球的半径小于等于0时,再来arc会出错
		// 在这个方法中,判断当小球半径小于等于0时,将这个对应的小球从数组中移除掉
		if(this.radius<=0){
			/*从balls这个数组中,
			去获取到当前这个小球对象在整个balls
			数组中所在的下标位置
			*/
			var index = balls.indexOf(this);
			/*根据获取到的位置,从数组中去移除该位置下的
			那一个指定的ball对象
			*/
			balls.splice(index,1);
		}
	}
}