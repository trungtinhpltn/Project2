import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux'

class Notifier extends Component {
    tatThongBao = ()=>{
        this.props.notifierOff()
    }
    render() {
        if(this.props.notifier){
            return (
                <AlertContainer >
                    <Alert type={this.props.notifierType} onDismiss={()=>this.tatThongBao()} timeout={1000} >{this.props.notifierContent}</Alert>
                </AlertContainer>
                
            );
        }
        else
            return null;
    }
}
const mapStateToProps = (state) => ({
    notifier: state.notifier,
    notifierContent: state.notifierContent,
    notifierType: state.notifierType
})

const mapDispatchToProps = (dispatch)=>{
    return {
        notifierOff: ()=> dispatch({type:"NOTIFIER_OFF"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Notifier);