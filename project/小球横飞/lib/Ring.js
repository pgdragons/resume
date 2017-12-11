function Ring(options){
	this._init(options);
}
Ring.prototype = {
	constructor:Ring,
	_init:function(options){
		options = options || {};
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.radius = options.radius || 0;
		this.startAngle = options.startAngle || 0;
		this.endAngle = options.endAngle || 0;
		this.strokeColor = options.strokeColor || "black";
		this.strokeWidth = options.strokeWidth || 1;
	},
	render:function(ctx){
		ctx.lineWidth = this.strokeWidth;
		ctx.strokeStyle = this.strokeColor;
		ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, false);
		ctx.stroke();
	}
}