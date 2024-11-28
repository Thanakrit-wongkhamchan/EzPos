import  './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
import { FormEvent } from 'react';

const LoginPage= () =>{
    const navigate = useNavigate();
    const inputUserName =(event :any)=>{
        setUserName(event.target.value);
      }
    const inputPassword =(event :any)=>{
        setPassword(event.target.value);
      }
    const handleLogin = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // ป้องกันการ reload หน้าจอ
        if(userName === "admin" && userPassword === "admin1234"){
            navigate('/app/dashboard'); // เปลี่ยนเส้นทางไปยัง /mainpage
        }else{
            navigate('/loginError')
        }
      };
    
    const [userName,setUserName] = useState('')
    const [userPassword,setPassword] = useState('')
    return(
        <div className='body'>
            <div className = "container-login">
                <h1>เข้าสู่ระบบ</h1>
                <form onSubmit={handleLogin}>
                    <div className=''>
                        <label> อีเมล</label>
                        <input type='text' placeholder='ชื่อผู้ใช้' onChange={inputUserName}></input>
                    </div>
                    <div>
                        <label> รหัสผ่าน</label>
                        <input type='password' placeholder='รหัสผ่าน' onChange={inputPassword}></input>
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