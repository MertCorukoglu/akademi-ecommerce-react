import React from 'react'
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  Outlet
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

function App() {

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Products</Menu.Item>
            <Menu.Item>Categories</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </>
  );
}

export default App;
