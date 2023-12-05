import { useState } from 'react'
import './App.css'
import {Layout, Space} from "antd";
import Header from "./components/header/Header.jsx";
import Homepage from "./components/header/Homepage.jsx";
import FooterPage from "./components/header/footer/footer.jsx";
const {  Header: AntdHeader, Content } = Layout;




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
                <FooterPage/>
            </Layout>

        </Space>

    </>
  )
}

export default App
