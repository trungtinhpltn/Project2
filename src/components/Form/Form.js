import React, { Component } from 'react';
import { connect } from 'react-redux'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent:''
        };
    }
    inputChange = (e)=>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]:value
        })
    }
    submitForm = (e)=>{
        e.preventDefault();
        e.target.reset();
        var note={};
        note.noteTitle = this.state.noteTitle;
        note.noteContent = this.state.noteContent;
        this.props.addNote(note);
        this.props.notifierOn("Tao moi thanh cong");
    }
    render() {
        return (
            <div className="col-4">
                <div className="card border-primary mb-3">
                    <h3 className="card-header text-center mb-3">Tạo ghi chú</h3>
                    <span style={{right: '0px', top: '-3px', position: 'absolute', width: '20px', height: '20px'}} onClick={()=> this.props.changeShowForm()}>
                        <i className="fa fa-window-close" aria-hidden="true" style={{fontSize: '20px'}} />
                    </span>
                    <form style={{padding: '0 1rem'}} onSubmit={(e)=>this.submitForm(e)}>
                        <div className="form-group">
                            <label htmlFor="noteTitle">Tiêu đề note</label>
                            <input type="text" className="form-control" name="noteTitle" id="noteTitle" onChange={(e)=>this.inputChange(e)} aria-describedby="helpId" placeholder="Tiêu đề note" />
                            <small id="helpId" className="form-text text-muted">Điền tiêu đề ở đây</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="noteContent">Nội dung note</label>
                            <textarea type="text" className="form-control" name="noteContent" onChange={(e)=>this.inputChange(e)} id="noteContent" aria-describedby="helpId" placeholder="Nội dung note"/>
                            <small id="helpId" className="form-text text-muted">Nhập nội dung ở đây</small>
                        </div>
                        <div className="form-group">

                            <button type="submit" className="btn btn-primary btn-block">Tạo</button>
                    
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        addNote: (note)=> dispatch({type:"ADD_DATA",data:note}),
        changeShowForm: ()=> dispatch({type:"CHANGE_SHOW_FORM"}),
        notifierOn: (msg)=> dispatch({type:"NOTIFIER_ON",msg,notifierType: "success"})
    }
}
export default connect(null,mapDispatchToProps)(Form);