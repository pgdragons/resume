// 书写一个构造函数,在构造函数中调用一个初始化数据的方法
function Role(options){
	this._init(options);
}
/*
	结合原型对象,设计对象能够调用的方法 
	--> 此时的写法是使用一个自定义的对象去替换了Role这个
	构造函数原先默认的那个原型对象
*/
Role.prototype = {
	constructor:Role,
	_init:function(options){
		options = options || {};
		this.imageSrc = options.src || "./images/1.png";
		this.cutX = options.cutX || 0;
		this.cutY = options.cutY || 0;
		this.cutW = options.cutW || 0;
		this.cutH = options.cutH || 0;
		this.showX = options.showX || 0;
		this.showY = options.showY || 0;
		this.showW = options.showW || 0;
		this.showH = options.showH || 0;
		this.duration = options.duration || 100;
		this.index = 0;
		// 再来声明一个变量,用于表示方向值
		this.dirction = 0;
		this.image = {};
		this.time = {};
	},
	render:function(ctx){
		// 重新设置canvas的宽高
		var that = this;
		// 先来创建一个Image对象
		this.image = new Image();
		// 为这个Image对象设置src属性
		this.image.src = this.imageSrc;
		// 设定image的加载监听
		this.image.onload = function(){
			that.time = setInterval(function(){
				canvas.width = canvas.width;
				canvas.height = canvas.height;
				ctx.drawImage(that.image, 
				that.index*that.cutW,
				that.dirction*that.cutH,
				that.cutW,
				that.cutH,
				that.showX,
				that.showY,
				that.showW,
				that.showH
			);
			that.index ++;
			that.index %= 4;
			}, that.duration);
		}
	},
	// 为Role再来设计一个名为changeDir方法
	changeDir:function(keyCode){
		switch(keyCode){
			case 37:
				// 向左
				this.dirction = 1;
			break;
			case 39:
				// 向右
				this.dirction = 2;
			break;
			case 38:
				// 向上
				this.dirction = 3;
			break;
			case 40:
				// 向下
				this.dirction = 0;
			break;
		}
	},
	// 为Role再来设计一个名为changeSkin方法
	changeSkin:function(skinId){
		clearInterval(this.time);
		this.image.src = "./images/" + skinId + ".png"
	}
}