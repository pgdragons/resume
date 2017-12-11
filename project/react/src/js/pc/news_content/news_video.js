import React from 'react';
import { Row, Col ,  Tabs, Icon ,Carousel} from 'antd';
import 'antd/dist/antd.css';

import Picgroup from '../common/picgroup'
import VedioItem from '../common/vedioitem'

export default class News_video extends React.Component{
	render(){
		return (
			<div >
				{/*轮播图*/}
							<div>
								<span style={{fontSize:"18px",color:'#A41F24'}}>最新的NBA赛事</span>
								<a href="http://kbs.sports.qq.com/#nba"><span style={{marginLeft:'145px',color:'gray'}}>更多新闻</span></a>
								
							</div>
							
							<div className="carousel">
							<Carousel autoplay>
							<div><img src='./src/images/banner1.png'/><p>在今天勇士以88-92不敌凯尔特人的比赛中，勇士曾一度领先17分，但凯尔特人凭借一波19-0的得分高潮反超了比分并最终赢下比赛。</p></div>
    						<div><img src='./src/images/banner2.png'/><p> 今日76人在客场115-109战胜湖人，76人中锋乔尔-恩比德上场34分钟，得到46分15篮板7助攻7盖帽。</p></div>
   							<div><img src='./src/images/banner3.jpg'/><p>请认准正品,喜欢马上下手去抢购,五折包邮,速度下手</p></div>
   							<div><img src='./src/images/banner8.jpg'/><p>邪邪的微笑让人看着很着迷，两枚大耳钉更是点睛之笔，加内特这张照片真是给人诠释了什么是真正的型男！</p></div>
    						
							
							
							
							
							</Carousel>
							</div>

							{/*此时就需要根据给定的接口去请求网络数据*/}
							<div className='news_pic_group'>
							<p style={{fontSize:'18px',color:'#A41F24',marginTop:'10px'}}>最新娱乐新闻</p>
							<Picgroup num='4'/>
							</div>
							<div className="pc_news_vedio">
								<div className="pc_news_tag">视频</div>
								{/*开始视频列表的渲染*/}
								<div className="pc_news_vedio_item">
									<VedioItem picNum="1" num="3" type="guonei"/>
									<VedioItem picNum="2" num="7" type="guoji"/>
								</div>
							</div>
			</div>
		);
	}
}