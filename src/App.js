import React, { Component } from 'react'
import './css/App.css';
import './css/ImageStyles.css'
import Hedder from './Components/Hedder';
import List from './Components/list'
import { images } from './data/data'
import { Tabs } from 'antd';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default class componentName extends Component {
  render() {
    return (
      <div>
        <Hedder />
        <div style={{marginTop:95}}>
        <Tabs tabBarStyle={{ textAlign: 'center' }} defaultActiveKey="1" onChange={callback}>
          <TabPane tab="List of Images" key="1">
            
            <List saveBtn={true} data={images}/>
          </TabPane>
          <TabPane tab="My Images" key="2">
            <List saveBtn={false} data={images}/>
          </TabPane>
        </Tabs>
      </div>
      </div>
    )
  }
}