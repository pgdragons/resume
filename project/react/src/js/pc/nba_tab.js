import React from 'react';
import { Row, Col ,  Tabs, Icon,Button } from 'antd';
import 'antd/dist/antd.css';

export default class Nba_tab extends React.Component{
	constructor(){
		super();
		this.state={
			datas:[]

		};
	}
	componentDidMount(){
			var self = this;
			var url="http://oyetg4k60.bkt.clouddn.com/nba2.json";
			fetch(url)
			  .then(function(response) {
			    return response.json()
			  }).then(function(json) {
			 self.setState({
		    	datas:json.result.list[0].tr
		    	});
			  });
		}
	render(){
		var arr = this.state.datas ;
		var content=arr.length?arr.map(function(item,index){
				return(	
					<li key={index} className="nba_marth">
					<img src={item.player1logobig} style={{width:'50px',height:'50px'}}/>
					<span>{item.player1}</span>
					<span>{item.score}</span>
					<span>{item.player2}</span>
					<img src={item.player2logobig} style={{width:'50px',height:'50px'}}/>
						<a href={item.m_link2url}><Button type="primary">比赛/集锦</Button></a>
				</li>
				
			);
		})
		:<div>加载中.<img src='./src/images/10.gif'/></div>;


		return (
			<div className="nbagroup">
				<ul>
						{content}
				</ul>
			</div>
		);
	}f
}