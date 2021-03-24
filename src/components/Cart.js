import React from 'react'

function Cart(props) {
    return (
        <div>
            {props.cartItems.length === 0 ? (<h4>Your cart is empty</h4>) : (<h4>you have {props.cartItems.length} items in your cart </h4>) }
            {props.cartItems.map((product,index) => (
            
            <div key={index} className="mb-2">
                <button className="btn btn-danger  btn-sm" onClick={()=>{props.removeFromCart(product)}}>Remove</button>
                <img src={product.image} width="45px" height="45px"  alt=""/>
                <span style={{fontSize:"15px"}}>{product.model} - Count({product.count})</span>
            </div>))}
            
        </div>
    )
}

export default Cart
