import * as actionTypes from './ShoppingType'

export const addToCart=(itemID)=>{
    return{
        type:actionTypes.ADD_TO_CART,
        payload:{
            id:itemID
        }
    }
}

export const deleteToCart=(itemID)=>{
       return{
           type:actionTypes.DELETE_TO_CART,
           payload:{
               id:itemID
           }
       }
}
export const adjustQty=(itemID ,value)=>{
    return{
        type:actionTypes.ADJUST_QUANTITY,
        payload:{
            id:itemID,
            qty:value,
        }
    }
}
export const loadCurrentItem=(item)=>{
    return{
        type:actionTypes.LOAD_CURRENT_ITEM,
        payload:item
    }
}
