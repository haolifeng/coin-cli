import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './MainLayout.css'; // 引入样式文件

import { Link, Route, Routes, useLocation } from 'react-router-dom';

import { observer } from 'mobx-react-lite';

import MyTrade from "./component/Mytrade";
import AllOrders from './component/AllOrders';
import EthOrders from "./component/EthOrders";
import WanOrders from "./component/WanOrders";
import XrpOrders from "./component/XrpOrders";

const { Sider, Content } = Layout;

const MainLayout = observer( () => {

  const location = useLocation();
  useEffect(()=>{
    console.log('in useEffect');

  },[])
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左侧菜单 */}
      <Sider
        breakpoint="lg" // 响应式断点
        collapsedWidth="0" // 折叠后宽度为 0
        theme="light" // 菜单主题（light/dark）
      >
        <div className="logo">LOGO</div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}
          selectedKeys={[location.pathname]} // 根据路由路径高亮菜单项
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to= "/WANUSDT">WANUSDT</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to= "/ETHUSDT">ETHUSDT</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to= "/mytrades/BNBUSDT">BNBUSDT</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UploadOutlined />}>
          <Link to= "/mytrades/BTCUSDT">BTCUSDT</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<UploadOutlined />}>
          <Link to= "/XRPUSDT">XRPUSDT</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<UploadOutlined />}>
          <Link to= "/allorders">AllOrders</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* 右侧内容区域 */}
      <Layout>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          <Routes>
            <Route path = "/mytrades/:symbol" element={<MyTrade/>}/>
            <Route path = '/allorders' element={<AllOrders  />}/>
            <Route path = '/ETHUSDT' element={<EthOrders />}/>
            <Route path = '/WANUSDT' element={<WanOrders /> }/>
            <Route path = '/XRPUSDT' element={<XrpOrders /> }/>
          </Routes>
          

        </Content>
      </Layout>
    </Layout>
  );
});

export default MainLayout;