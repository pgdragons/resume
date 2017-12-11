var React = require('react');
var ReactDOM = require('react-dom');

import MediaQuery from 'react-responsive';
import PCIndex from './js/pcindex.js';
import MobileIndex from './js/mobileindex.js';
import Pccenter from './js/pc/pccenter.js';
import Detail from './js/pc/detail.js';

import { Router, Route ,hashHistory} from 'react-router'

// 设计好所需的模块
class Root extends React.Component{
	render(){
		return (
			<div>

				<MediaQuery query="(min-device-width: 980px)">
					<Router history={hashHistory}>
						{/* pc端上首页面*/}
						<Route path="/" component={PCIndex}></Route>
						
					   {/* pc端上的个人中心页面*/}
						<Route path="/pccenter/:id" component={Pccenter}></Route>	

						{/* pc端上的评价的详情页面*/}					
						<Route path="/detail/:id" component={Detail}></Route>
					</Router>
					
				</MediaQuery>
				<MediaQuery query="(max-device-width: 980px)">
					<MobileIndex />
				</MediaQuery>
			</div>
		);
	}
}
ReactDOM.render(<Root />,document.getElementById('box'));
