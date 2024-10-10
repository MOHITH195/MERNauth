import './App.css'
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from './Context/userContext'
import Dashboard from './pages/Dashboard'
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;
function App() {
  

  return (
    //  <>
      <UserContextProvider>
      <Navbar />
      <Toaster position='top-right' toastOptions={{duration:2000}}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
      </UserContextProvider>
      // </>
    
  )
}

export default App;
