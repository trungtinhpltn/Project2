import React, { useContext } from 'react'
import { isWishlist, useIsCart,showRate} from '../../../Common/Common';
import {Context} from '../../../ContextAPI/ContextAPI';
function ProductDetail({product}) {

    const { handleWishList } = useContext(Context)

    return (
        <div className="card-body card-body-details">
            <div className="row">
                <div className="d-flex align-items-center justify-content-center col-12 col-md-5">
                    <div className="d-flex align-items-center justify-content-center">
                        <img className="img-fluid product-img" src={product.avatar} alt={product.name} />
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <h4 className="card-title mb-3">{product.name}</h4>
                    <span className="item-company card-text mb-2">By
                        <a className="company-name ml-2" href="/">{product.company}</a>
                    </span>
                    <div className="ecommerce-details-price d-flex flex-wrap mt-1">
                        <h4 className="item-price mr-1">${product.price}</h4>
                        {
                            showRate(product.rate)
                        }
                    </div>
                    <p className="card-text" style={{fontSize: '14px'}}>Available - <span className="text-success ml-25">{
                        product.isStock? "In Stock": "No"
                    }</span></p>
                    <p className="product-text-detail">
                        { product.description}
                    </p>

                    <ul className="product-features list-unstyled">
                        <li className="mb-3">
                            <span className="icon mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                            </span>
                            <span>{product.isFreeShipping? "Free Shipping": "No Free Shipping"}</span>
                        </li>
                        <li>
                            <span className="icon mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={12} y1={1} x2={12} y2={23} /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </span>
                            <span>EMI options available</span>
                        </li>
                    </ul>
                    <hr/>
                    <div className="product-color-options">
                        <h6>Colors</h6>
                        <div className="option-colors">
                            {
                                product.colors.map( (color,index)=> (
                                    <div key={index} className="btn color" style={{backgroundColor: color}} >
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <hr/>
                    <div className="detail__btn">
                        {useIsCart(product.isCart, product.id)}

                        <div className="btn btn-outline-light wishlist-detail" onClick={ ()=> handleWishList(product.id)}>
                            <span className="icon">
                                {
                                isWishlist(product.isWishlist)
                                }

                            </span>
                            Wishlist
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
