import React from 'react';
import { Row, Col ,  Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';

export default class Footer extends React.Component{
	render(){
		return (
			<div className="mobile_footer">
				<Row>
					<Col span={24}>
						<div className="mobile_footer_text">蚂蚁金服体验技术部出品</div>
					</Col>
				</Row>
			</div>
		);
	}
}