import React, { useContext , useMemo } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../ContextAPI/ContextAPI.js';

function Left() {

    const { active, link, showMenus, setShowMenus } = useContext(Context);
    const menus = useMemo(() => {
        return [{id: 0,name: 'Shop',link: '/'},{id: 1, name: 'Details',link: link},
            {
                id: 2,
                name: 'Wishlist',
                link: '/wishlist'
            },
            {
                id: 3,
                name: 'Checkout',
                link: '/checkout'
            },

        ]
    }, [link]);

    return (
        <div className={"col-xl-2 showMenus" + (showMenus?' display':'')} id="left">
            <span className={'d-xl-none '+(showMenus?"close-menus":'d-none')} onClick={ ()=>setShowMenus(!showMenus) }><i className="fas fa-times"></i></span>
            
            <ul style={{listStyle: 'none', padding: 0, margin: '100px 0'}}>
                {
                    menus.map( menu =>{
                        return (
                            <li key={menu.id} className={'menu-item '+(active===menu.id? 'mactive':'')}>
                                <Link className="btn btn-block menu-link" to={menu.link} onClick={ ()=>setShowMenus(false) } role="button">
                                    <span className="icon mr-3"><svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={12} r={10} /></svg></span>{menu.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Left
