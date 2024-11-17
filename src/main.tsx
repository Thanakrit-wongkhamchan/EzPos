import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import LoginPage from './Login-register/loginPage.js';
import { BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom';
import Navbar from './component/Navbar.js';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Router>
        <Routes>
          <Route path='/' element={<LoginPage></LoginPage>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/mainpage' element={<App></App>}></Route>
        </Routes>
    </Router>
  </StrictMode>
)
