window.onload=function(){
	//放大镜功能
	fangdajing();

}
	$(function(){
			$(".top-ri").click(function(event) {
		$(".hintss").css({
			display: "block"
		});
		setTimeout(function(){
				$(".hintss").css({
					display: "none"
				});
		},3000)
	});
})	
	