import React from 'react';

import { Row, Col ,  Tabs, Icon ,Pagination,Button,message,notification} from 'antd';
import 'antd/dist/antd.css';

import Header from './common/header';
import Footer from './common/footer';
import Picgroup from './common/picgroup';
import VedioItem from './common/vedioitem';
import Comments from './detail/comments';

export default class Detail extends React.Component{
		constructor(){
		super();
		this.state = {
			data:{}
		}
	}
	componentDidMount(){
		var url = "http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="+this.props.params.id;
		fetch(url).then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				data:json
			});
		});
	}
	string2Html(html){
		return {__html:html}
	}
	render(){
		return (
			<div>
			{/*头部信息*/}
				<Header title="新闻详情"/>
				<Row>
					<Col span={2}></Col>
					<Col span={14}>
					{/*添加收藏新闻的按钮*/}
						<div onClick={this.addCollection.bind(this)}>
							<Button type="primary">收藏</Button>
						</div>
						<div dangerouslySetInnerHTML = {this.string2Html(this.state.data.pagecontent)}></div>
						<div>
							<Comments articleId={this.props.params.id}/>
						</div>
					</Col>
					<Col span={1}></Col>
					<Col span={5}>
					<Picgroup num='20'/>
					<div className="pc_news_vedio">
						<div className="pc_news_tag">视频</div>
							{/*开始视频列表的渲染*/}
							<div className="pc_news_vedio_item">
								<VedioItem picNum="1" num="3" type="guonei"/>
								<VedioItem picNum="2" num="7" type="guoji"/>
							</div>
						</div>	
					</Col>
					<Col span={2}></Col>
				</Row>
			{/*底部信息*/}
				<Footer />	
			</div>
		);
	}

	addCollection(){
		if(localStorage.useid!=''){
			var url = "http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.useid+"&uniquekey=" + this.props.params.id;
			fetch(url).then((response)=>{
				return response.json();
			}).then((json)=>{
				message.info('新闻收藏成功');
			});
		}else{
			notification.open({
			    message: '用户未登录',
			    description: '该操作需要先登录账号'
			  });
		}
	}
}



