import React from 'react';
import "./RightSide.css";
import "./RightSidePanel";
import Rating from '@mui/material/Rating';
import getSymbolFromCurrency from 'currency-symbol-map';
function Product(props) {
    return(
        <div className='Product'>
            
                <div className='product_image'>
                    <img src={props.definition.image} height="280px"></img>
                </div>
                <div className='product_name'>
                    {props.definition.name}
                </div>
                <div className='product_rating'>
                    <Rating name="size-medium"  style={{fontSize:"20px"}}defaultValue={2} />
                    {props.definition.rating}
                </div>
                <div className='product_price'>
                    {getSymbolFromCurrency('INR')}
                    {props.definition.price}
                </div>
            
            
        </div>
            
        
    )
}
export default Product;