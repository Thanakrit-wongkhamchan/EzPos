import { Layout, Menu, Button, ConfigProvider } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./Navbar.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import type { MenuProps } from "antd";
import {
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("หน้าหลัก", "1", <PieChartOutlined />),
  getItem("การใช้งาน", "sub1", <UserOutlined />, [
    getItem("รายการสินค้า", "2"),
    getItem("คำสั่งซื้อ", "3"),
  ]),
  getItem("การตั้งค่า", "sub2", <TeamOutlined />, [
    getItem("จัดการเมนู", "4"),
    getItem("คำสั่งซื้อทั้งหมด", "5"),
  ]),
];

const Navbar = () => {
  const navigate = useNavigate();
  const menuDashboard = () => {
    navigate("/app/dashBoard");
  };
  const menuListItem = () => {
    navigate("/app/listItem");
  };
  const menuOrderItem = () => {
    navigate("/app/orderItem");
  };
  const logout = () => {
    navigate("/app/login");
  };
  const ManageItem = () => {
    navigate("/app/manageItem");
  };

  const changeComponent = (e: any) => {
    const key = e.key;
    if (key === "1") {
      menuDashboard();
    } else if (key === "2") {
      menuListItem();
    } else if (key === "3") {
      menuOrderItem();
    } else if (key === "4") {
      ManageItem();
    }
    return;
  };

  const [collapsed, setCollapsed] = useState(false);
  const toggleSider = () => {
    setCollapsed(!collapsed); // สลับสถานะเปิด/ปิด Sider
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#00521e",

        },
      }}
    >
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          trigger={null} // ปิดการแสดงปุ่ม toggle
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              fontSize: 40,
              justifyContent: "center",
              margin: 10,
            }}
          >
            EzPos
          </div>
          <Menu
            onClick={changeComponent}
            mode="inline"
            theme="dark"
            defaultSelectedKeys={(["1"])}
              
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between", // จัดข้อความให้อยู่กึ่งกลางแนวนอน
            }}
          >
            <Button
              type="primary"
              onClick={toggleSider}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              style={{
                marginBottom: "20px",
              }}
            ></Button>
            <h1
              style={{
                marginRight: "80%",
                color: "white",
              }}
            >
              ชื่อของหน้า
            </h1>
            <div
              className="logout Button"
              onClick={logout}
              style={{
                width: 50,
                height: 30,
                background: "white",
                color: "red",
                fontSize: 10,
                borderRadius: 10,
                display: "flex", // ใช้ Flexbox
                justifyContent: "center", // จัดข้อความให้อยู่กึ่งกลางแนวนอน
                alignItems: "center", // จัดข้อความให้อยู่กึ่งกลางแนวตั้ง
                marginRight: "2%",
              }}
            >
              Logout
            </div>
          </Header>
          <Content
            style={{
              minHeight: "85.4vh",
            }}
          >
            <div
              className="Block-content"
              style={{
                minHeight: 200,
                padding: 24,
                backgroundColor: "#fff",
              }}
            >
              <Outlet></Outlet>
            </div>
          </Content>
          <Footer>
            EzPos ©{new Date().getFullYear()} Created by Soya && Kawaii
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default Navbar;
