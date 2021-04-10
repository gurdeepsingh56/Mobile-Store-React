import { Container , useEffect} from '@material-ui/core'
import React ,{useState} from 'react'
import {connect} from 'react-redux'
import { addToCart, adjustQty } from '../../Shopping/ShoppingAction'
import './ProductScreen.css'

function ProductScreen({currentItem ,addToCart ,adjustQty }) {
  const [input ,setInput]=useState(currentItem.qty)
    
  const onChangeHandler=(e)=>{
     setInput (e.target.value)
     adjustQty(currentItem.qty , e.target.value)
    }
    
  
     
    return (
        <Container >
        <div className="productscreen">
          <div className="productscreen_left">
              <div className="left_image">
                  <img src={currentItem.image} alt="" />
              </div>
          
            <div className="left_info">
              <p className="left_name">{currentItem.title}</p>
              <p>Price: ${currentItem.price}</p>
              <p>{currentItem.about}</p>
            </div>
          </div>
          <div className="productscreen_right">
            <div className="productscreen_info">
              <p>Price : <span>$ {currentItem.price}</span></p>
              <p>Status :<span>{currentItem.countinstock}</span></p>
            
                  <button type="button" className="btn"  onClick={()=>addToCart(currentItem.id ,currentItem.qty)} onSubmit={onChangeHandler}>Add To Cart</button>
            </div>
          </div>
          
        </div> 
        </Container>
    )
}

const mapStateToProps = (state)=>{
   
  return{
   currentItem: state.shop.currentItem,
   
  }
}
const mapDispatchToProps= dispatch =>{
  return{
    addToCart:(id) => dispatch(addToCart(id)),
    adjustQty:(id,value) => dispatch(adjustQty(id,value))
  }
}

export default connect (mapStateToProps , mapDispatchToProps)(ProductScreen)
