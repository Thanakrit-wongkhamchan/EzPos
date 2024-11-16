import './LoginPage.css'

const LoginPage= () =>{

    
    return(
        <>
            <div className="container">
                <div className="Left"></div>
                <form className="Right">
                    <div>
                        <label> email หรือ username</label>
                        <input type=''></input>
                    </div>
                    <div>
                        <label> รหัสผ่าน</label>
                        <input type=''></input>
                    </div>
                    <button type='submit'>เข้าสู่ระบบ</button>
                </form>
                
            </div>
        </>
    )
        
    

}

export default LoginPage