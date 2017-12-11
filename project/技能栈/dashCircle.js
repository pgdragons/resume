function DashCircle(options){
	this._init(options);
}
DashCircle.prototype = {
	constructor:DashCircle,
	_init:function(options){
		options = options || {};
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.outerRadius = options.outerRadius || 0;
		this.innerRadius = options.innerRadius || 0;
		this.stroke=options.stroke||"gray";
		this.strokeWidth=options.strokeWidth||0;
	},
	render:function(layer){
		//创建组保存虚线圆
		var group=new Konva.Group();
		//创建内侧虚线圆
		var innerCircle=new Konva.Circle({
			x:this.x,
			y:this.y,
			radius:this.innerRadius,
			stroke:this.stroke,
			strokeWidth:this.strokeWidth,
			dash:[10,4]
		});
		//创建外侧虚线圆
		var outerCircle=new Konva.Circle({
			x:this.x,
			y:this.y,
			radius:this.outerRadius,
			stroke:this.stroke,
			strokeWidth:this.strokeWidth,
			dash:[10,4]
		});
		group.add(innerCircle);
		group.add(outerCircle);
		layer.add(group);
	}
}

