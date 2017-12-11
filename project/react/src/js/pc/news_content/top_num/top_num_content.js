import React from 'react';
import { Row, Col ,  Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';
import {Link} from 'react-router'

export default class Top_num_content extends React.Component{
	render(){
		var topContent = this.props.datas.length?
		this.props.datas.map((item,index)=>{
			return (
				<li key={index}  >
					<img src={item.thumbnail_pic_s}/>
					<p className="top_content_aun">{item.author_name}</p>
					<p className="top_content_read">类型:{item.realtype}</p>
					<div className="top_content_bottom">
					<Link to={`/detail/${item.uniquekey}`}>
						<p>{item.title}</p>
						<p>{item.date}</p>	
						</Link>					
					</div>
				</li>
			);
		}):<div>加载中..<img src='./src/images/10.gif'/></div>;
		return (
			<div>
				<ul >
				{topContent}	
				</ul>
			</div>
		);
	}
}