import React, { useState, useEffect } from 'react'
import axios from 'axios'


import User from './components/User';
import Login from './components/Login'




function App() {
  
  const[data, setData] = useState({})
  
  const getData = async () =>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      setData(res.data)
      console.log(res.data)
    })
    .catch(error=> console.log(error))
  }
  useEffect(() =>{
    getData();
  },[])

  return (
    <div className='app'>
      
    <Login data={data}/>
     
    </div>
  )
}

export default App


