import React from 'react';
import ReactDOM from 'react-dom';

import Header from './common/header';
import Footer from './common/footer';
import Pccenter_content from './use_center/pccenter_content';
// 设计好所需的模块
export default class Pccenter extends React.Component{
	render(){
		var id = this.props.params.id;
		console.log(id);
		return (
			<div>
				{/*头部信息*/}
				<Header title="用户中心"/>
				
				<Pccenter_content ucid={id}/>

				{/*底部信息*/}
				<Footer />
			</div>
		);
	}
}

