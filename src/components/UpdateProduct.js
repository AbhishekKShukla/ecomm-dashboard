import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import Header from "./Header";

const UpdateProduct=()=>{
    const history=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        {
            history('/')
        }
    },[]);
    return (
        <>
        <Header/>
        <h1>Update Product</h1>
        </>
    )
}
export default UpdateProduct;