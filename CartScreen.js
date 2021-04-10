import React ,{useState ,useEffect} from 'react'
import { connect } from 'react-redux'
import CartItem from '../CartItem'
import './CartScreen.css'

function CartScreen({cart}) {

    const [totalPrice ,setTotalPrice]=useState(0)
    const [totalItem ,setTotalItem]=useState(0)

    useEffect(()=>{
        let items=0
        let price=0

        cart.forEach((item)=>{
            items += item.qty
            price += item.qty * item.price
        })
       setTotalPrice(price)
       setTotalItem(items)
    },[cart ,totalPrice ,setTotalPrice ,totalItem ,setTotalItem])
    
    return (
        <div className="cartscreen">
            <div className="cartscreen_left">
              <h1>Shopping Cart</h1>  
                {cart.map( item =>(
                   <CartItem key={item.id} itemData={item}   className="cart_item"/>
                ))}
               
            </div>
            <div className="cartscreen_right">
                <div className="cartscreen_info">
                    <p>Subtotal item : {totalItem}</p>
                    <p>${totalPrice}</p>
                </div>
                <div> 
                    <button className="cartbutton">Processed To CheckOut</button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
  
    return{
        cart:state.shop.cart
    }  
}

export default connect(mapStateToProps)(CartScreen)
