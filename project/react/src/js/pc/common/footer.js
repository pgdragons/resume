import React from 'react';
import { Row, Col ,  Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';

export default class Footer extends React.Component{
	render(){
		return (
			<div className="footer">

				<Row>
				<Col span={4}>
				</Col>
					<Col span={16}>
						<h1>合作媒体</h1>
						<div className="foot_net">
							中国政府网 | 中国网 | 人民网 | 新华网 | 腾讯网 | 央视网 | nba中文网 | 虎扑 | 中青在线 | 光明网 | 解放军报 | 法制日报 | 中国台湾网 | 中经网 | 南风窗
中国周刊 | 三联生活周刊 | 北青网 | 大洋网 | 南方报业 | 金羊网 | 南方网 | 东方网 | 千龙网 | 新京报 | 京华时报| 红网 | 工人日报 | 中国新闻周刊 | 参考消息
新周刊 | 大河网 | 中国长安网 | 环球网 | 四川新闻网 | 北晨网 | 浙江在线 | 国际在线 | 舜网 | 新快网 | 中国江西网 | 云南网 | 深圳新闻网 | 中安在线 | 新文化网
天山网 | 亚心网 | 大众网 | 大江网 | 华商网 | 中国小康网 | 江西晨报网 | 新民周刊 | 东南网 | 山东新闻网 | 新疆网 | 华龙网 | 荆楚网 | 安徽网 | 媒体大全
						</div>	
						<div className="footer_text">24小时客户服务热线：4006900000 010-82623378 常见问题解答 互联网违法和不良信息举报</div>
						<div className="footer_text">违法和不良信息举报电话：010-62675637 举报邮箱：jubao@vip.sina.com</div>
						<div className="footer_text">新闻中心意见反馈留言板</div>
						<div className="footer_text">kk | About Kk | 广告服务 | 联系我们 | 招聘信息 | 网站律师 | SINA English | 通行证注册 | 产品答疑</div>
						<div className="footer_text">Copyright © 1996-2017 SINA Corporation, All Rights Reserved</div>
							<div className="footer_text">kk公司 版权所有</div>


					</Col>
					<Col span={4}>
				</Col>
				</Row>
			</div>
		);
	}f
}