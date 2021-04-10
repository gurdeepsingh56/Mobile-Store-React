import React from 'react'
import { connect } from "react-redux"
import Product from './Product/Product'

const Products =({products})=>{
    
    return(
        
        <>
        { products.map((prod)=>(
          <Product  key={prod.id} Data={prod}/>
        ))}  
        </>
    )
}

const mapStateToProps= (state) =>{
    return{
        products:state.shop.products
    }
}


export default connect(mapStateToProps)(Products)