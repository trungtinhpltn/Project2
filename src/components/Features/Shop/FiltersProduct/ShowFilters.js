import React, { useContext, useState } from 'react'
import { showRate } from '../../../Common/Common';
import { ShopContext } from '../Shop';

const filterPrices=[{id:'all',filterName:'All', rdName: 'price-range-radio'},{id:'10-dollars-below',filterName:'<=$10', rdName: 'price-range-radio'},{id:'10-100-dollars',filterName:'$10-$100', rdName: 'price-range-radio'},{id:'100-500-dollars',filterName:'$100-$500', rdName: 'price-range-radio'},{id:'500-dollars-above',filterName:'>=$500', rdName: 'price-range-radio'},]

const filterCategories= [{id:'cat-all', filterName:'All', rdName: 'category-radio'},{id:'cat-smartTV', filterName:'Smart TV', rdName: 'category-radio'},{id:'cat-bag', filterName:'Bag', rdName: 'category-radio'},{id:'cat-shose', filterName:'Shose', rdName: 'category-radio'},{id:'cat-smartWatch', filterName:'Smart Watch', rdName: 'category-radio'},{id:'cat-iPad', filterName:'iPad', rdName: 'category-radio'},];

const ratings=[ { id:5, vote: 321 }, { id:4, vote: 312 }, { id:3, vote: 231 }, { id:2, vote: 213 }, { id:1, vote: 123 } ];

const useForm=(initValue,cb)=>{
    const [value,setValue] = useState(initValue);
    return {
        value,
        onChange: (e)=>{
            const value = e.target.value;
            cb(value);
            setValue(value);
        },
        setValue
    }
}

const InputRadio = ({ filter, value, onChange })=>{
    return (
        <div className="custom-radio custom-control">
            <input id={filter.id} name={ filter.rdName} type="radio" className="custom-control-input" checked={filter.id === value} value={filter.id} onChange={ (e)=> onChange(e)} />
            <label className="custom-control-label" htmlFor={filter.id}>{filter.filterName}</label>
        </div>
    )
};


function ShowFilters() {

    const { setFilterPrice, setFilterCat } = useContext(ShopContext);
    const prices = useForm('all', setFilterPrice);
    const cats = useForm('cat-all', setFilterCat);

    const resetFilter = ()=>{
        prices.setValue('all');
        cats.setValue('cat-all');
        setFilterPrice('all');
        setFilterCat('cat-all');
    }

    return (
        <div className="card-body">
            <div className="row">
                <div className="col">
                    <h6 className="filter-title">Multi Range</h6>
                    <ul className="list-unstyled filter">
                        {
                            filterPrices.map(price=>(
                                <li key={price.id}>
                                    <InputRadio filter={price} {...prices}/>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h6 className="filter-title">Categories</h6>
                    <ul className="list-unstyled filter">
                        {
                            filterCategories.map( cat=>(
                                <li key={cat.id}>
                                    <InputRadio filter={cat} {...cats}/>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h6 className="filter-title">Ratings</h6>
                    {
                        ratings.map( (rate)=>(
                            <div key={rate.id} className="ratings-list d-flex justify-content-between">
                                {showRate(rate.id)}
                                <div className="stars-received">{rate.vote}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="filter-button-reset mt-3">
                        <button type="button" onClick={()=>resetFilter()} className="btn btn-primary btn-block">Clear All Filters</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowFilters
