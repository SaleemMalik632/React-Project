import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [message, setMessage] = useState("");
  const Name = useRef('');
  const Password = useRef('');
  const Email = useRef('');


  useEffect(() => {
    async function GetData() {
      const response = await fetch('http://localhost:8000/message', { method: 'GET' });
      if (response.ok) {
        const Data = await response.json();
        console.log(Data);
        alert(Data);
        toast.success('Data is loaded from server');
        setMessage(Data);
      } else {
        alert('error   in the message');
      }
    }
    // GetData();
  }, []);

  async function postToDB(){ 
      const doc = {
      Name: Name.current.value,
      Email: Email.current.value,
      Password: Password.current.value,
    }
    const response = await fetch('http://localhost:8000/SavData', { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(doc) });
    if (response.ok) {
        toast.success('Data is Save in the dataBase '); 
    } else {
      toast.error('Error in Post API');
    }
  }

  return (
    <div className="App">
      <h1>{message}</h1>
      <div>
        <input type="text" ref={Name} placeholder={'Enter Name '} />
        <input type="text" ref={Email} placeholder={'Enter Email '} />
        <input type="text" ref={Password} placeholder={'Enter Password '} />
        <button style={{ marginTop: '100px' }} onClick={postToDB} >Save Data</button>
      </div>
    </div>
  );
}

export default App 