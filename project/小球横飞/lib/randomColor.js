function getRandomColor(){
	var red = parseInt(Math.random()*256);
	var green = parseInt(Math.random()*256);
	var blue = parseInt(Math.random()*256);
	// 准备颜色数据
	var color = "rgba("+red+","+green+","+blue+",1)";
	return color;
}