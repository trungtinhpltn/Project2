import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../ContextAPI/ContextAPI';
import Pagination from '../../Common/Pagination/Pagination';
import Search from './Search/Search';
import FiltersProduct from './FiltersProduct/FiltersProduct';
import { LayoutProduct } from './LayoutProduct/LayoutProduct';
import ProductDisplay from './ProductDisplay/ProductDisplay';

const maxItem=6;

export const ShopContext = React.createContext();

export function Shop() {
  
  const [layout, setLayout] = useState(true);
  const [page, setPage] = useState(1);
  const [sort,setSort] = useState(0);
  const [filterPrice,setFilterPrice] = useState('All');
  const [filterCat,setFilterCat] = useState('All');
  const { dataProduct , setActive, setPathTitle } = useContext(Context);
  const [data,setData] = useState(dataProduct);
  const [dataFilters,setDataFilters] = useState(data);
  const maxPage= Math.ceil(dataFilters.length/maxItem);
  const [dataShow, setDataShow] = useState([]);

  function getSearch(s){
    const results = dataProduct.filter( p => (p.name).indexOf(s) !==-1);
    setData(results);
    setPage(1);
  }

  useEffect( ()=>{
    var dataFilters = [...data];
    switch(filterPrice){
      case '10-dollars-below':
        dataFilters = dataFilters.filter( p => p.price < 10);
        break;
      case '10-100-dollars':
        dataFilters = dataFilters.filter( p => (p.price >= 10 && p.price <= 100));
        break;
      case '100-500-dollars':
        dataFilters = dataFilters.filter( p => (p.price >= 100 && p.price <= 500));
        break;
      case '500-dollars-above':
        dataFilters = dataFilters.filter( p => p.price > 500);
        break;
      default:
        break;
    }
    switch(filterCat){
      case 'cat-smartTV':
        dataFilters = dataFilters.filter( p => (p.cat === 'Smart TV') );
        break;
      case 'cat-bag':
        dataFilters = dataFilters.filter( p => (p.cat === 'Bag') );
        break;
      case 'cat-shose':
        dataFilters = dataFilters.filter( p => (p.cat === 'Shose'));
        break;
      case 'cat-smartWatch':
        dataFilters = dataFilters.filter( p => (p.cat === 'Smart Watch'));
        break;
      case 'cat-iPad':
        dataFilters = dataFilters.filter( p => (p.cat === 'iPad'));
        break;
      default:
        break;
    }
    if( sort ===0){
      setDataFilters(dataFilters);
    }
    else if( sort === 1){
      dataFilters.sort( (a,b)=> b.price - a.price)
      setDataFilters(dataFilters);
    }
    else{
      dataFilters.sort( (a,b)=> a.price - b.price)
      setDataFilters(dataFilters);
    }
    setPage(1)
  },[sort,data,filterCat,filterPrice,setPage]);

  useEffect(() => {
    const dataInit = [];
    dataFilters.forEach( (p,inx)=>{
        if( inx >= (page-1)*maxItem && inx< page*maxItem){
            dataInit.push(p);
        }
    })
    setDataShow(dataInit);
  }, [dataFilters,page]);

  useEffect( ()=>{
    setActive(0);
    sessionStorage.setItem('active', 0);
  },[setActive]);

  useEffect(() => {
    setPathTitle({name: "Shop",path: '/'});
  },[setPathTitle]);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[page]);

  const ShopValue = {
    setFilterCat, setFilterPrice
  };

  return (
    
      <div className="row mt-3">
        <ShopContext.Provider value={ShopValue}>
          <FiltersProduct/>
        </ShopContext.Provider>
        <div className="col col-lg-9">
          
          <LayoutProduct dataFilters={dataFilters} setSort={setSort} layout={layout} setLayout={setLayout}/>
  
          <Search getSearch={getSearch}/>
  
          <ProductDisplay dataShow={dataShow} layout={layout}/>
  
          { 
          (maxPage >1) &&(
            <Pagination page={page} maxPage={maxPage} setPage={setPage} />
          )
          }
  
        </div>
      </div>
    
  )
}