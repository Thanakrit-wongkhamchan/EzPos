import { Table, Space } from "antd";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ManageItem = () => {
  const location = useLocation();
  const newItem = location.state?.newItem;
  
  const ItemsData = [
    { key: 1, name: "ลาเต้", price: 500 , catagory: "กาแฟ"},
    { key: 2, name: "กาบ", price: 30 , catagory: "กาแฟ"},
  ];
  const [items,setItems] = useState(ItemsData)
  useEffect(() => {
    if (newItem) {
      setItems((prevItems) => {
        const existingIndex = prevItems.findIndex(
          (item) => item.key === newItem.key
        );
        if (existingIndex !== -1) {
          // แก้ไขข้อมูลในรายการเดิม
          const updatedItems = [...prevItems];
          updatedItems[existingIndex] = newItem;
          return updatedItems;
        } else {
          // เพิ่มรายการใหม่
          return [newItem, ...prevItems];
        }
      });
    }
  }, [newItem]);
  
  const navigate = useNavigate();
  const AddNewItem = () => {
    navigate("/app/manageItem/addNewItem");
  }

  const DeleteItem = (key:any) =>{
    setItems((prevItems) => prevItems.filter((item) => item.key !== key));
  }
  const EditItem = (key: any) => {
    const itemToEdit = items.find((item) => item.key === key); // ค้นหารายการที่ต้องการแก้ไข
    if (itemToEdit) {
      navigate("/app/manageItem/addNewItem", { state: { itemToEdit } }); // ส่งข้อมูลไปยัง AddNewItem
    }
  };

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
    title: "Catagory",
    dataIndex: "catagory",
    key: "catagory",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: (record:any) => (
      <Space size="middle">
        <a onClick={() => EditItem(record.key)}>แก้ไขข้อมูล</a>
        <a onClick={() => DeleteItem(record.key)}>ลบข้อมูล</a>
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