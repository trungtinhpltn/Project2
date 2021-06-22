import React, { useContext, useEffect } from 'react'
import Nav from './Nav/Nav';
import { Shop } from '../Features/Shop/Shop';
import { rightTitle } from '../Common/Common'; 
import {Route, Switch} from 'react-router-dom';
import Wishlist from '../Features/Wishlist/Wishlist';
import Checkout from '../Features/Checkout/Checkout';
import Detail from '../Features/Details/Details';
import { Context } from '../ContextAPI/ContextAPI';

function Right() {

  const {pathTitle, showMenus, setShowMenus, showFilters, setShowFilters } = useContext(Context);
  useEffect( ()=>{
    window.onresize = ()=>{
      let wc = window.innerWidth;
      if(wc >=992){
        setShowFilters(false)
      }
      if(wc >= 1200){
        setShowMenus(false);
      }
      
    };
    return ()=>{
      window.onresize=null;
    }
  },)
  return (
    <div className="col col-xl-10" id="right">
      <Nav/>
      <div className="overlay" ></div>
      <span className={ showMenus?"menus-overlay":'d-none' } onClick={ ()=>setShowMenus(!showMenus) }></span>
      <span className={ showFilters?"menus-overlay":'d-none' } onClick={ ()=>setShowFilters(!showFilters) }></span>
      <div className="container-fluid" id="rightMargin">
        {
          rightTitle({pathTitle})
        }
        
        <Switch>
          <Route exact path="/" component={Shop}/>
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/checkout" component={Checkout} /> 
          <Route path="/detail/:slug.:pId" component={Detail} /> 
          <Route component={Shop} />
        </Switch>
      </div>
    </div>
    )
}

export default Right;
