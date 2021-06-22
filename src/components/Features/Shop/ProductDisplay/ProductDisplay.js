import React from 'react'
import PropTypes from 'prop-types'
import { ProductGrid } from '../LayoutProduct/LayoutProduct';
import { Product } from '../../../Common/Common';
ProductDisplay.propTypes = {
    dataShow: PropTypes.array,
    layout: PropTypes.bool
}

ProductDisplay.defaultProps = {
    dataShow: [],
    layout: true
}

function ProductDisplay( { dataShow, layout }) {

  const showLayoutProduct = ()=>{
    if(layout){
      return dataShow.map( (product,inx)=>(
        <div key={inx} className="col-sm-6 col-md-4">
              {
                Product({product})
              }
        </div>
      ))
    }
    else{
      return dataShow.map( (product,inx)=>(
        <ProductGrid key={inx} product={product}/>
      ))
    }
  };

  return (
      <div className="row mb-3">
          {
              showLayoutProduct()
          }
      </div>
  )
}

export default ProductDisplay;

