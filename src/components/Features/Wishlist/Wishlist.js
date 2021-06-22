import React,{ useContext, useEffect, useState} from 'react'
import { Context } from '../../ContextAPI/ContextAPI.js';
import { Product} from '../../Common/Common';
import Pagination from '../../Common/Pagination/Pagination';

const maxItem = 8;

function Wishlist() {

    const { dataProduct, setActive, setPathTitle } = useContext(Context);
    const [page,setPage] = useState(1);
    const [maxPage,setMaxPage] = useState(0);
    const [wishlist, setWishlist] = useState(dataProduct.filter( product=> product.isWishlist));
    const [dataShow,setDataShow] = useState(wishlist);

    useEffect( ()=>{
        setWishlist(dataProduct.filter( product=> product.isWishlist));
    },[dataProduct]);

    useEffect(() => {
        const maxPage= Math.ceil(wishlist.length/maxItem);
        if( maxPage> 0 && maxPage-page<0){
            setPage(maxPage);
        }
        setMaxPage(maxPage);
    }, [wishlist,page]);

    useEffect( ()=>{
        const dataInit=[];
        wishlist.forEach( (p,inx)=>{
            if( inx >= (page-1)*maxItem && inx< page*maxItem){
                dataInit.push(p);
            }
        })
        setDataShow(dataInit);
    },[wishlist,page]);

    useEffect(() => {
        setActive(2);
        sessionStorage.setItem('active', 2);
    },[setActive])
    useEffect(() => {
        setPathTitle({name: "Wishlist",path: '/wishlist'});
    },[setPathTitle]);


    function show(){
        if(wishlist.length > 0){
            return (
                dataShow.map( (product,inx)=>{
                    return (<div key={inx} className="col-sm-6 col-md-4 col-lg-3">
                            {
                                Product({product})
                            }
                        </div>)
                })
            )
        }
        else{
            return (
                <div className="col mt-3">
                    <div className="notifier">
                        <i className="fas fa-exclamation mr-3 ml-2" style={{color: '#07aeae'}}></i>Your wishlist is empty
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="row">
                    {
                    show()
                    }
                </div>
                {
                    maxPage>1&&(
                        <Pagination page={page} maxPage={maxPage} setPage={setPage}/>
                    )
                }
            </div>
        </div>
    )
}
export default Wishlist;
