import React,{useContext} from 'react'
import {Context} from '../../ContextAPI/ContextAPI.js';
function CartItem({product}) {
    const {handleIsCart,handleCartQuantity} = useContext(Context);
    return (
        <div className="align-items-center media">
            <img className="d-block rounded mr-1" src={product.avatar} alt={product.name} width={62} />
            <div className="d-flex align-items-center media-body ml-2">
                <span onClick={()=>handleIsCart(product.id)} className="cartRemove"><i className="fas fa-times"></i></span>
                <div className="media-heading">
                <h6 className="cart-item-title">
                    {product.name}
                </h6>
                <small className="cart-item-by">by {product.company}</small>
                </div>
                <div className="cart-item-qty ml-2">
                    <div className="item-btnQty">
                    <button type="button" className="btnQty" onClick={()=>handleCartQuantity(product.cartQuantity-1,product.id)} disabled={product.cartQuantity ===1}><i className="fas fa-minus"></i></button>
                    </div>
                    <input type="text" value={product.cartQuantity} disabled={true}/>
                    <div className="item-btnQty">
                    <button type="button" onClick={()=>handleCartQuantity(product.cartQuantity+1,product.id)} className="btnQty"><i className="fas fa-plus"></i></button>
                    </div>
                </div>
                <p className="cartPrice ml-4 mr-2">${(product.price*product.cartQuantity).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default CartItem
