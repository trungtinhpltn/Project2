import React, { useContext, useState, useEffect } from 'react'
import {Context} from '../../../ContextAPI/ContextAPI';
import RelatedItem from './RelatedItem';

function RelatedProducts({pId}) {

    const [element,setElement] = useState(null);
    const {dataProduct} = useContext(Context);
    const relatedProducts = dataProduct.filter( (p)=> p.id !== pId);
    const [td,setTD] = useState(0);
    const [items,setItems] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);
    const [width,setWidth] = useState(0);
    const [indexItem,setIndexItem] = useState(0);

    useEffect(() => {
        let ww = window.innerWidth;
        if(ww>= 992){
            setItems(3);
        }
        else if ( ww<=991 && ww>=576){
            setItems(2);
        }
        else{
            setItems(1);
        }
        let e=document.querySelector('.element-slide');
        setWidth(Math.round(e.clientWidth));
        setElement(e);
    }, [relatedProducts]);

    useEffect( ()=>{
        setMaxIndex(relatedProducts.length-items);
    },[relatedProducts,items]);

    useEffect( ()=>{
        let newTd = (-1)*indexItem*Math.round(width);
        setTD(newTd);
    },[indexItem,width]);

    useEffect(() => {
        window.onresize = ()=>{
            let wc = element.clientWidth;
            let ww = window.innerWidth;
            let iid = 0;
            if(ww>= 992){
                iid= indexItem+items-3;
                setItems(3);
            }
            else if ( ww<=991 && ww>=576){
                iid= indexItem+items-2;
                setItems(2);
            }
            else{
                iid= indexItem+items-1;
                setItems(1);
            }
            if(indexItem > 0 && iid >=0)
                setIndexItem(iid);
            else{
                setIndexItem(0);
            }
            setWidth(Math.round(wc));
        }
        return () => {
            window.onresize=null;
        }
    }, [items,element,indexItem]);

    function handlePrev(){
        if( indexItem > 0){
            setIndexItem(indexItem-1);
        }
    }

    function handleNext(){
        if( indexItem < maxIndex){
            setIndexItem(indexItem+1);
        }
    }

    return (
        <div className="card-body mt-4 mb-5 card-body-relateb" >
            <div className="text-center mb-5 mt-5">
                    <h4>Related Products</h4>
                    <p>People also search for this items</p>
            </div>
            <div className="col-sm-12">
                <div className="slide">
                    <div className="dieuhuong">
                        <i className="fas fa-chevron-circle-left" onClick={ ()=> handlePrev()}></i>
                        <i className="fas fa-chevron-circle-right" onClick={ ()=> handleNext()}></i>
                    </div>
                    <div className="chuyen-slide" style={{transform: `translate3d(${td}px, 0px, 0px)`, transitionDuration: '0ms'}}>
                        {
                            relatedProducts.map( (product,inx)=>{
                                return (
                                    <RelatedItem key={inx} product={product}></RelatedItem>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts;
