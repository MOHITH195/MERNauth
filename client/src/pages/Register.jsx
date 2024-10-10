import axios from 'axios';
import React, {useState} from 'react';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  
  const [data , setdata] = useState({
    name: '',
    email:'',
    password:''
  });

  // sending to the backend

const registeruser =async (e) => {
      e.preventDefault();
      const {name,email,password} = data;
      try {
        const {data} = await axios.post('/register', {
          name,
          email,
          password
        });
        if(data.error){
          toast.error(data.error);
        }else{
          toast.success("Login Succesful");
          setdata({});
          navigate('/login');
        }
      } catch (error) {
        console.log(error);
 
      }
  }



  return (
    <div>
      <form onSubmit={registeruser}>
        <label>Name</label>
        <input type="text"  placeholder='enter name' value={data.name} onChange={(e) => setdata({
          ...data,
          name: e.target.value
        })} />
        
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

export default Register
