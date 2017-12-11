import React from 'react';
import { Row, Col ,  Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';

import Obj from './comom';
import {Link} from 'react-router';

export default class VedioItem extends React.Component{
	constructor(){
		super();
		this.state = {
			datas:[]
		};
	}
	componentDidMount(){
		var url = "http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count=" + this.props.num;
		fetch(url)
		.then((response)=>{
			return response.json()
		})
		.then((json=>{
			this.setState({
				datas:json
			});
		}));
	}
	render(){
		var content = this.state.datas.length?
		this.state.datas.map((item,index)=>{
			return (
				
				<li key={index}>
					<Link to={`/detail/${item.uniquekey}`}>
					<div  style={{color:"black"}}>{item.realtype}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{item.title}</div>	
					</Link>
				</li>
			
			);
		})
		:<div>努力加载中...</div>;

		// 获取到对应的num个数
		var picNum = this.props.picNum;
		// 根据num进行区分设置
		var arr = [];//作为容器
		if(this.state.datas.length){
				for(var i=0;i<picNum;i++){
					arr.push(
							
						<div 
							key={i} 
							className="pc_news_vedio_item_header" style={{width:picNum==1?"100%":"45%",marginRight:picNum==1?0:"5%"}}>
						<Link to={`/detail/${this.state.datas[i].uniquekey}`}>
							<img src={this.state.datas[i].thumbnail_pic_s}/>
							
							<div className="pc_news_item_ctl">
								<img src="./src/images/video_icon.png"/>
								<p>{this.state.datas[i].title}</p>
							</div>
							</Link>
						</div>
						
						
				)
			}
		}
		var header = this.state.datas.length?
		<div style={{overflow:"hidden"}}>{arr}</div>:<div>加载中....</div>
		return (
			<div style={{marginTop:"10px"}}>
				{header}
				<ul>{content}</ul>
			</div>
		);
	}
}