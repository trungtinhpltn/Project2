import React, { useState } from 'react'

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const [check, setCheck] = useState(true);
    function handleChange(e) {
        const value = e.target.value;
        setValue(value);
        setCheck(value.length > 0);
    }
    return {
      value,
      onChange: handleChange,
      check,
      setCheck
    };
}
const Input = ({ form, onChange,check, value }) => (
    <div className="col-sm-12 col-md-6">
        <div className="form-group">
            <label htmlFor={form.id}>{form.name}</label>
            <input type={form.type} name={form.id} id={form.id} className={"form-control"+ (check?"" : " is-invalid")} value={value} placeholder={form.placeholder} onChange={e=>{
                e.preventDefault();
                onChange(e);
            }}/>
        </div>
    </div>
);

function Address({display,setDisplay}) {
    const fullName= useFormInput("");
    const number= useFormInput("");
    const houseNo= useFormInput("");
    const landmark= useFormInput("");
    const city= useFormInput("");
    const pincode= useFormInput("");
    const country= useFormInput("");
    const type= useFormInput("home");
    const checkForms=[
        {id: 'txtName', type: 'text', name: 'Full Name:', placeholder: 'MTT', ob: fullName},
        {id: 'txtNumber', type: 'number', name: 'Number:', placeholder: '0123456789', ob: number},
        {id: 'txtHouse', type: 'text', name: 'Flat, House No:', placeholder: '123 Hoan Kiem', ob: houseNo },
        {id: 'txtNear', type: 'text', name: 'Landmark e.g. near apollo hospital:', placeholder: '121 Hoan Kiem', ob: landmark},
        {id: 'txtCity', type: 'text', name: 'Town/City:', placeholder: 'Ha Noi', ob: city},
        {id: 'txtPincode', type: 'number', name: 'Pincode:', placeholder: '1234', ob: pincode},
        {id: 'txtCountry', type: 'text', name: 'Country:', placeholder: 'Viet Nam', ob: country},
    ]

    function submitForm(e){
        e.preventDefault();
        fullName.setCheck(fullName.value.length>0);
        number.setCheck(number.value.length>0);
        houseNo.setCheck(houseNo.value.length>0);
        landmark.setCheck(landmark.value.length>0);
        city.setCheck(city.value.length>0);
        country.setCheck(country.value.length>0);
        pincode.setCheck(pincode.value.length>0);
        type.setCheck(type.value.length>0);
        if( fullName.value.length>0 && number.value.length>0 && houseNo.value.length>0 && landmark.value.length>0 && pincode.value.length>0 && country.value.length>0 && city.value.length>0 && type.value.length>0 )
        {
            
            setDisplay(2)
        }

    };
    
    return (
        <div className={display===1?"row show":"row hidden"} id="Address">
            <div className="col-12 col-lg-8">
                <form onSubmit={(e)=>submitForm(e)}className="card-address info-checkout">
                    <div className="card-header">
                        <h4 className="address-title">
                            Add New Address
                        </h4>
                        <p className="text-muted mt-25 address-text">Be sure to check "Deliver to this address" when you have finished</p>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {
                                checkForms.map( (form,inx)=>(
                                    <Input key={inx} form={form} {...form.ob}/>
                                ))
                            }
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="txtType">Address Type:</label>
                                    <select name="txtType" id="txtType" className={"form-control"+(type.check?'':' typeError')} onChange={e=>type.onChange(e)} defaultValue={type.value}>
                                        <option value="home">Home</option>
                                        <option value="work">Work</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <button type="submit" className="waves-effect btn-next delivery-address btn btn-primary">Save And Deliver Here</button>
                            </div>
                        </div>
                    </div>
                </form>    
            </div>
            <div className="col col-lg-4">
                <div className="address-default info-checkout ">
                    <div className="card-header">
                        <h4 className="address-title">Name</h4>
                    </div>
                    <div className="card-body">
                        <p className="address-text">
                            9447 Glen Eagles Drive
                        </p>
                        <p className="address-text mb-3">
                            Lewis Center, OH 43035
                        </p>
                        <p className="address-text mb-3">
                        UTC-5: Eastern Standard Time (EST
                        </p>
                        <p className="address-text mb-3">
                        202-555-0140
                        </p>
                        <button type="button" onClick={()=>setDisplay(2)} className="btn btn-primary btn-block">Deliver To This Address</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address
