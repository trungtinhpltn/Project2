import React, { useState } from 'react'

const defaultMethod = { id: 'card' , rdName: 'paymentMethod', lable: 'US Unlocked Debit Card 12XX XXXX XXXX 0000' }
const paymentMethods=[

    { id: 'payment-card' , rdName: 'paymentMethod', lable: 'Credit / Debit / ATM Card' },
    { id: 'payment-net-banking' , rdName: 'paymentMethod', lable: 'Net Banking' },
    { id: 'payment-emi' , rdName: 'paymentMethod', lable: 'EMI (Easy Installment)' },
    { id: 'payment-cod' , rdName: 'paymentMethod', lable: 'Cash On Delivery' },
]
const useForm =(initValue)=>{
    const [value,setValue] = useState(initValue)
    return {
        value,
        onChange: (e)=>{
            setValue(e.target.value);
        },
        setValue
    }
}

const InputRadio= ({ radio, value, onChange })=>{
    return (
        <div className="custom-radio custom-control">
            <input id={radio.id} type="radio" name={radio.rdName} value={radio.id} onChange={e=>onChange(e)} checked={radio.id === value} className="custom-control-input"/>
            <label className="custom-control-label" htmlFor={radio.id}>{radio.lable}</label>
        </div>
    )
}

function Payment({display}) {

    const payment = useForm('card');
    const ipText = useForm('');
    const getText = (e)=>{
        e.preventDefault();
        e.target.reset();
        console.log(ipText.value);
    }

    return (
        
        <div className={display===2?"row show":"row hidden"} id="Payment">
            <div className="col-12 col-lg-8">
                <div className="payment info-checkout">
                    <div className="card-header">
                        <h4 className="address-title">
                            Payment options
                        </h4>
                        <p className="text-muted mt-25 address-text">Be sure to click on correct payment option</p>
                    
                    </div>
                    <div className="card-body">
                        <h6 className="card-holder-name my-75">MTT</h6>
                        
                        <InputRadio radio={defaultMethod} {...payment}/>

                        <div className="customer-cvv mt-1">
                            <form onSubmit={ e=>getText(e)} className="form-inline">
                                <label htmlFor="card-holder-cvv" className="mb-50 mr-3">Enter CVV:</label>
                                <input id="card-holder-cvv" type="text" className="input-cvv ml-sm-75 ml-0 mb-50 form-control" onChange={ (e)=> ipText.onChange(e)}/>
                                <button type="submit" className="btn-cvv ml-0 ml-sm-1 mb-50 btn btn-primary">Continue</button>
                            </form>
                        </div>
                        <hr/>
                        <ul className="list-unstyled">
                            {
                                paymentMethods.map( method=>(
                                    <li key= {method.id} className="py-50">
                                        <InputRadio radio={method} {...payment}/>
                                    </li>
                                ))
                            }
                        </ul>
                        <hr className="my-2"/>
                        <div className="gift-card mb-2">
                            <p className="text" style={{color: '#6e6b7b'}}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg><span className="align-middle">Add Gift Card</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-4">
                <div className="payment">
                    <div className="card-body info-checkout">
                        <h4 className="address-title">
                            Price Details
                        </h4>
                        
                        <ul className="list-unstyled mt-4">
                            <li className="d-flex justify-content-between price-detail">
                                <div className="detail-title">Price of 3 items</div>
                                <div className="total-price bold">$222</div>
                            </li>
                            <li className="d-flex justify-content-between price-detail">
                                <div className="detail-title">Delivery Charges</div>
                                <div className="detail-amt text-success">Free</div>
                            </li>
                            
                        </ul>
                        <hr/>
                        <ul className="list-unstyled mt-4">
                            <li className="d-flex justify-content-between price-detail">
                                <div className="detail-title">Amount Payable</div>
                                <div className="total-price bold">$699.30</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
