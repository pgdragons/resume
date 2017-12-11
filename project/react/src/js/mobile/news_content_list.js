import React from 'react';
import { Row, Col ,  Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';

export default class News_content_list extends React.Component{
	constructor(){
		super();
		this.state={
			datas:[]
		};
	}
	componentDidMount(){
			var self = this;
			var url='http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type='+this.props.type+'&count=10';
			// var url='http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=6';
			fetch(url)
			  .then(function(response) {
			    return response.json()
			  }).then(function(json) {
			 self.setState({
		    	datas:json
		    	});
			  });
		}
	render(){

		var content=this.state.datas.length?this.state.datas.map(function(item,index){
			return(
				<li key={index}  className="mobile_news_list">
					<div className="mobile_news_list_title">
						<p className="mobile_news_list_title_text">{item.title}</p>
						<p className="mobile_news_list_title_auto">{item.author_name}</p>
						<p className="mobile_news_list_title_pinglun">评论:{item.date}</p>
					</div>
					<div className="mobile_news_list_img">
						<img src={item.thumbnail_pic_s} className="mobile_news_list_img"/>
					</div>
					
					
				</li>
				);
		})
		:<div>加载中..<img src='./src/images/10.gif'/></div>;
		return (
			<div className="mobile_new_list_text_box">
				<ul>
					{content}
				</ul>
			</div>
		);
	}
}