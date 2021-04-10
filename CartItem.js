import React ,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import './CartItem.css'

import { connect } from 'react-redux';
import { deleteToCart } from '../Shopping/ShoppingAction';

function CartItem({itemData , deleteToCart}) {
    
    

    return (
        <div className="cartItem">
          <div className="cartItem_image">
              <img src={itemData.image} alt=" " />
          </div>
          <Link to='/' className='cartItem_name'>
             {itemData.title}
          </Link>
          <p className="cartItem_price" > $ {itemData.price}</p>

          <select className="cartItem_select" >
            <option value={itemData.qty}>{itemData.qty}</option>
           
          </select>
          <button className=" button" >
            <DeleteIcon onClick={()=>deleteToCart(itemData.id)}/>
          </button>
        </div> 
    )
}

const mapDispatchToProps =dispatch=>{
  return{
    deleteToCart:(id)=> dispatch(deleteToCart(id))
  }
}



export default connect ( null, mapDispatchToProps)(CartItem)
