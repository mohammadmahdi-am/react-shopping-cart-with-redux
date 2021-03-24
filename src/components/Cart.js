import React from 'react'
import {useState,useEffect} from 'react'
import Bounce from 'react-reveal/Bounce';
function Cart(props) {
    const [showProceed,setShowProceed] = useState(false)
    
    useEffect(()=>{
        if(props.cartItems.length > 0){
            setShowProceed(true)
        }else{
            setShowProceed(false)
        }

    },[props.cartItems])
    const showPrice = () => {

    
    return props.cartItems.reduce((a,c)=>{

        return (a + (parseInt(c.price) * parseInt(c.count)))

    },0)

    }




    return (
        <div>
            {props.cartItems.length === 0 ? (<h4>Your cart is empty</h4>) : (<h4>you have {props.cartItems.length} items in your cart </h4>) }
            {props.cartItems.map((product,index) => (
                <Bounce>
                <div key={index} className="mb-2">
                <button className="btn btn-danger  btn-sm" onClick={()=>{props.removeFromCart(product)}}>Remove</button>
                <img src={product.image} width="45px" height="45px"  alt=""/>
                <span style={{fontSize:"15px"}}>{product.model} - Count({product.count})</span>
            </div></Bounce>))
                
            }

            {showProceed && (
                <button className="btn btn-danger w-100">Proceed -{showPrice()} </button>
            )}
            
            
        </div>
    )
}

export default Cart
