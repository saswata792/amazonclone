import React, { useEffect,useState } from 'react';
import Product from './Product';
import {Link} from "react-router-dom";
import "./RightSide.css";
function RightSidePanel(props) {
    const [listOfProduct,setListOfProducts] = useState([]);
    useEffect(()=>{
        let list =[
            { id: 123456543, name : "Iphone10", rating: "34565", price: "4534", image:"https://ik.imagekit.io/saswataamazonclone/amazon-image/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65__pUxKJ__66.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1660373057140"},
            { id: 54342265, name : "Iphone11", rating: "656", price:"76543456", image:"https://ik.imagekit.io/saswataamazonclone/amazon-image/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__BF1GBiDsj.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1660373059492"},
            { id: 123453456543, name : "Iphone12", rating: "8754", price:"76543", image:"https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578"},
            { id: 12344545456543, name : "Iphone13", rating: "344574367565", price:"637357", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"},
            { id: 123465656543, name : "Iphone12", rating: "8754", price:"76543", image:"https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578"},
            { id: 2356346363, name : "Iphone13", rating: "344574367565", price:"637357", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"}
    
        ]
        setListOfProducts(list);
    },[]);
    
    return(
        <div>
            <div className="RightSide_main">
                {
                    listOfProduct.map ((item)=>(
                        <Link to={'/order/'+item.id}>
                                <Product definition={item}/>
                        </Link>
                    ))
                }   
            </div>
        </div>
        
    )
}
export default RightSidePanel;