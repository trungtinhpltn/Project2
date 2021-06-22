import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem';
import Pagination from '../../../Common/Pagination/Pagination';
const maxItem=3;

Cart.propTypes={
    myCart: PropTypes.array,
}
Cart.defaultProps={
    myCart: []
}

function Cart( { myCart, display, setDisplay } ) {

    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);
    const [dataShow, setDataShow] = useState(() => {
        let dataInit = [];
        myCart.forEach( (p,inx)=>{
            if( inx >= (page-1)*maxItem && inx< page*maxItem){
                dataInit.push(p);
            }
        })
        return dataInit;
    });
    useEffect(() => {
        let dataInit = [];
        myCart.forEach( (p,inx)=>{
            if( inx >= (page-1)*maxItem && inx< page*maxItem){
                dataInit.push(p);
            }
        })
        setDataShow(dataInit);
    }, [myCart,page])
    useEffect( ()=>{
        const maxPage= Math.ceil(myCart.length/maxItem);
        if( maxPage> 0 && maxPage-page<0){
            setPage(maxPage);
        }
        setMaxPage(maxPage);
    },[myCart,page]);

    return (
        <div className={display===0 && myCart.length>0?"row show":"row hidden"}>
            <div className="col-12 col-lg-8">
                {
                        dataShow.map((product,inx)=>(
                            <CartItem key={inx} product={product}></CartItem>))
                }
                {
                    maxPage>1&&(
                        <div className="cart-pagination mb-3">
                            <Pagination page={page} maxPage={maxPage} setPage={setPage}/>
                        </div> 
                    )
                }      
            </div>
            <div className="col col-lg-4">
                <div className="card-body info-checkout cart-price-details" >
                    <label className="section-label mb-3">
                        Option
                    </label>
                    <div className="d-flex justify-content-between input-group align-items-center">
                        <input placeholder="Coupons" type="text" className="detail-input"/>
                        <span className="detail-input-text">Apply</span>
                        
                    </div>
                    <hr/>
                    <div className="price-details">
                        <h6 className="price-title">Price Details</h6>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between price-detail">
                                <div className="detail-title">Total MRP</div>
                                <div className="detail-amt">$222</div>
                            </li>
                            <li className="d-flex justify-content-between price-detail">
                                <div className="detail-title">Bag Discount</div>
                                <div className="detail-amt text-success">-25$</div>
                            </li>
                            <li className="d-flex justify-content-between price-detail">
                                <div className="detail-title">Estimated Tax</div>
                                <div className="detail-amt text-success">$1.3</div>
                            </li>
                            <li className="d-flex justify-content-between price-detail">
                                <div className="detail-title">EMI Eligibility</div>
                                <div className="detail-amt text-primary">Details</div>
                            </li>
                            <li className="d-flex justify-content-between price-detail">
                                <div className="detail-title">Delivery Charges</div>
                                <div className="detail-amt text-success">Free</div>
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <ul className="list-unstyled">
                        <li className="d-flex justify-content-between total">
                            <div className="total-title">Total</div>
                            <div className="total-price">$222</div>
                        </li>
                    </ul>
                    <button type="button" onClick={()=>setDisplay(1)} className="btn btn-primary btn-block">Place Order</button>
                </div>
            </div>
        </div>  
    )
}

export default Cart;
