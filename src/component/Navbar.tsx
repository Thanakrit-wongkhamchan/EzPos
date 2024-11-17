import { useState ,FormEvent } from 'react';
import {  Layout, Menu, theme } from 'antd';
import './Navbar.css'
import { Outlet, useNavigate } from 'react-router-dom';



const { Header, Content, Footer } = Layout;
const items = [
  { key: "1", label: "Dashboard" },
  { key: "2", label: "หน้าสินค้า" },
  { key: "3", label: "หน้าคำสั่งซื้อ" }
]


const Navbar = () => {
  // const [switchComponent,setSwitchComponent] = useState("");
  
  const navigate = useNavigate();
  const menuDashboard = () => {
    navigate('/dashboard');
  };
  const menuItem = () => {
    navigate('/additem');
  };
  const menuWaitBuy = () => {
    navigate('/waititem');
  };
  const logout = () => {
    navigate('/login');
  };

  const {
    token: {},
  } = theme.useToken();

  return (
    <>
    <Layout >
    <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      > 
      <div style={{
        color: 'white',
        fontSize: 30,
        marginRight: 40,
      }}> 
      EzPos
      </div>
        <Menu
          onClick={(e) => {
            if (e.key === "1") {
              menuDashboard();
            } else if(e.key === "2"){
              menuWaitBuy();
            } else if(e.key === "3"){
              menuItem();
            }return
          }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        <div 
        onClick={logout}
        style={{
          width: 50,
          height: 30,
          background: 'white',
          color: 'red',
          fontSize: 10,
          borderRadius: 10,
          display: 'flex', // ใช้ Flexbox
          justifyContent: 'center', // จัดข้อความให้อยู่กึ่งกลางแนวนอน
          alignItems: 'center', // จัดข้อความให้อยู่กึ่งกลางแนวตั้ง
        }}> 
          Logout
        </div>
      </Header>
      <Content
        style={{
          minHeight: '85.5vh'
        }}
      >
        <div 
          className='Block-content'
          style={{
            minHeight: 200,
            padding: 24,
            backgroundColor: "#fff"
          }}
        >
          <Outlet></Outlet>
        </div>
      </Content>
      <Footer
       
        > 
          EzPos ©{new Date().getFullYear()} Created by Soya && Kawaii
        </Footer>
    </Layout>
    </>
    
  );
};
export default Navbar;