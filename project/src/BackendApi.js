import React, { useState, useEffect } from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {

    async function GetData() {
      const response = await fetch('http://localhost:8000/message');
      if (response.ok) {
        const Data = await response.json();
        console.log(Data);
        alert(Data);
        setMessage(Data);
      } else {
        alert('error   in the message');
      }
    }
    GetData();



  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <h1>{message}</h1>
    </div>
  );
}

export default App 