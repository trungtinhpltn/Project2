import React from 'react'
import {Link} from 'react-router-dom'
import CartItem from './CartItem';

function MyCart({myCart}) {
    function show(){
        if(myCart.length ===0){
            return (
                <div className="text-center cartTitle">
                    <p className="cartT">Your cart is empty</p>
                </div>
            )
        }
        else{
            return (
                <div>
                    <ul className="mt-3 cartList" >
                        {
                            myCart.map( (product, inx)=>{
                                return (
                                    <li key={inx} className="cartItem">
                                        <CartItem product={product}></CartItem>
                                    </li>
                                )
                            })
                        }
                    
                    </ul>
                    <div className="mb-3" >
                        <div className="d-flex justify-content-between" style={{padding: '1rem'}}>
                        <p className="cartTotal"> Total: </p>
                        <p className="totalPrice"> ${(myCart.reduce( (sum,e)=> sum+(e.price*e.cartQuantity),0)).toFixed(2)}</p>
                        </div>
                        <div style={{padding: '0 3rem'}}>
                        <Link className="btn btn-primary btn-block" to="/checkout">Check out</Link>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className="myCart">
            <div className="d-flex justify-content-between cartTitle">
                <p className="cartT">My cart</p>
                <p className="cartLength">{myCart.length} Items</p>
            </div>
            {
                show()
            }
        </div>
    )
}

export default MyCart
