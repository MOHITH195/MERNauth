import axios from 'axios';
import {useState} from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const loginuser =async (e) => {
    e.preventDefault();
    const {email,password} = data;
    try {
      const  {data} = await axios.post('/login',{
        email,
        password
      });
      if(data.error){
        toast.error(data.error);
      }else{
        toast.success("Login Succesful");
        setdata({});
        navigate('/dashboard');
      }
    } catch (error) {
      
    }
  }

const [data , setdata] = useState({
  email:'',
  password:''
})
  return (
    <div>
        <form onSubmit={loginuser}>
        
        <label>Email</label>
        <input type="email"  placeholder='enter email' value={data.email} onChange={(e) => setdata({
          ...data,
          email: e.target.value
        })}/>
        
        <label>Password</label>
        <input type="password"  placeholder='enter password' value={data.password} onChange={(e) => setdata({
          ...data,
          password: e.target.value
        })} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
