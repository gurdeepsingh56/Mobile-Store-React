import React ,{useState ,useEffect}from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Avatar} from '@material-ui/core';
import './Navbar.css'
import { connect }  from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar=({cart , click})=>{
  
  const[ Count ,setCount]=useState(0)
  
  useEffect(()=>{
    let count =0;

    cart.forEach((item)=>{
     
      count += item.qty 
    })
  
  
    setCount(count)
  },[Count , cart])
 
    return (
        <nav className="navbar" >
            <div >
            <Link to="/" className="logo">
             
             <h1>Oppo Mobile Store</h1> 
       
            </Link>
            </div>
           
         
            <Link to="/CartScreen" className="nav_link">
             <div className="nav_left">
               <h3>Cart</h3>
               <ShoppingCartIcon className="icon"/>
               <Avatar className="avatar">{Count}</Avatar>
             </div>
             </Link>
             <div className='hamburger_menu' onClick={click}>
               <div></div>
               <div></div>
               <div></div>
             </div>
       
        </nav>
    )
  }
const mapStateToProps= (state) =>{

  return{
    cart:state.shop.cart
  }
}

export default connect(mapStateToProps)(Navbar)
