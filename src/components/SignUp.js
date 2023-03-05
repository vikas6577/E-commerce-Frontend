import React,{useState} from 'react'

const SignUp=()=>{
    const [name,setName]=useState("");
    const [password,SetPassword]=useState("");
    const [email,setEmail]=useState("");
    const collectData=()=>{
        console.log(name,email,password)
    }
    return (
        <div className='register'>
            <h1>Register</h1>
            <input className='inputBox' type="text"  value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' />
            <input className='inputBox'type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />
            <input className='inputBox'type="password"  value={password} onChange={(e)=>SetPassword(e.target.value)} placeholder='Enter Password' />
            <button onClick={collectData} type='button' className='appButton'>Sign Up</button>
        </div>
    )
}

export default SignUp