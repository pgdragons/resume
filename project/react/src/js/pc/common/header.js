var React = require('react');
import { Row, Col ,  Tabs, Icon , Modal, Button,Form,Input,notification,message } from 'antd';
import 'antd/dist/antd.css';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
import {Link} from 'react-router';

import MyTabs from './header/mytabs'
// 读取自己定义的外部组件
import Mytopicon from './header/mytopicon'
// 设计好所需的模块
 class Header extends React.Component{
	constructor(){
		super();
		this.state = {
			visible:false,
			actionType:'register',
			loginSuccess:localStorage.useid!=''?true:false,
			id:localStorage.useid
		};
	}
	render(){

		// console.log(this.props.form);
		var {getFieldDecorator} = this.props.form
		var loginOrNotContent = this.state.loginSuccess==true
		?<div>
		<Link to={`/pccenter/${this.state.id}`}>
			<img style={{width:"50px",height:"50px",textAlign:"center"}} src="./src/images/user.jpg"/>
			</Link>
				
			
			<div onClick={this.logout.bind(this)}><Button type="primary">退出登录</Button></div>
		</div>
		:
		(<div onClick={this.loginOrRegist.bind(this)}>
      		<img src="./src/images/user.png"/>
      		<div style={{color:"#B3B3BB",fontSize:'14px'}}>登入/注册</div>
      	</div>);
      	// console.log(this.state.loginSuccess);
		return (
			<div className="header">
				<Row>
				      <Col span={8}>
				      <Link to={`/`}>
				     	 <img src='./src/images/news.png'/>
				     	 <div style={{color:"#B3B3BB",fontSize:'14px'}}>kangkang_news</div>

				     	 </Link>
				      </Col>
				      <Col span={8}>
				     	  {/*设定点击切换*/}
			      	 <Mytopicon title={this.props.title}/>
			      	 <div style={{color:"#B3B3BB",fontSize:'14px'}}>欢迎访问kk</div>
				      </Col>
				      <Col span={8}>
				      {loginOrNotContent}
				     
				      </Col>
			    </Row>	
			     <Modal
		          title="登入界面"
		          visible={this.state.visible}
		          onOk={this.ok.bind(this)}
		          onCancel={this.cancel.bind(this)}
		          >
		          <Tabs defaultActiveKey="1" onChange={this.actionChange.bind(this)}>
				    <TabPane tab="注册" key="1" >
				    <Form onSubmit={this.handleSubmit.bind(this)}>
					        <FormItem>
					            {getFieldDecorator('userName', {})(
						            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="输入用户名" />
						         )}
					        </FormItem>
					        <FormItem>
					            {getFieldDecorator('password', {})(
						            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="输入密码" />
						         )}
					        </FormItem>
					        <FormItem>
					            {getFieldDecorator('c_password', {})(
						            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="输入确认密码" />
						         )}
					            </FormItem>
					          <Button type="primary" htmlType="submit" >
					            注册
					          </Button>
					      </Form>
					      </TabPane>
				    <TabPane tab="登录" key="2"><Form onSubmit={this.handleSubmit.bind(this)}>
					        <FormItem>
					            {getFieldDecorator('userName', {})(
						            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="输入用户名" />
						         )}
					        </FormItem>
					        <FormItem>
					            {getFieldDecorator('password', {})(
						            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="输入密码" />
						         )}
					        </FormItem>
					          <Button type="primary" htmlType="submit" >
					            登录
					          </Button>
					      </Form>
					      </TabPane>
				  </Tabs>
		         
		        </Modal> 
			</div>
		);
	}
	logout(){
		localStorage.useid='';
		this.setState({
			loginSuccess:false
		});
	}
	handleSubmit(e){
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
	      if (err) {
	        console.log(err);
	      }else{
	      	console.log('Received values of form: ', values);
	      	this.setVisible(false);
	      	var userName = values.userName;
	      	var password = values.password;
	      	var c_password = values.c_password;
	      	var url ;
			// 去拼接好url
			if(this.state.actionType=='register'){
				url="http://newsapi.gugujiankong.com/Handler.ashx?action=register&username="+userName+"&password=" + password;
			}else{
				url="http://newsapi.gugujiankong.com/Handler.ashx?action=login&r_userName="+userName+"&r_password="+password+"&r_confirmPassword=" + c_password;
			}
			// 通过fetch发送请求
			fetch(url).then((response)=>{
				console.log(response);
				return response.json();
			}).then((json)=>{
				console.log(json);
				this.setState({
					id:json.UserId,
					loginSuccess:json.UserId?true:false
				});
				if(json.UserId){
					console.log("json.UserId:"+json.UserId);
					localStorage.useid=json.UserId;
				}
			})
	      }
	    });	
		
	}
	actionChange(key){
		// console.log(key);
		this.setState({
			actionType:(key==1)?'register':'login'
		});
	}
	loginOrRegist(){
		this.setVisible(true);
	}
	userCenter(){
		console.log("进入用户详情主业");
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
		// 时间放前面
		 message.info('取消注册');
	}
	setVisible(visible){
		this.setState({
			visible:visible
		});
	}
}

//进行封装
export default Header = Form.create({})(Header);