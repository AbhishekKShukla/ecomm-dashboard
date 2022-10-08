import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Header from "./Header";

function UpdateProduct(props){
    const param=useParams();
    const {id}=param;
    console.warn(id);

    //const [id]=useParams();
    //console.warn(id)
    // const history=useNavigate();
    // useEffect(()=>{
    //     if(!localStorage.getItem('user-info'))
    //     {
    //         history('/')
    //     }
    // },[]);
    return (
        <>
        <Header/>
        <h1>Update Product</h1>
        </>
    )
}
export default UpdateProduct;