import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';


import App from './App.js'
import LoginPage from './Login-register/loginPage.js';
import Navbar from './component/Navbar.js';
import AddItem from './component/AddItem.js';
import Dashboard from './component/Dashboard.js';
import WaitItem from './component/WaitItem.js';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Router>
        <Routes>


          <Route path='/' element={<App></App>}>
            <Route path='/addItem' element={<AddItem></AddItem>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/waititem' element={<WaitItem></WaitItem>}></Route>
          </Route>


          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          
        </Routes>
    </Router>
  </StrictMode>
)
