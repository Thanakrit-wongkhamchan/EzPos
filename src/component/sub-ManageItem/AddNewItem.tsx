import { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Upload } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { Select, Space } from "antd";
import FormItem from "antd/es/form/FormItem";

const AddNewItem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const itemToEdit = location.state?.itemToEdit;

  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState();

  useEffect(() => {
    if (itemToEdit) {
      setItemName(itemToEdit.name);
      setItemPrice(itemToEdit.price);
    }
  }, [itemToEdit]);

  const inputName = (event: any) => {
    setItemName(event.target.value);
  };
  const inputPrice = (event: any) => {
    setItemPrice(event.target.value);
  };

  const handleSubmit = () => {
    const itemData = {
      key: itemToEdit ? itemToEdit.key : Math.random(), // ใช้ key เดิมถ้ามี
      name: itemName,
      price: Number(itemPrice),
    };

    navigate("/app/manageItem", { state: { newItem: itemData } }); // ส่งข้อมูลกลับไปยัง ManageItem
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
      <Form layout="vertical" onFinish={handleSubmit} autoComplete="off">
        
        <Form.Item rules={[{ required: true, message: "กรุณาใส่ชื่อสินค้า" }]}>
          <label>ชื่อรายการ</label>
          <input
            type="primary"
            placeholder="ขื่อสินค้า"
            onChange={inputName}
            value={itemName}
          />
        </Form.Item>
        
        <FormItem>
          <label>แคตตากอรี่</label>
          <Space wrap>
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              options={[
                { value: "jack", label: "เครื่องดื่มเย็น" },
                { value: "lucy", label: "เครื่องดื่มร้อน" },
                { value: "Yiminghe", label: "ขนมเค้ก" },
                { value: "disabled", label: "ขนมทั่วไป" },
                { value: "disabled", label: "กาแฟ" },
              ]}
            />
          </Space>
        </FormItem>
        
        <Form.Item rules={[{ required: true, message: "กรุณาใส่ราคาสินค้า" }]}>
          <label>ราคารายการ</label>
          <input
            type="number"
            placeholder="ขื่อสินค้า"
            onChange={inputPrice}
            value={itemPrice}
          />
          <label>บาท</label>
        </Form.Item>

        <Form.Item
          label="เพิ่มรูปภาพ"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: "none" }} type="button">
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
