import React from 'react';
import { Row, Col ,  Tabs, Icon ,Pagination } from 'antd';
import 'antd/dist/antd.css';

import Obj from '../../common/comom';
import {Link} from 'react-router'

export default class UserGetCollection extends React.Component{
	constructor(){
		super();
		this.state = {
			datas:[]
		};
	}
	componentDidMount(){
		var userid = this.props.ucid;
		var url = "http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + userid;
		fetch(url).then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				datas:json
			});
		});
	}
	render(){
		var datas = this.state.datas;
		var content = datas.length?
		datas.map((item,index)=>{
			var uniquekey = Obj.stamp2Date(item.Id.Timestamp);
			return (
				
					<li key={index} className="usercenter_comment">
				<Row>
					<Col span={18}>
						<Link to={`/detail/${item.uniquekey}`}>
						<p style={{float:"left",width:"100%",overflow:"hidden"}}>{item.Title}</p>
						</Link>
					</Col>

					<Col span={6}>
						<p style={{float:"right",color:"gray",fontSize:"10px"}}>{uniquekey}</p>
					</Col>
				</Row>
				</li>
				
				

				
			);
		}):<div>暂无收藏</div>
		return (
			<div >
				<Row>
					<Col span={24}>
						<div>
							<ul>{content}</ul>
						</div>
					</Col>
				</Row>
				<Pagination defaultCurrent={1} total={this.state.datas.length} />
				</div>
		);
	}
}

