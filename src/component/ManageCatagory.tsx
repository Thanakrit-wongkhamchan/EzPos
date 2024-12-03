import { Table, Space } from "antd";
import { useState,useEffect } from "react";

const ManageCatagory = () => {
  const items = [
    {key: 1,type:"กาแฟ"},
    {key: 2,type:"ชา"}
  ]
  const column = [
    {
      title: "Type",
      dataIndex: "type",
      key: "name",
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
  const EditItem =(key:any) =>{
    
  }
  const DeleteItem =(key:any) =>{

  }
  return(
    <>
        <Table dataSource={items}  columns={column} />
    </>
    
    )
  
};

export default ManageCatagory