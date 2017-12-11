import React from 'react';
import { 
	Row, 
	Col ,  
	Tabs, 
	Icon ,
	Input,
	Form,
	Button,
	message,
	Modal
} from 'antd';
import 'antd/dist/antd.css';

const { TextArea } = Input;
const FormItem = Form.Item;

import Obj from '../common/comom'

class Comments extends React.Component{
	constructor(){
		super();
		this.state = {
			datas:[],
			visible:false
		};
	}
	componentDidMount(){
		this.getWebDatas();
	}
	getWebDatas(){
		var url = "http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.articleId;
		fetch(url)
		.then((response)=>{
			return response.json()
		})
		.then((json=>{
			this.setState({
				datas:json
			});
		}));
	}
	render(){
		var datas = this.state.datas;
		var {getFieldDecorator} = this.props.form
		var list = [];
		if(datas.length){
			for(var i=datas.length - 1;i>datas.length - 10;i--){
				var item = datas[i];
				list.push(<li key={i}>{item.Comments}</li>);
			}
		}
		var commontLists = datas.length?
		list:<div>数据暂无</div>;
		return (
			<div style={{marginTop:"40px"}}>
				<Form onSubmit={this.sendComments.bind(this)}>
			        <FormItem>
			            {getFieldDecorator('comments', {})(
				            <TextArea rows={4}/>
				         )}
			        </FormItem>
			          <Button type="primary" htmlType="submit" >
			            发送评论
			          </Button>
			      </Form>
				<ul>{commontLists}</ul>
				<Modal
		          title="登入界面"
		          visible={this.state.visible}
		          onOk={this.ok.bind(this)}
          		  onCancel={this.cancel.bind(this)}
		        >
		        
		          欢迎来到登录注册模块
		        </Modal>
			</div>
		);
	}
	ok(){
		this.setVisible(false);
	}
	cancel(){
		this.setVisible(false);
		message.config({
		  top: 30,
		  duration: 2,
		})
		message.warn("取消注册");
	}
	setVisible(visible){
		this.setState({
			visible:visible
		});
	}
	sendComments(e){
		e.preventDefault();
		var self = this;
		this.props.form.validateFields((err, values) => {
			if (err) {
	        	console.log(err);
	      	}else{
	      		var comments = values.comments;
	      		// 根据获取到的内容,进行url拼接
	      		var url = Obj.COMMOMPATH + "action=comment&userid="+localStorage.useid+"&uniquekey="+this.props.articleId+"&commnet=" +comments ;
	      		if(localStorage.useid==''||localStorage.useid==undefined){
	      			setTimeout(function(){
	      				self.setState({
	      					visible:true
	      				});
	      			},500);
	      		}else{
	      			fetch(url).then((response)=>{
	      				return response.json()
		      		}).then((json)=>{
		      			this.getWebDatas();
		      		});
	      		}
	      	}
		});
	}
}

export default Comments = Form.create({})(Comments);