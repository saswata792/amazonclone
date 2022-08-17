import React,{useContext,useEffect,useState} from 'react';
import { Grid } from '@mui/material';
import Checkoutitems from './Checkoutitems';
import "./Checkout.css";
import {CartContext} from '../CartContext';
import { render } from '@testing-library/react';
import axios from 'axios';
function Checkout(){
    // let users=[]
    // const axiosRequest = require('axios');
    // axiosRequest.get('http://localhost:8081/amazon/addToCart/show/da1986ca-a7a5-4211-99da-75e46a3b459c')
    // .then(response =>{
    //     response.data.list.forEach((item)=>{
    //         users.push(item);
    //     })
    // })
    // .catch(error=>{
    //     console.log("error");
    // })
    // console.log(users);
    // users.map((item)=>(console.log(item)));
    const [dummy, setUsers] = useState([]);
    const [userid,setUserId]=useState([]);
    const fetchUsers = async () => {
    const response = await fetch(
      "http://localhost:8081/amazon/addToCart/show/da1986ca-a7a5-4211-99da-75e46a3b459c"
    );
        const data = await response.json();
        //update the state
        setUsers(data.list);
        setUserId(data.userId);
    };
    useEffect(() => {
        fetchUsers();
      }, []);
    
    console.log(userid);
    let users_final_count=new Map();
    let users_final_obj=new Map();
    dummy.forEach((item)=>{
        if(users_final_count[item.productID]!=undefined)
            {
                users_final_count[item.productID]=users_final_count[item.productID]+1
            }
            else
            {
                users_final_count[item.productID]=1
            }
    })
    
    dummy.forEach((item)=>{
        
        users_final_obj[item.productID]=item
    
    })
    let dummy2={}
    let users=[]
    //console.log(users_final_count["bb5ef211-85da-4f05-80ed-16fd8a2ea3fb"])
    for(let j in users_final_count)
    {
        //console.log(users_final_count.get(j))
        //console.log(users_final_obj.get(j))
        dummy2={
            count:users_final_count[j],
            obj:users_final_obj[j],
            id:userid.toString(),
        }
        users.push(dummy2)   
    }
    
    console.log(users);
      //posts.forEach((item) => { console.log(item) });
    //const {item,size,increment,decrement} = useContext(CartContext);
    // const delTOCart = function() {
    //     decrement(item);
    // }
    const cartValue=function number()
    {
        let no_of_cart_items=0;
        users.forEach((value)=>{
            no_of_cart_items+=parseInt(value.count);
        })
        return no_of_cart_items;
    }
    const cartNum=function sum()
    {
        let total_sum=0;
        users.forEach((value)=>{
            total_sum+=parseInt(value.obj.price)*(value.count);
        })
        return total_sum;
    }
    return(
            <div className='checkout_body'>
                <Grid container>
                    <Grid item={10}>
                        <div className='checkout_container'>
                            <div style={{fontSize:"30px",fontWeight:"500",padding:"20px 0px 0px 20px"}}>Shopping Cart</div>
                            <div>
                                {
                                    users.map((value)=>(
                                        <Checkoutitems definition={value}/>
                                    ))            
                                }
                            </div>
                           
                        </div>
                    </Grid>
                    <Grid item={2}>
                         <div style={{width:"300px",height:"200px",padding:"20px",marginTop:"25px",backgroundColor:"white"}}></div>
                         <div style={{fontSize:"26px"}}>SubTotal({cartValue()+"items"}):<strong>{cartNum()}</strong></div>
                         <div>
                            <button  className="placeorder_button">Proceed to Buy</button>
                         </div>
                    </Grid>
                </Grid>
            </div>
        )
    
    
};
export default Checkout;