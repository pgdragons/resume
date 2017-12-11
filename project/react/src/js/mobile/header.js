var React = require('react');
import { Row, Col ,  Tabs, Icon , Modal, Button,Form,Input,message } from 'antd';
import 'antd/dist/antd.css';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;



// 设计好所需的模块
 class Header extends React.Component{
	constructor(){
		super();
		this.state = {
			visible:false,
			actionType:'register'
		};
	}
	render(){
		// console.log(this.props.form);
		var {getFieldDecorator} = this.props.form
		var loginOrNotContent = this.state.loginSuccess==true
		?<div onClick={this.userCenter.bind(this)}>登录成功</div>
		:(<div onClick={this.loginOrRegist.bind(this)}>
      		<img src="./src/images/user.png"/>
      	</div>);
		return (
			<div className="mobile_header">
				<Row>
				      <Col span={3}>
				      <div className="mobile_header_logo">
						      		<img src='./src/images/wenzhang.png'/>
						      </div>
				      </Col>
				      <Col span={18}>
				     	 <p>今日头条</p>
				      </Col>
				      <Col span={3}>
				      <div className="mobile_header_login">
				      {loginOrNotContent}
				      </div>				     
				      </Col>
			    </Row>	
			     <Modal
		          title="对话框"
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
	      		// console.log(this.state.actionType);
		// 获取到输入框中给定的数据
		// 根据获取到的数据进行对应的判断
		// 去拼接好ur
			if(this.state.actionType=='register'){
				url="http://newsapi.gugujiankong.com/Handler.ashx?action=login&username="+userName+"&password=" + password;
			}else{
				url="http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName="+userName+"&r_password="+password+"&r_confirmPassword=" + c_password;
			}
			// 通过fetch发送请求
			fetch(url).then((response)=>{
				return response.json();
			}).then((json)=>{
				// console.log(json);
				this.setState({
					loginSuccess:json
				});
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