import React, { useContext, useEffect,useState } from 'react'
import {Context} from '../../ContextAPI/ContextAPI';
import Cart from './Cart/Cart';
import Address from './Address/Address';
import Payment from './Payment/Payment';
import Nav from './Nav/Nav';

function Checkout() {

    const { dataProduct, setActive, setPathTitle } = useContext(Context);
    const [myCart,setMyCart] = useState([]);
    const [display,setDisplay]= useState(0);

    useEffect( ()=>{
        const data = dataProduct.filter( p=> p.isCart);
        setMyCart(data);
    },[dataProduct]);

    useEffect( ()=>{
        setActive(3);
        sessionStorage.setItem('active', 3);
    },[setActive]);

    useEffect(() => {
        setPathTitle({name: "Checkout",path: '/Checkout'});
    },[setPathTitle]);


    function showCartEmpty(){
        if(myCart.length===0){
            return (
                <div className="row">
                    <div className="col">
                        <div className="notifier">
                            <i className="fas fa-exclamation mr-3 ml-2" style={{color: '#07aeae'}}></i>Your cart is empty
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            <Nav myCart={myCart} display={display} setDisplay={setDisplay}/>
            {showCartEmpty()}
            <Cart myCart={myCart} display={display} setDisplay={setDisplay}></Cart>
            <Address display={display} setDisplay={setDisplay}></Address>
            <Payment display={display}></Payment>
        </div>
    )
}

export default Checkout;
