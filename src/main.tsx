import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import LoginPage from './Login-register/loginPage.js';
import { BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginPage></LoginPage>
  </StrictMode>,
)
