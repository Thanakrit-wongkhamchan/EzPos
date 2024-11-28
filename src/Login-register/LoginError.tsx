import { Button, Result } from "antd";
import { useNavigate, useLocation } from "react-router-dom";


const LoginError = () => {
    const nevigate = useNavigate()
    const loginReturn = () => {
        nevigate("/login")
    }
  return (
    
    <div>
      <Result
        status="warning"
        title="รหัสผ่านไม่ถูกต้องกรุณาใส่รหัสผ่านใหม่"
        extra={
          <Button type="primary" key="console" onClick={loginReturn}>
            ย้อนกลับไปหน้าล็อกอิน
          </Button>
        }
      />
    </div>
  );
};

export default LoginError;
