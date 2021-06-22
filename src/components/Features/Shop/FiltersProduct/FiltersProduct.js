import React, { useContext } from 'react'
import { Context } from '../../../ContextAPI/ContextAPI';
import ShowFilters from './ShowFilters';

function FiltersProduct() {
    const { showFilters,setShowFilters } = useContext(Context);
    
    return (
        <div className={"col-lg-3 filters showFilterMenu"+(showFilters?' display':'')}>
            <span className={"d-lg-none "+(showFilters?"close-menus":'d-none')} onClick={ ()=>setShowFilters(!showFilters) }><i className="fas fa-times"></i></span>
            <div className="row mb-3 d-none d-lg-block">
                <div className="col" style={{height: '38px'}}>
                    Filters
                </div>
            </div>
            <div className="row">
                <div className={"col"}>
                    <ShowFilters/>
                </div>
            </div>
        </div>
    )
}

export default FiltersProduct;
