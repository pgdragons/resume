import React from 'react';
import { Row, Col ,  Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';
import New_list_text from'./new_list/new_list_text';

const TabPane = Tabs.TabPane;

export default class New_list extends React.Component{
	render(){
		return (
			<div className="new_list">
				<Tabs defaultActiveKey="1"  type="card">
			    <TabPane tab="头条"  key="1">
			    <div className='new_list_text'>
					<New_list_text type="top"/>
				</div>
			    </TabPane>
			    <TabPane tab="娱乐"  key="2">
			    <New_list_text type="yule"/>娱乐</TabPane>
			    <TabPane tab="国内"  key="3">
			    <New_list_text type="guonei"/>
			    国内</TabPane>
			     <TabPane tab="财经"  key="4">
			    <New_list_text type="caijing"/>
			    国外</TabPane>
			     <TabPane tab="军事"  key="5">
			    <New_list_text type="junshi"/>
			    军事</TabPane>
			      <TabPane tab="科技" key="6">
			    	<New_list_text type="keji"/>
			    </TabPane>
			    <TabPane tab="体育" key="7">
			    	<New_list_text type="tiyu"/>
			    </TabPane>
			  </Tabs>
			</div>
		);
	}
}
