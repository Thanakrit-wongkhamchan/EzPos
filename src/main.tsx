import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';


import App from './App.js'
import LoginPage from './Login-register/loginPage.js';
import AddItem from './component/ListItem.js';
import Dashboard from './component/Dashboard.js';
import WaitItem from './component/OrderItem.js';
import ManageItem from './component/sub-ListItem/ManageItem.js';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Router>
        <Routes>


          <Route path='/' element={<App></App>}>
            <Route  path='/listItem' element={<AddItem></AddItem> }></Route>
            <Route path='/dashBoard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/orderItem' element={<WaitItem></WaitItem>}></Route>
            <Route path='/listItem/manageItem' element={<ManageItem></ManageItem>}></Route>
          </Route>

          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          
          
        </Routes>
    </Router>
  </StrictMode>
)
