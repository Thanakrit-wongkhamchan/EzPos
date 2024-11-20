import { Flex, Layout, Menu, theme } from "antd";
import "./Navbar.css";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  { key: "1", label: "แดชบอร์ด" },
  { key: "2", label: "รายการสินค้า" },
  { key: "3", label: "คำสั่งซื้อ" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const menuDashboard = () => {
    navigate("/dashBoard");
  };
  const menuListItem = () => {
    navigate("/listItem");
  };
  const menuOrderItem = () => {
    navigate("/orderItem");
  };
  const logout = () => {
    navigate("/login");
  };

  // const titleName = (e,Pname)=>{
  //   const Pname =e.map

  // }
  const {
    token: {},
  } = theme.useToken();

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div
          style={{
            display:'flex',
            alignItems:'center',
            color: "white",
            fontSize: 40,
            justifyContent: "center",
            margin:10         
          }}
        >
          EzPos
        </div>
        <Menu
          onClick={(e) => {
            if (e.key === "1") {
              menuDashboard();
            } else if (e.key === "2") {
              menuListItem();
            } else if (e.key === "3") {
              menuOrderItem();
            }
            return;
          }}
          theme="dark"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
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
          <h1
            style={{
              marginLeft:'2%',
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
              marginRight:"2%"
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
  );
};
export default Navbar;
