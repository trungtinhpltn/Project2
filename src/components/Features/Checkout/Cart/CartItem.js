import React, { useContext } from 'react'
import { showRate, toSlug } from '../../../Common/Common';
import { Context } from '../../../ContextAPI/ContextAPI'
import { Link } from 'react-router-dom'

function CartItem({product}) {

    const {handleIsCart,handleWishList, handleCartQuantity} = useContext(Context);

    function wishlist(isWishlist){
        if(isWishlist)
            return <i className="fa fa-heart" style={{color: '#fff', fontSize: '13px'}} />
        else
            return <i className="far fa-heart" style={{color: '#fff', fontSize: '13px'}} />
    }  
    return (
        <div className="mb-4 cart-item-detail">
            <div className="cart__item-img">
                <Link className="" to={"/detail/"+toSlug(product.name)+"."+product.id} ><img src={product.avatar} alt={product.name} width={200} /></Link>
            </div>
            <div className="card-body cart__item-body">
                <Link className="" to={"/detail/"+toSlug(product.name)+"."+product.id} ><h6 style={{color: "#7367f0"}}>{product.name}</h6></Link>
                 <p className="checkout-item-company">By {product.company}</p>
                 {
                     showRate(product.rate)
                 }
                 <p className="text-success mb-3 mt-2" style={{fontSize: '0.95rem',fontWeight:'500'}}>In Stock</p>
                 <div className="d-flex">
                     Qty<div className="cart-item-qty ml-2">
                             <div className="item-btnQty">
                             <button type="button" className="btnQty" onClick={()=>handleCartQuantity(product.cartQuantity-1,product.id)} disabled={product.cartQuantity ===1}><i className="fas fa-minus"></i></button>
                             </div>
                             <input type="text" value={product.cartQuantity} disabled={true}/>
                             <div className="item-btnQty">
                                <button type="button" onClick={()=>handleCartQuantity(product.cartQuantity+1,product.id)} className="btnQty"><i className="fas fa-plus"></i></button>
                             </div>
                         </div>
                 </div>
                 <p className="delivery mt-2">Delivery by, Jun 14, 2021</p>
                 <p className="sale text-success mb-0">sale</p>
            </div>
            <div className="card-body cart__item-button">
                <h6 className="cart-price">${(product.price*product.cartQuantity).toFixed(2)}</h6>
                <h6 className='mb-3'><span className="text-success free__shipping">Free Shipping</span></h6>
                <button type="button" className="btn btn-light btn-block" onClick={ ()=>handleIsCart(product.id)} style={{backgroundColor: '#e3e3e3'}}><i className="fas fa-times"></i> Remove</button>
                <button type="button" onClick={()=>handleWishList(product.id)} className="btn btn-primary btn-block">
                    <span className="icon">
                        {
                            wishlist(product.isWishlist)
                        }
                        
                    </span>Wishlist
                </button>
            </div>
        </div>
    )
}

export default CartItem;
