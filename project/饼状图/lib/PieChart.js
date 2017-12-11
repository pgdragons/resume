function PieChart(options){
	this._init(options);
}
PieChart.prototype = {
	constructor:PieChart,
	_init:function(options){
		options = options || {};
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.radius = options.radius || 0;
		this.startAngle = options.startAngle || 0;
		this.endAngle = options.endAngle || 0;
		this.color = options.color || "black";
		this.txt = options.txt || "吃饭";
		this.txtX = options.txtX || 0;
		this.txtY = options.txtY || 0;
	},
	render:function(ctx){
		ctx.beginPath();
		// 绘制扇形的实现
		ctx.moveTo(this.x, this.y);
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, false);
		ctx.fill();
		// 先来绘制线条
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.strokeStyle = this.color;
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.txtX, this.txtY);
		var angle = (this.endAngle - this.startAngle)/2 + this.startAngle;
		ctx.lineTo(this.txtX + (angle>Math.PI/2?-30:30), this.txtY);
		ctx.stroke();
		ctx.textAlign = angle>Math.PI/2?"left":"right";
		// 再来绘制扇形周边的文本内容
		ctx.strokeText(this.txt, this.txtX + (angle>Math.PI/2?-30:30), this.txtY - 10);
	}
}