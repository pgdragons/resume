
import React from 'react';
import { Row, Col ,  Tabs, Icon ,Pagination} from 'antd';
import 'antd/dist/antd.css';
const TabPane = Tabs.TabPane;

import UserGetCollection from './pccenter_content/usergetcollects';
import UserSendComments from './pccenter_content/usersendcommontes';

export default class Pccenter_content extends React.Component{
	render(){
		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20}>
							<div style={{width:"100%"}}><img  src="./src/images/center_bgc.png"/></div>
						<Tabs defaultActiveKey="1">
						    <TabPane tab="用户评论" key="1">
						    	<UserSendComments  ucid={this.props.ucid}/>
						    </TabPane>
						    <TabPane tab="用户收藏" key="2">
						    <UserGetCollection ucid={this.props.ucid}/>
						    </TabPane>
					    </Tabs>
					</Col>
					<Col span={2}></Col>
				</Row>
				
			</div>
		);
	}
}

