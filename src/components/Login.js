import React, { useState } from 'react';
import User from './User';
import './Login.css'

const Login = ({data}) =>{

    const[details, setDetails] = useState({name:'', pass:''})
    const[flag, setFlag] = useState(false)
    const[ispressed, setIsPressed] = useState(false)
    
    const userDetails = {
      username : 'admin',
      password : 'admin'
    };
  
    const newData = [];

    
    console.log(ispressed)

    
    const hanldleSubmit = (e) =>{
        e.preventDefault();
       /* Authentication(details) */
        
       if(details.name === userDetails.username && details.pass === userDetails.password){
        alert("Success")
        setFlag(true)
       }
      else{
        alert("failed")
      }    
      
  
       
       console.log({...details})


    }
   
    console.log({...details})

    return(
        <div className='container'>
       

        { !flag ? (
            <div className='Login-container'>
            <form onSubmit={hanldleSubmit}>
            <input type='text' 
            placeholder='Username'
            value={details.name}
            onChange={e=>setDetails({...details, name:e.target.value})}
            />

            <input type='text' 
            placeholder='Password'
            value={details.pass}
            onChange={e=>setDetails({...details, pass:e.target.value})}
            />

            <button type='submit' placeholder='Login'/>
            </form>
        </div>
        ):(
            <div>
                <User name={details.name}/>
            </div>
        )}

</div>
    )



    
}

export default Login;
