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
			

			  var url = 'http://oyetg4k60.bkt.clouddn.com/nba2.json';
			  // var url='../../json/nba.json';
    fetch(url)
        .then((res)=> res.json())

        .then((json)=>{
        	 console.log(json);
           
        })
        .catch((e)=>{
            alert(e);
        });
	}
			

	render(){
		var arr1 = this.state.datas;
		
		var content=arr1.length?arr.map(function(item,index){
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