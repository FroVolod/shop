import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';


const { Header, Footer, Content } = Layout;

export const MyLayout = ({ content }) => {
  return(
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ color: 'white' }}>
          <Row justify="space-around">
            <Link to="/"><Col span={2}>Каталог</Col></Link>
            <Link to="/shoppig-cart"><Col span={2}>Корзина</Col></Link>
          </Row>
        </Header>
        <Content>
          { content }
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}
