import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import Header from './Header';
const Registration=()=>{
    const history=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history('/add')
        }
    },[]);
    const [userName,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    
    async function SignupUser()
    {
       let item={userName,email,password};
       let result=await fetch("http://localhost:52154/api/ReactUser/RegisterReactUser",{
            method:'POST',
            headers:{
                "content-type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result=await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        history('/add');
    }
    return (
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">
            <h1>User Sign Up</h1>
            <input type="text" placeholder='User name' value={userName} onChange={(e)=>setUsername(e.target.value)} className="form-control"/><br/>
            <input type="text" placeholder='Email' autoComplete="new-password" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/><br/>
            <input type="password" placeholder='Password' autoComplete="new-password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"/><br/>
            <br/>
            <button onClick={SignupUser} className="btn btn-primary">Sign Up</button>
        </div>
        </>
    )
}
export default Registration;