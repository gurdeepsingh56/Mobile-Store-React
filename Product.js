import React from 'react'
import {addToCart ,loadCurrentItem} from '../../Shopping/ShoppingAction'
import {connect } from 'react-redux'
import './Product.css'
import {Link } from  'react-router-dom'


function Product({Data ,addToCart ,loadCurrentItem }) {
    return (
        <div className="Product">
          
           <img 
           className="product_img"
           src={Data.image}
           alt=''
            />
           <div className="product_info">
              <p className="product_name">{Data.title}</p>
              <p className="product_description">{Data.description}</p>
              <p className="product_price">$ {Data.price}</p>
           </div>
           <div className="product_button">
            <Link to= '/ProductScreen'>
                <button className="buttoncommon" onClick={()=>loadCurrentItem(Data)}>
                    View Item
                </button>
            </Link>
            <button className="buttoncommon" onClick={()=>addToCart(Data.id)} >
                    Add To Cart
            </button>
           </div>
        </div>
    )
}
const mapDispatchToProps= (dispatch) =>{
    return{
        addToCart:(id) => dispatch(addToCart(id)),
        loadCurrentItem:(item) => dispatch(loadCurrentItem(item))
    }
}

export default connect (null, mapDispatchToProps)(Product)


