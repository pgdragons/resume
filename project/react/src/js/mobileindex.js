var React = require('react');
var ReactDOM = require('react-dom');
import Header from'./mobile/header';
import Footer from'./mobile/footer';
import News_content from'./mobile/news_content';


// 设计好所需的模块
export default class MobileIndex extends React.Component{
	render(){
		return (
			<div>
			<Header />
			<News_content />
			<Footer />
			</div>
		);
	}
}

