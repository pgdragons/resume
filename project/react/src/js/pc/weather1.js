import React from 'react';
import { Row, Col ,  Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';

import Obj from './common/comom.js'

export default class Wheather extends React.Component{
	constructor(){
		super();
		this.state={
			datas:[]
		};
	}
	componentDidMount(){
			var self = this;
			// var url=obj.WEATHER;
			var url="http://op.juhe.cn/onebox/basketball/nba?key=944c29842f27e2bab5cfa9ebcc7a6b7d";
			// var url="http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10";
			var url=" http://api.budejie.com/api/api_open.php?a=dataList&c=comment&data_id=22062938&hot=1";
			fetch(url,
				{
    method: 'GET',
    headers: {
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    mode: 'cors',
    credentials: 'credentials',
    cache: 'default'
  })
			  .then(function(response) {
			  	console.log(response.json());
			    return response.json()	  
			  }).then(function(json) {
			  	  console.log(json);
			 self.setState({
		    	datas:json
		    	});
			  });
		}
	render(){
		var arr = this.state.datas;
		console.log(arr);
		var content=arr.length?arr.map(function(item,index){
				return(
					
				<li key={index} className="lis">
					<li >
				<p className="time">item.date</p>
				<p className="tianqi">
					<i className="icon"></i>
					<span>item.info.day[1]</span>
				</p>
				<p className="wendu"><span>item.info.night[2]+"~"+item.info.day[2]+"°"+item.info.night[4]</span></p>
			</li> 
				</li>
				
			);
		})
		:<div>加载中.<img src='./src/images/10.gif'/></div>;
		return (
			<div className="">
				<Row>
					<Col span={24}>
						<ul>
							{content}
						</ul>
					</Col>
				</Row>
			</div>
		);
	}
}