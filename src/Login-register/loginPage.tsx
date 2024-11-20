import  './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';

const LoginPage= () =>{
    const navigate = useNavigate();
    
    const handleLogin = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // ป้องกันการ reload หน้าจอ
        navigate('/dashboard'); // เปลี่ยนเส้นทางไปยัง /mainpage
      };

    return(
        <div className='body'>
            <div className = "container-login">
                <h1>เข้าสู่ระบบ</h1>
                <form onSubmit={handleLogin}>
                    <div className=''>
                        <label> อีเมล</label>
                        <input type='text' placeholder='ชื่อผู้ใช้'></input>
                    </div>
                    <div>
                        <label> รหัสผ่าน</label>
                        <input type='password' placeholder='รหัสผ่าน'></input>
                    </div>
                    <div>
                        <button type='submit'>เข้าสู่ระบบ</button>
                    </div>
                </form>
            </div>
        </div>
    )
        
    

}

export default LoginPage