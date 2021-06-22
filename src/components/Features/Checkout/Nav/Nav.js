import React from 'react'
const navs = [
    { 
        id: 0,
        title: 'Cart',
        description: 'Your Cart Items', 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
    },
    { 
        id: 1,
        title: 'Address',
        description: 'Enter Your Address', 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
    },
    { 
        id: 2,
        title: 'Payment',
        description: 'Select Payment Method', 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x={1} y={4} width={22} height={16} rx={2} ry={2} /><line x1={1} y1={10} x2={23} y2={10} />
        </svg>
    }
]

function Nav({ myCart, display, setDisplay }) {
    if(myCart.length>0){
        return (
            <div className="row mb-4 mt-3">
                <div className="col">
                    <div className="d-flex bs-stepper-header">
                        {
                            navs.map( nav =>{
                                return (
                                    <div key={nav.id} className="d-flex checkout__nav-item">
                                        <div key={nav.id} className={display===nav.id?"step active":"step"} onClick={()=>setDisplay(nav.id)} data-target="#cart">
                                            <button type="button" className="step-trigger">
                                                <span className="bs-stepper-box">
                                                {nav.icon}
                                                </span>
                                                <span className="bs-stepper-label">
                                                    <span className="bs-stepper-title">{nav.title}</span><span className="bs-stepper-subtitle">{nav.description}</span>
                                                </span>
                                            </button>
                                        </div>
                                        <div className="line">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
        )
    }
    else{
        return (
            <div className="row mb-4 mt-3">
                <div className="col">
                    <div className="d-flex bs-stepper-header">
                        <div className="step active align-items-center" data-target="#cart">
                            <button type="button" className="step-trigger" style={{padding: 0}}>
                            <span className="bs-stepper-box"><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                            </span>
                            <span className="bs-stepper-label">
                                <span className="bs-stepper-title">Cart</span><span className="bs-stepper-subtitle">Your Cart Items</span>
                            </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Nav;
