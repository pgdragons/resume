import React from 'react';
import { Row, Col ,  Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';
export default class TEST extends React.Component{
  render(){
   
    return (
   <div>
        <div className="swiper-container swiper-container-horizontal"> 
        <div className="swiper-wrapper">
            <div className="swiper-slide swiper-slide-active" style={{width: '422px',marginRight: '30px'}}><a href="">国内新闻</a></div>
            <div className="swiper-slide swiper-slide-next" style={{width: '422px',marginRight: '30px'}}><a href="">电视直播预告</a></div>
            <div className="swiper-slide" style={{width: '422px',marginRight: '30px'}}><a href="">性感花边</a></div>
            <div className="swiper-slide" style={{width: '422px',marginRight: '30px'}}> <a href="">扒一扒</a></div>
            <div className="swiper-slide" style={{width: '422px',marginRight: '30px'}}><a href="">人物志</a> </div>
            <div className="swiper-slide" style={{width: '422px',marginRight: '30px'}}><a href="">NBA官方微博</a></div>
            <div className="swiper-slide" style={{width: '422px',marginRight: '30px'}}><a href="">新闻排行</a></div>
            <div className="swiper-slide" style={{width: '422px',marginRight: '30px'}}><a href="">我为鞋狂</a> </div>
            <div className="swiper-slide" style={{width: '422px',marginRight: '30px'}}><a href="">科技</a></div>
            <div className="swiper-slide" style={{width: '422px',marginRight: '30px'}}><a href="">博客</a> </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev swiper-button-disabled"></div>

     
    </div>
  </div>
    
    );
  }f
}