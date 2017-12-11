import React from 'react';

import { Row, Col ,  Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';
const TabPane = Tabs.TabPane;

export default class MyTabs extends React.Component{
	render(){
		return (
			<div className="tab_wrap">
			<Tabs defaultActiveKey="2">
			    <TabPane tab={<span><Icon type="barcode" />头条</span>} key="1">
			    	<img src='./src/images/1111.jpg' className="tab_img"/>
			      111111
			    </TabPane>
			    <TabPane tab={<span><Icon type="layout" />社会</span>} key="2">
			      222222
			    </TabPane>
			    <TabPane tab={<span><Icon type="global" />财经</span>} key="3">
			      111111
			    </TabPane>
			    <TabPane tab={<span><Icon type="rocket" />科技</span>} key="4">
			      222222
			    </TabPane>
			    <TabPane tab={<span><Icon type="mobile" />手机</span>} key="5">
			      111111
			    </TabPane>
			    <TabPane tab={<span><Icon type="car" />汽车</span>} key="6">
			      222222
			    </TabPane>
			    <TabPane tab={<span><Icon type="inbox" />房产</span>} key="7">
			      111111
			    </TabPane>
			    <TabPane tab={<span><Icon type="layout" />娱乐</span>} key="8">
			      222222
			    </TabPane>
			    <TabPane tab={<span><Icon type="mail" />邮箱</span>} key="9">
			      222222
			    </TabPane>
			  </Tabs>
			  </div>
		);
	}
}