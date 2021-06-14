import React, { Component } from 'react'
import {Prompt,Redirect} from "react-router-dom";
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocking: false,
            isRedirect: false
        };
    }
    
    inputChange = (e)=>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            isBlocking: value.length > 0,
            [name]:value
        })
    }  

    submitForm = (event) =>{
        event.preventDefault();
        event.target.reset();
        this.setState({
            isBlocking: false,
            isRedirect: true
        });
    }


    render() {
        if( this.state.isRedirect){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <Prompt when={this.state.isBlocking} message={location =>`Are you sure you want to go to ${location.pathname}`}/>
                <div className="jumbotron text-center">
                    <h1 className="display-4 ">Lien he voi chung toi</h1>
                    <p className="lead">MTT+NTL</p>
                </div>
                <section className="page-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-xl-7 mb-3">
                                <form onSubmit={ (e)=> this.submitForm(e)}>
                                    <div className="form-floating">
                                        <label htmlFor="inputName">Name</label>
                                        <input className="form-control" id="inputName" name="txtName" onChange={(e) => this.inputChange(e)} type="text" placeholder="Enter your name..." />
                                        
                                    </div>
                                    <div className="form-floating">
                                        <label htmlFor="inputEmail">Email address</label>
                                        <input className="form-control" id="inputEmail" name="txtEmail" onChange={(e) => this.inputChange(e)} type="email" placeholder="Enter your email..." />
                                        
                                    </div>
                                    <div className="form-floating">
                                        <label htmlFor="inputPhone">Phone Number</label>
                                        <input className="form-control" id="inputPhone" name="txtPhone" onChange={(e) => this.inputChange(e)} type="tel" placeholder="Enter your phone number..." />
                                        
                                    </div>
                                    <div className="form-floating">
                                        <label htmlFor="inputMessage">Message</label>
                                        <textarea className="form-control" id="inputMessage" name="txtMsg" onChange={(e) => this.inputChange(e)} placeholder="Enter your message here..." style={{height: '12rem'}} defaultValue={""} />
                                        
                                    </div>
                                    <br />
                                    <button className="btn btn-primary btn-xl" name="submit" typeof="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
