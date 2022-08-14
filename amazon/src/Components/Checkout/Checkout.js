import React,{useContext} from 'react';
import { Grid } from '@mui/material';
import Checkoutitems from './Checkoutitems';
import "./Checkout.css";
import {CartContext} from '../CartContext';
function Checkout(props){
    const {item,size,increment,decrement} = useContext(CartContext);
    const delTOCart = function() {
        decrement(item);
    }
    const cartValue=function sum()
    {
        let total_sum=0;
        item.forEach((value)=>{
            total_sum+=parseInt(value.price);
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
                                item.length > 0 ?
                                item.map((value)=>(
                                        <Checkoutitems definition={value}/>
                                )):<div style={{height: "100vh", margin: "30px" }}> Please buy something</div>
                            }
                        </div>
                        <button onClick={delTOCart}>Delete</button>
                    </div>
                </Grid>
                <Grid item={2}>
                     <div style={{width:"300px",height:"200px",padding:"20px",marginTop:"25px",backgroundColor:"white"}}></div>
                     <div style={{fontSize:"26px"}}>SubTotal({item.length+"items"}):<strong>{cartValue()}</strong></div>
                     <div>
                        <button  className="placeorder_button">Proceed to Buy</button>
                     </div>
                </Grid>
            </Grid>
        </div>
    )

};
export default Checkout;