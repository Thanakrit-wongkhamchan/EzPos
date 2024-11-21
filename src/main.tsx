import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';


import App from './App.js'
import LoginPage from './Login-register/loginPage.js';
import AddItem from './component/ListItem.js';
import Dashboard from './component/Dashboard.js';
import WaitItem from './component/OrderItem.js';
import ManageItem from './component/ManageItem.js';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Router>
        <Routes>

          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path='/app' element={<App></App>}>
            <Route path='/app/dashBoard' element={<Dashboard></Dashboard>}></Route>
            <Route  path='/app/listItem' element={<AddItem></AddItem> }></Route>
            <Route path='/app/orderItem' element={<WaitItem></WaitItem>}></Route>
            <Route path='/app/manageItem' element={<ManageItem></ManageItem>}></Route>
          </Route>

          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          
          
        </Routes>
    </Router>
  </StrictMode>
)
