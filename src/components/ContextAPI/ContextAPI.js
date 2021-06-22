import React, { useState, useCallback } from 'react'
import data from '../../dataProduct.json';


export const Context = React.createContext();

export function ContextProvider({children}) {
    
    const [pathTitle,setPathTitle] = useState({name:'Shop',path: '/'});
    const [showMenus,setShowMenus] = useState(false);
    const [showFilters,setShowFilters] = useState(false);

    const [active,setActive] = useState(()=>{
        return parseInt(sessionStorage.getItem('active'),10) || 0;
    });
    const [dataProduct,setDataProduct] = useState(()=>{
        if( JSON.parse(sessionStorage.getItem('data')) ){
            return JSON.parse(sessionStorage.getItem('data'));
        }
        sessionStorage.setItem('data',JSON.stringify(data));
        return data;
    });
    
    const [link,setLink] = useState(()=>{
        return sessionStorage.getItem('link')|| '/detail/apple-watch-series-5.1';
    })

    const handleCartQuantity= useCallback((qty,pId)=>{
        const tmp =[...dataProduct]
        tmp.forEach(element =>{
            if( element.id === pId){ 
                element.cartQuantity = qty;
            }
        });
        sessionStorage.setItem('data',JSON.stringify(tmp));
        setDataProduct(tmp);
    },[dataProduct]);

    const handleIsCart = useCallback((pId)=>{
        const tmp =[...dataProduct]
        tmp.forEach(element =>{
            if( element.id === pId){
                element.isCart = !element.isCart;
                element.cartQuantity = 1;
            }
        });
        sessionStorage.setItem('data',JSON.stringify(tmp));
        setDataProduct(tmp);
    },[dataProduct]);

    const handleWishList= useCallback((pId)=>{
        const tmp =[...dataProduct]
        tmp.forEach(element =>{
            if( element.id === pId){
                element.isWishlist = !element.isWishlist;
            }
        });
        sessionStorage.setItem('data',JSON.stringify(tmp));
        setDataProduct(tmp);
    },[dataProduct]);


    const value={
        dataProduct, handleIsCart, handleWishList, handleCartQuantity, active, setActive, link, setLink, pathTitle, setPathTitle, showMenus, setShowMenus, showFilters, setShowFilters
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

