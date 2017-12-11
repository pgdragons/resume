function Food(options){
	this._init(options);
}
Food.prototype = {
	constructor:Food,
	_init:function(options){
		options = options || {};
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.w = options.w || 0;
		this.h = options.h || 0;
		this.src = options.src || "";
	},
	render:function(ctx){
		var that = this;
		var img = new Image();
		img.src = this.src;
		// img.onload = function(){
			ctx.drawImage(img, that.x, that.y,that.w,that.h);
		// }
	}
}