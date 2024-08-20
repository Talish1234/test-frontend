import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useCookies } from 'react-cookie';
function App() {
  const [count, setCount] = useState("");
  const BASE = "https://test-backend-4g0d.onrender.com";
  
  const handleClick = async () => {
    try {
      const res = await axios.get(`${BASE}/cookie`,{withCredentials:true});
      console.log(res.data.success);
    } catch (error) {
      
    }
  };

  const handleget = async () => {
    try {
      const res = await axios.get(`${BASE}/getcookie`,{withCredentials:true});
      
     setCount(res.data.val);
     
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <button onClick={handleClick}>onClick</button>
<h1>count</h1>
      <button onClick={handleget}>onClick</button>
    </>
  );
}

export default App;
