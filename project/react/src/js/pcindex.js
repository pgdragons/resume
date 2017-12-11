var React = require('react');
var ReactDOM = require('react-dom');

import { Row, Col  } from 'antd';
//自己引入的模块
import Header from'./pc/common/header';
import Footer from'./pc/common/footer';
import News_content from'./pc/news_content';
import Nba_tab from'./pc/nba_tab';
import Nba_teams from'./pc/nba_teams';
import TEST from'./pc/MultipleItems';


// 设计好所需的模块
export default class PCIndex extends React.Component{
	render(){
		return (
			<div>
				{/*
// <Header title="今日头条"/>
				*/}
				<div className="PCIndex_head">
						<Header title="kangkang_news"/>
				</div>
			

			<div>
				{/*<Weather />*/}
				
			</div>
			<Row>
				 <Col span={2}></Col>
				     <Col span={20}>
				     <div className="PCIndex_ad1">
				     	<img  src="./src/images/ad.jpg"/>
				     </div>
			      
				      </Col>
				      <Col span={2}>		
				      </Col>	    
			 </Row>	
			
			{/*NBA比赛对阵的导航条*/}

			<Row>
				 <Col span={2}></Col>
				     <Col span={20}>
				     <div className="nba_title">
				     	<div style={{float:"left"}}>
				     	<img  src="./src/images/nba.png"/>
				     	<span>NBA赛事直播</span>	
				     	</div>
				     	<div style={{float:"right",marginRight:'20px'}}>
				     	<img  src="./src/images/nba.png"/>
				     	<span>NBA球队数据</span>
				     		
				     	</div>
				     	
				     </div>
				     	 <Nba_teams />  
				     	 <TEST />
			      		<Nba_tab />
				      </Col>
				      <Col span={2}>		
				      </Col>	    
			 </Row>	
			<News_content />

			<Row>
				 <Col span={2}></Col>
				     <Col span={20}>
				     <div className="PCIndex_ad1">
				     	<img  src="./src/images/ad3.jpg"/>
				     </div>
			      
				      </Col>
				      <Col span={2}>		
				      </Col>	    
			 </Row>	
			<Footer />
			</div>
		);
	}
}

