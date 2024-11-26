import { useState } from "react";
import { PlusOutlined } from '@ant-design/icons';
import {  Button, Form, Upload} from "antd";
import { useNavigate } from "react-router-dom";

const AddNewItem = () => {
  const navigate = useNavigate();
  

  const [itemName,setItemName] = useState("");
  const [itemPrice,setItemPrice] = useState();
  const inputName =(event :any)=>{
    setItemName(event.target.value);
  }
  const inputPrice =(event :any)=>{
    setItemPrice(event.target.value);
  }
  const handleSubmit = () => {
    const x = Math.random(); // แก้ปัญหา id ซ้ำ
    const itemData = {
      key: x,
      name: itemName,
      price: Number(itemPrice),
    };

    navigate('/app/manageItem', { state: { newItem: itemData } });

  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
      <h3> รายละเอียดรายการสินค้า</h3>
      <Form layout="vertical" onFinish={handleSubmit} autoComplete="off" >
        
        <Form.Item
          rules={[{ required: true, message: "กรุณาใส่ชื่อสินค้า" }]}
        >
          <label>ชื่อรายการ</label>
          <input type="primary" placeholder="ขื่อสินค้า" onChange={inputName} value={itemName} />
        </Form.Item>

        <Form.Item
          
          rules={[{ required: true, message: "กรุณาใส่ราคาสินค้า" }]}
        >
          <label>ราคารายการ</label>
          <input type="number" placeholder="ขื่อสินค้า" onChange={inputPrice} value={itemPrice}/>
          <label>บาท</label>
        </Form.Item>
        
        <Form.Item label="เพิ่มรูปภาพ" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <label>รายการเพิ่มเติม</label>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            เพิ่มรายการสินค้า
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddNewItem;
