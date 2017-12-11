function SkillCircle(options){
	this._init(options);
}
SkillCircle.prototype = {
	constructor:SkillCircle,
	_init:function(options){
		options = options || {};
		this.data=options.data||{};
		this.group = {};
		this.tgroup={};
	},
	render:function(layer){
		this.group=new Konva.Group({
			x:stage.width()/2,
			y:stage.height()/2
		});
		this.tgroup=new Konva.Group({
			x:stage.width()/2-this.data[0].radius/(this.data.length==4?4:5.5)/2,
			y:stage.height()/2-6
		});
		for(var i in this.data){
			var item=this.data[i];
			var x=Math.cos(item.angle*Math.PI/180)*item.radius;
			var y=Math.sin(item.angle*Math.PI/180)*item.radius;
			var skillCircle=new Konva.Circle({
				x : x,
				y : y,
				radius:item.radius/(this.data.length==4?4:5.5),
				fill:item.fill,
				stroke:item.stroke,
				strokeWidth:item.strokeWidth
			})
			// 文本
			var text=new Konva.Text({
				x:x,
				y:y,
				text:item.text,
				fill:"#fff",
				fontSize:12,
				align:"center",
				width:item.radius/(this.data.length==4?4:5.5),
			});
			this.group.add(skillCircle);
			this.tgroup.add(text);
		}
		layer.add(this.group);
		layer.add(this.tgroup);
	},
	rotate:function(layer){
		var that=this;
		var angle=this.data.length==4?30:-30;
		var anim = new Konva.Animation(function(frame) {
	   		var time =frame.timeDiff / 1000;
	    	that.group.rotate(angle*time);
			that.tgroup.rotate(angle*time);
	    	that.tgroup.children.rotate(-angle*time);
	    }, layer);
	    anim.start();
	}
}