import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class CustomLayout extends Component {
    render() {
        return (
            <div>


            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu
                    theme="dark" 
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >

                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{this.props.children}</div>
                </Content>
                
            </Layout>         
            </div>
        );
    }
}

export default CustomLayout;