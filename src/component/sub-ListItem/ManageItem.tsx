import { Table } from "antd";

const ManageItem = () => {
  const Items = [
    { key:1 ,name: "ลาเต้" ,price: 500},
    { key:2 ,name: "กาบ" ,price:30},
  ];

const column = [
  {
    title: 'Name',
    dataIndex: 'name',
    key:'name'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key:'price'
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>ลบข้อมูล</a>,
  },
  
]
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
                onClick={ManageItem}
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
      <div className="Table"
        style={{margin:15}}>
        <Table dataSource={Items} columns={column} />
        {/* {frog.map((item) => 
                <div> {item.name}</div>
            )} */}
      </div>
    </>
  );
};

export default ManageItem;
