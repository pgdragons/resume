import React from 'react';

import { Row, Col ,  Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';
const TabPane = Tabs.TabPane;

export default class Mytopicon extends React.Component{
	render(){
		return (
			<div className="header_icon">
				{this.props.title}
			</div>
		);
	}
}