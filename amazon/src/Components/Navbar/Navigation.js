import React,{Component} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import CartContextProvider, { CartContext } from '../CartContext';
class Navbar extends Component{
    static contextType=CartContext;
    constructor(props){
        super(props);
        this.state = { }
    }
    render() {
        let {item,size,increment}=this.context;
        return(
            <React.Fragment>
                <div className="navbar_component">
                    <div className="navbar_logo"></div>
                    <div className="navbar_locator">
                        <div className="navbar_locatorImage"></div>
                        <div className="navbar_location">Bangalore</div>
                    </div>
                    <div className='navbar_searchcomponent'>
                        <div className='navbar_dropdown'>
                            <select>
                                <option value="All">All</option>;
                                <option value="Alexa">Alexa</option>
                                <option value="Books">Books</option>
                                <option value="Baby">Baby</option>
                                <option value="Beauty">Beauty</option>
                                <option value="Clothes">Clothes</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" className='navbar_searchbox'></input>
                        </div>
                        <div className='navbar_searchboxdiv'>
                                <div className="navbar_searchicon"></div>
                        </div>
                    </div>
                    <div className='navbar_signin'>
                        <div style={{fontSize:"14px"}}>Hello,Sign In</div>
                        <div style={{fontWeight:"Bold"}}>Account & List</div>
                    </div>
                    <div className='navbar_returns'>
                        <div style={{fontSize:"14px"}}>Returns</div>
                        <div style={{fontWeight:"Bold"}}>Order</div>    
                    </div>
                    <div className='navbar_cart'>
                        <div  className='cart_image'></div>
                        <div className='cart_item'>{size}</div>
                        <div className='navbar_text_cart'>Cart</div>
                    </div>
                </div>
                <div className='navbar_footer'>
                    <div className='navbar_footer_text'>Best Seller</div>
                    <Link to='/display'>
                        <div className='navbar_footer_text' style={{color:"white"}}>Mobile</div>
                    </Link>
                    <div className='navbar_footer_text'>Amazon Pay</div>
                    <div className='navbar_footer_text'>Fashion</div>
                    <div className='navbar_footer_text'>Electronics</div>
                    <div className='navbar_footer_text'>Prime</div>
                    <div className='navbar_footer_text'>New Release</div>
                    <div className='navbar_footer_text'>Customer Service</div>
                    <div className='navbar_footer_text'>Computers</div>
                    <div className='navbar_footer_text'>Home & KItchen</div>
                </div>
            </React.Fragment>
        );
    }
}
export default Navbar;
