import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

const Protected =(props)=>{
    //console.warn(props)
    const history=useNavigate();
    let Cmp=props.Component;
    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        {
            history('/');
        }
        
    },[])
    return (
        <>
        <Cmp/>
        </>
    )
}
export default Protected;