import React ,{useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './SideDrawer.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Avatar} from '@material-ui/core';
import {connect }  from 'react-redux'

function SideDrawer({show , click ,cart}) {
    const [Count ,setCount ]=useState(0)

    useEffect(()=>{
        let count = 0

        cart.forEach((item)=>{
             count += item.qty
        })
        setCount(count)
    },[Count , cart])
     
    const SideDrawerClass=['sidedrawer']

    if(show){
        SideDrawerClass.push('show')
    }
    
    
    return (
        <div className={ SideDrawerClass.join(' ')}>
          <ul className="sideDrawer_links" onClick={click}>
             <li>
                 <Link to="/CartScreen">
                   <h3> Cart</h3> 
                   <ShoppingCartIcon className="shoppingicon"/>
                   <Avatar className="avatar">{Count}</Avatar>
                 </Link>
             </li>
             <li>
                 <Link to='/' >
                     Shop
                 </Link>
             </li>
              
          </ul>
        
         </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        cart:state.shop.cart
    }
}

export default connect (mapStateToProps)(SideDrawer)
