import React, { Component } from 'react'
import './css/App.css';
import './css/ImageStyles.css'
import Hedder from './Components/Hedder';
import List from './Components/list'
import { images } from './data/data'
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';

const { TabPane } = Tabs;

const App = () => {
  const savedImages = useSelector(state => state.images.images);
  return (
    <div>
      <Hedder />
      <div style={{ marginTop: 95 }}>
        <Tabs tabBarStyle={{ textAlign: 'center' }} defaultActiveKey="1">
          <TabPane tab="List of Images" key="1">

            <List saveBtn={true} data={images} />
          </TabPane>
          <TabPane tab="My Images" key="2">
            <List saveBtn={false} data={savedImages} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}
export default App;