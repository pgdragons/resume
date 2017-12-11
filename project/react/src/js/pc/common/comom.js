module.exports = {
	PICGROUP_URL:"http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=4",
	stamp2Date:function(timestamp){
		var date =new Date(parseInt(timestamp)*1000);
		var year=date.getFullYear();
		var month=date.getMonth()+1;
		var day=date.getDate();
		return year+'/'+month+'/'+day;
	},
		COMMOMPATH:'http://newsapi.gugujiankong.com/Handler.ashx?',
		WEATHER:'http://tq.360.cn/api/weatherquery/querys?app=tq360&code=101230201&t=1504681624857&c=1504782855058&_jsonp=renderData&_=1504681624862'
}