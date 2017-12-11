import React from 'react';
import { Row, Col ,  Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';
import {Link} from 'react-router';

export default class Hot_article extends React.Component{
	constructor(){
		super();
		this.state ={
			datas:[]
		};
	}
	componentDidMount(){
		var url="http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=caijing&count=15";
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
		var datas= this.state.datas;
		var content=datas.length?
		datas.map((item,index)=>{
			return(
				<li key={index}>
					<span 
					style={{backgroundColor:index==0?"red":"gray",color:"#fff",fontSize:"10px",float:"left",width:"30px",textAlign:"center"}}>{index + 1}</span>
					<Link to={`/detail/${item.uniquekey}`}>
					<p style={{color:"black"}}>{item.title}</p>
					</Link>
				</li>
			);
		}):<div>加载中...</div>
		return (
				<div className="hot_article">
					<div className="hot_article_top">
					<p>24小时热文</p>					
				</div>
				<div className="hot_article_cont">	
					<ul>{content}</ul>
				</div>	
				</div>	
		);
	}
}