import React from 'react';
import { Row, Col ,  Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';
import News_content_list from'./news_content_list';

const TabPane = Tabs.TabPane;

export default class News_content extends React.Component{
	render(){
		return (
			<div >
				<Tabs defaultActiveKey="1" >
				    <TabPane tab="头条" key="1">
				    	<News_content_list type="top"/>
				    </TabPane>
				   	 <TabPane tab="娱乐" key="2">
				     	<News_content_list type="yule"/>
				     </TabPane>
				    <TabPane tab="军事" key="3">
				    	 <News_content_list type="junshi"/>
				    </TabPane>
				    <TabPane tab="国内" key="4">
				     	<News_content_list type="guonei"/>
				     </TabPane>
				    <TabPane tab="财经" key="5">
				    	<News_content_list type="caijing"/>
				    </TabPane>
			 	 </Tabs>
			</div>
		);
	}
}