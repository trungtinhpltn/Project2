import React, { useContext,useEffect } from 'react'
import {Context} from '../../ContextAPI/ContextAPI';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import { useRouteMatch } from 'react-router-dom'
import ProductDetail from './ProductDetail/ProductDetail';
function Details() {
    const match = useRouteMatch();
    const { dataProduct, setActive, setLink, setPathTitle } = useContext(Context)
    const pId = parseInt(match.params.pId,10);
    const product = dataProduct.find( e=> e.id === pId);
    const link= match.url;
    useEffect( ()=>{
        setActive(1);
        sessionStorage.setItem('active', 1);
        sessionStorage.setItem('link', link);
        setLink(link);
    },[setActive,setLink,link]);
    useEffect(() => {
        window.scrollTo(0, 0)
    },[product])
    useEffect(() => {
        setPathTitle({name: "Product Details",path: link, exactName: 'Details' });
    },[setPathTitle,link]);

    return (
        <div className="row mt-3">
            <div className="col">
                
                <ProductDetail product={product}/>
                
                <RelatedProducts pId={product.id}></RelatedProducts>
            </div>
        </div>
    )
}

export default Details;
