import React from 'react';
import { Row, Col ,  Tabs, Icon ,Pagination} from 'antd';
import 'antd/dist/antd.css';

export default class UserSendComments extends React.Component{
	constructor(){
		super();
		this.state = {
			datas:[]
		};
	}
	componentDidMount(){
		var userid = this.props.ucid;
		var url = "http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + userid;
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
			// console.log(item.Comments);
			if(item.Comments==null||item.Comments==''){
				return(<li key={index}>
				</li>);
			}else{
				return (
				<li key={index} className="usercenter_comment">
					<Row>
					<Col span={18}>
						<p style={{float:"left",width:"100%",overflow:"hidden"}}>{item.Comments}</p>
					</Col>
					<Col span={6}>
						<p style={{float:"right",color:"gray",fontSize:"10px"}}>{item.datetime}</p>
					</Col>
				</Row>
					
					
				</li>
			);
			}			
		}):<div>暂无评论</div>
		return (
			<div>
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

