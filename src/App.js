import React, { Component,useEffect } from 'react'
import './css/App.css';
import './css/ImageStyles.css'
import Hedder from './Components/Hedder';
import List from './Components/list'
import { images } from './data/data'
import { Tabs } from 'antd';
import {saveImages} from './actions'
import { useSelector, useDispatch } from 'react-redux';

const { TabPane } = Tabs;

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveImages(images))
  }, [])
  const savedImages = useSelector(state => state.images.images);
  return (
    <div>
      <Hedder />
      <div style={{ marginTop: 95 }}>
        <Tabs tabBarStyle={{ textAlign: 'center' }} defaultActiveKey="1">
          <TabPane tab="Images without Data" key="1">

            <List tabId={0} data={images} />
          </TabPane>
          <TabPane tab="Images with Data" key="2">
            <List tabId={1} data={savedImages} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}
export default App;