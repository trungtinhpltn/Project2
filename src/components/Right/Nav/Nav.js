import React, { useContext } from 'react'
import { Context } from '../../ContextAPI/ContextAPI.js';
import { Link } from 'react-router-dom';
import MyCart from './MyCart';




function Nav() {
  
  const { dataProduct,showMenus, setShowMenus } = useContext(Context);
  const myCart = dataProduct.filter( p=> p.isCart);
  const navIcons=[
    {
      id: 1,
      classLi: "nav-item d-xl-none",
      classIcon: "fas fa-bars gray icon-font menu-icon-list",
    },
    {
      id: 2,
      classLi: "nav-item d-none d-lg-inline-block",
      classIcon: "far fa-envelope-open gray icon-font",
      link: "",
    },{
      id: 3,
      classLi: "nav-item d-none d-lg-inline-block",
      classIcon: "far fa-comment gray icon-font",
      link: "",
    },{
      id: 4,
      classLi: "nav-item d-none d-lg-inline-block",
      classIcon: "fas fa-clipboard-check gray icon-font",
      link: "",
    },{
      id: 5,
      classLi: "nav-item d-none d-lg-inline-block",
      classIcon: "far fa-star nav__icon-star icon-font",
      link: "",
    }
  ]
  function cartNotifier(){
    if(myCart.length ===0){
      return '';
    }
    else{
      return <span className="count-product text-center">{myCart.length}</span>
    }
  }

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-sm mt-4" style={{justifyContent: 'space-between'}}>     
          <ul className="navbar-nav mt-2 mt-lg-0">
            {
              navIcons.map( (icon)=>{
                if(icon.id===1){
                  return(
                    <li key={icon.id} className={icon.classLi} onClick={()=>setShowMenus(!showMenus)}>
                      <span className="icon nav-link"><i className={icon.classIcon}></i></span>
                    </li>
                  )
                }
                else{
                  return (
                    <li key={icon.id} className={icon.classLi} onClick={()=>setShowMenus(!showMenus)}>
                      <Link className="nav-link" to="/"><span className="icon"><i className={icon.classIcon}></i></span></Link>
                    </li>
                  )
                }
              })
            }
          </ul>
          
          <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item" style={{position: 'relative'}}>
                
                  <div className="d-none d-sm-inline-block icon nav-link cartShow"><i className="fas fa-shopping-cart gray icon-font"></i>
                  <MyCart myCart={myCart}></MyCart>
                  </div>
                  <Link className="d-sm-none icon nav-link pd-2" to='/checkout'><i className="fas fa-shopping-cart gray icon-font"></i>
                  </Link>
                  {
                    cartNotifier()
                  }
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="/link"><span className="icon"><i className="far fa-bell gray icon-font" /></span></a>
              </li>
            </ul>
      </nav>
    </div>
  )
}


export default Nav
