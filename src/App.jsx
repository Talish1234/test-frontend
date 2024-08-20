import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useCookies } from 'react-cookie';
function App() {
  const [count, setCount] = useState(0);
  const BASE = "https://test-backend-eight-beta.vercel.app";
 
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const handleClick = async () => {
    try {
      const res = await axios.get(`${BASE}/cookie`,{withCredentials:true});
      console.log(res.data.success);
    } catch (error) {
      console.log(error);
    }
  };

  const handleget = async () => {
    try {
      const res = await axios.get(`${BASE}/getcookie`,{withCredentials:true});
      
     console.log(res.data);
     if(!res.data)
    console.log("err");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <button onClick={handleClick}>onClick</button>
      <button onClick={handleget}>onClick</button>
    </>
  );
}

export default App;
