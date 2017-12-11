import React from 'react';
import { Row, Col ,  Tabs, Icon,Button } from 'antd';
import 'antd/dist/antd.css';

export default class Nba_teams extends React.Component{
	constructor(){
		super();
		this.state={
			team:[]
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
		    
		    	team:json.result.teammatch

		    	});
			  });
		}
	render(){
		
		var team = this.state.team ;
		var teams=team.length?team.map(function(item,index){
				return(
					
					<li key={index} className="nba_teams">
					<a href={item.url}><Button type="primary">{item.name}</Button></a>
				</li>
				
			);
		})
		:<div>加载中.<img src='./src/images/10.gif'/></div>;
		return (
			<div >
					<ul className="nbag_teams_ul">
						{teams}
				</ul>
				
			</div>
		);
	}f
}