import React from 'react';
import "./Checkout.css";
import Rating from '@mui/material/Rating';
import { height } from '@mui/system';
import axios from 'axios';
import Checkout from './Checkout';


function Checkoutitems(props){
    const addToCart=function addCart()
    {
        let str="http://localhost:8081/amazon/addToCart/add/"+props.definition.id+"/"+props.definition.obj.productID;
        
        fetch(str)
        .then(response => response.json())
        .catch((error) => console.error("oops:",error));
    }
    const deleteFromCart=function deleteCart()
    {
        let str="http://localhost:8081/amazon/addToCart/remove/"+props.definition.id+"/"+props.definition.obj.productID;
        
        fetch(str)
        .then(response => response.json())
        .catch((error) => console.error("oops:",error));
    }
    return(
        <div>
            <div style={{border: '1px solid #E7E7E7',width:"95%",display:"flex",height:"250px",margin:"25px"}}>
                <div style={{margin:"25px"}}>
                    <img height="200px" src={props.definition.obj.imageURL}/>
                </div>
                <div style={{marginTop:"20px"}}>
                    <div style={{fontSize:"20px"}} className='textgap'>{props.definition.obj.name}</div>
                    <div style={{fontWeight:"bold"}} className='textgap'>{props.definition.obj.price}</div>
                    <div className='textgap'>
                        <Rating name="read-only" value="3" readOnly  style={{ fontSize: "20px"}}/>
                        {props.definition.obj.rating} ratings 
                    </div>
                    <div style={{display:"flex"}}>
                        <button style={{backgroundColor:"white",height:"40px",width:"40px",fontSize:"30px"}} onClick={deleteFromCart}>-</button>
                        <div style={{backgroundColor:"white" ,height:"40px",width:"40px",fontSize:"30px",margin:"5px"}}>{props.definition.count}</div>
                        <button style={{backgroundColor:"white",height:"40px",width:"40px",fontSize:"30px"}} onClick={addToCart}>+</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
    );
}
export default Checkoutitems;