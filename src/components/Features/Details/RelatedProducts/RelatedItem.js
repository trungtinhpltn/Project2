import React from 'react'
import {Link} from 'react-router-dom';
import {showRate, toSlug} from '../../../Common/Common';

function RelatedItem({product}) {

    return (
        <div className="col-12 col-sm-6 col-lg-4 element-slide" >
            <div className="slide-item">
                <div className="text-center mt-3">
                    <Link to={"/detail/"+toSlug(product.name)+"."+product.id} ><h6 className="card-title">{product.name}</h6></Link>
                    <span className="item-company card-text mb-2">
                        by {product.company}
                    </span>
                </div>
                <Link to={"/detail/"+toSlug(product.name)+"."+product.id} ><img className="card-img-top" src={product.avatar} alt={product.name}/></Link>
                <div className="text-center">
                    { showRate(product.rate)}
                    <p className="item-price" style={{fontSize: '1rem'}}>${product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default RelatedItem;
