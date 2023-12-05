import { useState } from 'react'
import './App.css'
import {Layout, Space} from "antd";
import Header from "./components/header/Header.jsx";
import Homepage from "./components/header/Homepage.jsx";
const {  Header: AntdHeader, Footer, Sider, Content } = Layout;




const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};
function App() {


  return (
    <>
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
               <Header/>
                <Content ><Homepage/></Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>

        </Space>

    </>
  )
}

export default App
