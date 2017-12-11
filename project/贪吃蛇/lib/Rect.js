function Rect(options){
	this._init(options);
}
Rect.prototype = {
	constructor:Rect,
	_init:function(options){
		options = options || {};
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.w = options.w || 0;
		this.h = options.h || 0;
		this.color = options.color || "black";
		this.marginColor = options.marginColor || "gray";
		this.marginSize = options.marginSize || 2;
	},
	render:function(ctx){
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.strokeStyle = this.marginColor;
		ctx.lineWidth = this.marginSize;
		ctx.rect(this.x, this.y, this.w, this.h);
		ctx.fill();
		ctx.stroke();
	}
}