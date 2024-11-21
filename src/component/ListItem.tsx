
const ListItem = () =>{
   
    return(
        <>  
            <div className='container'
                style={{
                    display: 'flex',
                }}>
                <div className='ItemDiv'
                    style={{
                        display: 'flex', // ใช้ Flexbox
                        justifyContent: 'center', // จัดข้อความให้อยู่กึ่งกลางแนวนอน
                        width:'73%',
                        padding:15,
                        borderRadius:10,
                        border: '1px solid black',
                    }}>
                    <h1>รายการสินค้า</h1>
                </div>
                <div className='CartDiv'
                style={{
                    display: 'flex', // ใช้ Flexbox
                    flexDirection: 'column', // จัดองค์ประกอบในแนวตั้ง
                    justifyContent: 'flex-start',
                    alignItems: 'center', // จัดข้อความให้อยู่กึ่งกลางแนวตั้ง
                    width: '25%',
                    borderRadius:10,
                    border: '1px solid black',
                    marginLeft: 'auto'
                }}>
                    <h1 style={{margin:5}}> ตะกร้าสินค้า </h1>
                    <div style={{ borderBottom:'1px solid black', width:'90%', margin:10}}></div>
                </div>
            </div>
           
            
        </>
        
    )
}

export default ListItem