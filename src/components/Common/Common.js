import React,{ useContext } from 'react';
import { Context } from '../ContextAPI/ContextAPI.js';
import {Link, useRouteMatch} from 'react-router-dom';

const stars=[1,2,3,4,5];

export function showRate(rate){
        return (<ul className="unstyled-list list-inline mb-0">
            {
                stars.map((star,inx)=>{
                    if( star<=rate){
                        return (
                            <li key={inx}>
                                <i  className="fa fa-star yellow"/>
                            </li>
                        )
                    }
                    else{
                        return (
                            <li key={inx}>
                                <i  className="far fa-star"/>
                            </li>
                        )
                    }
                })
            }
        </ul>)
}

export function rightTitle({pathTitle}){
    return <div className="row">
                <div className="col title">
                <h2 className="page-title">{pathTitle.name}</h2>
                <ol className="breadcrumb d-none d-sm-inline-flex">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to={pathTitle.path}>{pathTitle.exactName|| pathTitle.name}</Link></li>
                </ol>
                </div>
            </div>
}

export function Product({product}) {
    const match = useRouteMatch();
    const {handleWishList} = useContext(Context);
    return (
        <div className="card text-left mt-3 mb-3 productItem">
            <Link to={"/detail/"+toSlug(product.name)+"."+product.id}><img className="card-img-top pt-1" src={product.avatar} alt="" /></Link>
            <div className="card-body">
            <div className="title-rate">
                <span>
                    {
                        showRate(product.rate)
                    }
                </span>
                <h6 className="card-price text-center">${product.price}</h6>
            </div>
            <Link to={"/detail/"+toSlug(product.name)+"."+product.id}><h6 className="card-title">{product.name}</h6></Link>
            <p className="card-text">{product.description}</p>
            </div>
            <div className="btn-group">
                <div className="btn btn-light" onClick={ ()=> handleWishList(product.id)}>
                    <span className="icon">
                        { isWishlist(product.isWishlist)}
                    </span>
                    { match.url === '/wishlist'? 'Remove':'Wishlist'}
                </div>
                {
                    useIsCart(product.isCart,product.id)
                }
            </div>
        </div>
    
    )
}

export function toSlug(str){
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    // return
    return str;
}

export function isWishlist(condition){
    
    if(condition){
        return <i className="fa fa-heart" style={{color: 'red', fontSize: '13px'}} />
    }
    else return <i className="far fa-heart" style={{fontSize: '13px'}}/>
}

export function useIsCart(condition, pID){
    const {handleIsCart} = useContext(Context);
    if(condition){
        return (<Link className="btn btn-primary" to="/checkout" role="button">
                    <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-50"><circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg></span>
                    <span>View in cart</span>
                </Link>)
    }
        
    else{
        
        return (<button className="btn btn-primary" onClick={()=>handleIsCart(pID)}>
                    <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-50"><circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg></span>
                    <span>Add to cart</span>
                </button>);
    } 
}
