import { Table, Space } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ManageItem = () => {
  const location = useLocation();
  const newItem = location.state?.newItem;
  
  const ItemsData = [
    { key: 1, name: "ลาเต้", price: 500 },
    { key: 2, name: "กาบ", price: 30 },
  ];
  const [items,] = useState(
    newItem ? : ItemsData[newItem, ...ItemsData] 
  )

  // const onAddNewItem=(newItem:any) =>{
  //   setItem((oldItem) =>{
  //     return  [newItem,...oldItem]
  //   })
  // }
  
  const navigate = useNavigate();
  const AddNewItem = () => {
    navigate("/app/manageItem/addNewItem");
  }

  const column = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => (
        <Space size="middle">
          <a>แก้ไขข้อมูล</a>
          <a>ลบข้อมูล</a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex", // ใช้ Flexbox
          justifyContent: "center", // จัดข้อความให้อยู่กึ่งกลางแนวนอน
          alignItems: "center", // จัดข้อความให้อยู่กึ่งกลางแนวตั้ง
        }}
      >
        <h1>จัดการเมนูทั้งหมด </h1>
        <div
          onClick={AddNewItem}
          style={{
            width: 90,
            height: 30,
            background: "green",
            color: "white",
            fontSize: 15,
            borderRadius: 10,
            display: "flex", // ใช้ Flexbox
            justifyContent: "center", // จัดข้อความให้อยู่กึ่งกลางแนวนอน
            alignItems: "center", // จัดข้อความให้อยู่กึ่งกลางแนวตั้ง
            marginLeft: "auto",
          }}
        >
          เพิ่มเมนู
        </div>
      </div>
      <div
        className="Table"
        style={{ margin: 15, justifyContent: "space-between" }}
      >
        <Table dataSource={items}  columns={column} />
        
      </div>
    </>
  );
};

export default ManageItem;



{/* {frog.map((item) => 
                <div> {item.name}</div>
            )} */}