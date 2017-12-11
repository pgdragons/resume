import React from 'react';
import { Row, Col ,  Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';

import Obj from './comom.js'
import {Link} from 'react-router'

export default class Picgroup extends React.Component{
	constructor(){
		super();
		this.state={
			datas:[]
		};
	}
	componentDidMount(){
			var self = this;
			var url="http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=" + this.props.num;;
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
		var arr = this.state.datas;
		var content=arr.length?arr.map(function(item,index){
				return(
					
					<li key={index}>
					<Link to={`/detail/${item.uniquekey}`}>
					<img src={item.thumbnail_pic_s}/>
					<p>{item.author_name}</p>
					</Link>
				</li>
				
			);
		})
		:<div>加载中.<img src='./src/images/10.gif'/></div>;
		return (
			<div className="picgroup">
				<ul>
					{content}
				</ul>
			</div>
		);
	}
}