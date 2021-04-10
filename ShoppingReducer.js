import { ContactsTwoTone } from '@material-ui/icons'
import CartItem from '../Screen/CartItem'
import * as actionTypes from './ShoppingType'

const initialState={
    products:[
        {
            id:1,
            title:'vivo X60 Pro+',
            description:'32mp camera',
            price:500,
            image:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1616659506944/910e0e1b969be3655cb4340bd77f9984.png',
            countinstock:7,
            about:"x60 Pro+ is integrating vivo ZEISS Co-engineered Imaging System, bringign the ZEISS imaging quality to smartphones and making X60 Pro+ photography function more powerful and adding the famous ZEISS look to your images."
   
        },
        {
            id:2,
            title:'vivo Y51 A',
            description:'6000 mah battery',
            price:250,
            image:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1616655515337/eaf2c3c738ba860aeb0ed03c26961a1c.png',
            countinstock:5,
            about: "The display provides a wide and immersive view for both videos and games, and also filters out harmful blue light to prevent eye strain."
     
        },
        {
            id:3,
            title:'vivo Y31',
            description:'Ratina display',
            price:400,
            image:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1610349587466/6d023c4bc057c9be7d1a811e1191217e.png',
            countinstock:8,
            about:'Y31 features a 16.71 cm (6.58) Halo FullView Display with FHD+ resolution and P3 color gamut; providing a wide and immersive view for both videos and games.The display also filters out harmful blue light to prevent eye strain.'
         
        },
        {
            id:4,
            title:'vivo Y12 s',
            description:'UltraWide Screen',
            price:290,
            image:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1606460955201/b561e31ff7fe808e3e7c856bdd751de4.png',
            countinstock:2,
            about:'Y12 features a 16.15 cm (6.35) Halo FullView Display with 19:3 :9 aspect ratio. Super narrow bezels on all sides stretch the screen-to-body ratio to 89%, creating a flagship-standard visual impact.'
      
        },
        {
            id:5,
            title:'vivo X60',
            description:'Amoled Screen',
            price:380,
            image:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1603873364168/bcb4d3746eadbc7c1471990bea969faa.png',
            countinstock:6,
            about:"x60 Pro is integrating vivo ZEISS Co-engineered Imaging System, bringign the ZEISS imaging quality to smartphones and making X60 Pro photography function more powerful and adding the famous ZEISS look to your images."
         
        },
        {
            id:6,
            title:'vivo S1 Pro',
            description:'HDD display',
            price:300,
            image:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1577171351733/b82f801b5bef50d2ed6d9ce44a0116d3.png',
            countinstock:8,
            about:'Starting our style journey from S1, we take the style quotient one step higher. Taking inspirations from fine jeweley and royal palaces, we managed to break away from squares and circles and created a new unique diamond shaped camera panel'

        },
        {
            id:7,
            title:'TWS Neo',
            description:'Bluetooth Earphone',
            price:560,
            image:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1594884115848/cfdf025be1f73a1633c4ee8695ea17a9.jpg',
            countinstock:1,
            about:"Super long-lasting battery power is achieved via a new Qualcomm low-power wireless chip, an excellent power management system"
         
        }
],
cart:[ ],
currentItem: [],
}



const shopReducer=(state=initialState ,action)=>{
   
    switch(action.type){
        
        case actionTypes.ADD_TO_CART:
            //Get the item data from the Array
             
           const item = state.products.find(prod => prod.id === action.payload.id)
           
           console.log(item)
          
            //Check if item is in cart already
          
           const inCart= state.cart.find((item)=> item.id === action.payload.id? true :false )
            
      
            console.log(inCart)
        return{
            ...state,
            cart: inCart? state.cart.map((item)=> item.id === action.payload.id ? {...item, qty:item.qty +1} : item) : [...state.cart , {...item ,qty : 1}]
           
        }

        case actionTypes.DELETE_TO_CART:
            return{
                ...state,
                cart:state.cart.filter((item) => item.id !== action.payload.id )
            }
        break;
        case actionTypes.ADJUST_QUANTITY:
            return{
                ...state,
                cart:state.cart.map(item => item.id === action.payload.id ? {...item ,qty : +action.payload.qty}: item )
            }
        break;
        case actionTypes.LOAD_CURRENT_ITEM:
            return{
                ...state,
                currentItem:action.payload,
            }
    

        default:return state;
    }

}

export default shopReducer