import React from 'react';
import { Row, Col ,  Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';
import {Link} from 'react-router'

import Obj from '../../common/comom.js'

export default class New_list_text extends React.Component{
	constructor(){
		super();
		this.state={
			datas:[]
		};
	}
	componentDidMount(){
			var self = this;
			var url='http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type='+this.props.type+'&count=42';
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
		var arr = this.state.datas;
		var content=arr.length?arr.map(function(item,index){
				return(
					<li key={index} style={{
						color:index%4?'gray':'black',
						fontSize:index%4?'13px':'20px',
						fontWeight:index%4?'normal':'bold',
					}}>
					<Link to={`/detail/${item.uniquekey}`}>
						<div style={{color:'black'}}>{item.title}</div>
					</Link>
				</li>
			);
		})
		:<div>加载中..<img src='./src/images/10.gif'/></div>;
		return (
			<div className="new_list_text_box">
				<ul>
					{content}
				</ul>
			</div>
		);
	}
}