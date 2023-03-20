import React from 'react'
import { useState } from 'react';

const AddProduct=()=>{
    const [name,setName]=React.useState("");
    const [price,setPrice]=React.useState("");
    const [category,setCategory]=React.useState("");
    const [company,setCompany]=React.useState("");
    const [error,setError]=React.useState(false);
    const handleproduct=async()=>{
        if(!name || !price || !category || !company){
            setError(true);
            return;
        }
         console.log(name,price,category,company);
         const userId=JSON.parse(localStorage.getItem('user'))._id;
         let result=await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,userId,company}),
            headers:{
                'Content-type':'application/json'
            }
         });
         result = await result.json();
         console.log(result);
    }
    return (
        <div className='Addproduct'>
            <h1>Add Product</h1>
            <input type="text"  className='inputBox' placeholder='Enter product name' onChange={(e)=>setName(e.target.value)} value={name} />
            {error && !name &&<span className='invalid-product'>Enter valid name</span>}
            <input type="text" className='inputBox' placeholder='Enter product price' onChange={(e)=>setPrice(e.target.value)} value={price}/>
            {error && !price &&<span className='invalid-product'>Enter valid name</span>}
            <input type="text" className='inputBox' placeholder='Enter product category' onChange={(e)=>setCategory(e.target.value)} value={category} />
            {error && !category &&<span className='invalid-product'>Enter valid name</span>}
            <input type="text" className='inputBox' placeholder='Enter product company' onChange={(e)=>setCompany(e.target.value)} value={company}/>
            {error && !company &&<span className='invalid-product'>Enter valid name</span>}
            <button className='appButton' type='button' onClick={handleproduct}>Add Product</button>
        </div>
    )
}

export default AddProduct;