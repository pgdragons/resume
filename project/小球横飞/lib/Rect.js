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
		this.fillColor = options.fillColor || "black";
		this.strokeWidth = options.strokeWidth || 0;
		this.txt = options.txt || "文本";
	},
	render:function(){
		ctx.beginPath();
		ctx.fillStyle = this.fillColor;
		ctx.fillRect(this.x, this.y, this.w, this.h);
		// 绘制右侧的文本内容
		ctx.strokeStyle = this.fillColor;
		ctx.textAlign = "left";
		ctx.strokeText(this.txt, this.x + this.w + 10,this.y + this.h/2);
	}
}