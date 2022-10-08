import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from "./Header";

const AddProduct=()=>{
    const history=useNavigate();
    const [Name,setName]=useState("");
    const [ProductType,setProductType]=useState("");
    const [Description,setDescription]=useState("");
    const [Price,setPrice]=useState("");

    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history('/add');
        }
    },[])
    async function saveProduct()
    {
        debugger;
        let item={Name,Price,ProductType,Description};
        //const formData=new FormData();
        
        // formData.append('Name',Name);
        // formData.append('FileUrl',FileUrl);
        // formData.append('Price',Price);
        // formData.append('Description',Description);
        
        let result=await fetch('http://localhost:52154/api/ReactUser/AddProduct',{
            method:"POST",
            headers:{
                 "content-type":"application/json",
                 "Accept":"application/json"
             },
            body:JSON.stringify(item)
        });
        result=await result.json();
        clearData();

    }
    function clearData()
    {
        setName("");
        setProductType("");
        setPrice("");
        setDescription("");
    }
    return (
        <>
        <Header/>
        <div className='col-sm-6 offset-sm-3'>
            <h1>Product List</h1>
            <input type="text" className='form-control' value={Name} onChange={(e)=>setName(e.target.value)} placeholder='Product Name'/><br/>
            {/* <input type="file" className='form-control' onChange={(e)=>setFileUrl(e.target.files[0])} placeholder='Product Image'/><br/> */}
            <input type="text" className='form-control' value={ProductType} onChange={(e)=>setProductType(e.target.value)} placeholder='Product Type'/><br/>
            <input type="text" className='form-control' value={Price} onChange={(e)=>setPrice(e.target.value)} placeholder='Product Price'/><br/>
            <textarea type="text" className='form-control' value={Description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description'/><br/>
            <button className='btn btn-primary'onClick={saveProduct}>Save</button>
            <button className='btn btn-danger' onClick={clearData}>Clear</button>
        </div>
        </>
    )
}
export default AddProduct;