import React,{ useMemo } from 'react'

function Pagination( { page,maxPage, setPage } ) {
    const countPage = useMemo(()=>{
        let init = [];
        for(var i = 1; i<=maxPage; i++){
            init.push(i);
        }
        return init;
    },[maxPage]);

    return (
        <div className="row">
            <div className="col mt-3 mb-3">
                <div className="pagination text-center">
                    <button onClick={ ()=> setPage(page-1)} disabled={page===1} type="button" className={"btnChangePage"+(page===1? ' disable':'')}><i className="fas fa-chevron-left"></i></button>
                    <ul className="unlist mr-3 ml-3">
                        {
                            countPage.map( p=>(
                                <li key={p} onClick={()=> setPage(p)} className={"page-item"+(page===p?' active':'')}>
                                {p}
                                </li>
                            ))
                        }
                    </ul>
                    <button onClick={ ()=> setPage(page+1)} disabled={page===maxPage} type="button" className={"btnChangePage"+(page===maxPage? ' disable':'')}><i className="btnChangePage-icon fas fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Pagination;
