import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from "./Header";

const AddProduct=()=>{
    const history=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history('/add');
        }
    },[])
    return (
        <>
        <Header/>
        <h1>Add Product</h1>
        </>
    )
}
export default AddProduct;