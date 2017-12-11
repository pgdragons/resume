import React from 'react';
import { Row, Col ,  Tabs, Icon,Button  } from 'antd';
import 'antd/dist/antd.css';
import Top_num_content from './top_num/top_num_content'


export default class Top_num extends React.Component{
	constructor(){
		super();
		this.state = {
			types:['top','yule','caijing','guonei','guoji'],
			index:0,
			url:"http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=4",
			datas:[]
		};
	}
	componentDidMount(){
			this.getNetWorkData(this.state.url,this.state.index);
			
		}
	render(){

		return (
			<div className="top_num_new">				
				<div className="top_num_top">
					<p className="top_num_top_p">头条号</p>
					<div className="top_num_top_btn" onClick={this.change.bind(this)}>
				 	<Button type="primary">换一换</Button>
					</div>
				</div>
				<div className="top_num_content">
					<Top_num_content datas={this.state.datas}/>						
				</div>
				
			</div>
		);	
	}
	change(){

		var index=this.state.index;
				index++;
				index%=this.state.types.length;
				var url="http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.state.types[index]+"&count=4"
				console.log(index);
				this.getNetWorkData(url,index);
		}
		getNetWorkData(url,index){
		fetch(url)
		.then((response)=>{
			return response.json()
		}).then((json)=>{
			this.setState({
				datas:json,
				index:index,
				url:url
			});
		});
	}
}