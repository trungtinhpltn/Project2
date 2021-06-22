import React, { useRef, useState } from 'react'

   
function Search( {getSearch } ) {
    const [value,setValue]= useState('');
    const tmpValue = useRef(null);

    function handleInputChagne(e){
        const value = e.target.value;
        setValue(value);
        if( tmpValue.current){
            clearTimeout(tmpValue.current);
        }
        tmpValue.current= setTimeout(() => {
            const svalue = value;
            getSearch(svalue);
        }, 500);
    }

    function resetForm(){
        setValue('');
        getSearch('');
    }
    
    return (
        <div className="row">
            <div className="col">
                <div className="form-group search-form" style={{width: '100%', position: 'relative'}}>
                    <input className="form-search" type="text" placeholder="Search" value={value} onChange={e=>handleInputChagne(e)} />
                    <span><i onClick={()=>resetForm()} className={"fas fa-times search-close"+(value.length >0?'': ' d-none')} style={{cursor: 'pointer'}}></i></span>
                </div>
            </div>
      </div>
    )
}

export default Search;