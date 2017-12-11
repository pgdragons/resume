import React from 'react';
import { Row, Col ,  Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
// 自己加的JS

import New_list from'./news_content/new_list';
import Top_num from'./news_content/top_num';
import News_video from'./news_content/news_video';
import Hot_article from'./news_content/hot_article';

export default class News_content extends React.Component{
	render(){
		return (
			<div className="news_content">
				<Row>
					<Col span={2}></Col>
					<Col span={20}>
						<Row>
							<Col span={7}>
							
							<News_video />


							</Col>

							<Col span={10}>
							<div className='new_list_content'>
							< New_list />
							</div>							
							</Col>

							<Col span={7}>
							<div className='top_num'>
							< Top_num />
							</div>

							<img className="top_ads" style={{width:"100%",height:"200px"}} src="./src/images/banner5.jpg"/>
							<div>
							<Hot_article />
							</div>

							</Col>
						</Row>
					</Col>
				<Col span={2}></Col>
			</Row>

		</div>
		);
	}
}