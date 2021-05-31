import React, { Component } from 'react';
import { connect } from 'react-redux'
class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            noteTitle: '',
            noteContent: ''
        }
    }
    
    UNSAFE_componentWillMount(){
        this.setState({
            id: this.props.dataEdit.id,
            noteTitle: this.props.dataEdit.noteTitle,
            noteContent: this.props.dataEdit.noteContent
        })
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
        var note={};
        note.id= this.state.id
        note.noteTitle = this.state.noteTitle;
        note.noteContent = this.state.noteContent;
        this.props.saveEdit(note);
        this.props.changeEditStatus();
        this.props.notifierOn("Sua thanh cong");
    }
    render() {
        return (
            <div className="col-4">
                <div className="card border-primary mb-3">
                    <h3 className="card-header text-center mb-3">Sửa ghi chú</h3>
                    <span style={{right: '0px', top: '-3px', position: 'absolute', width: '20px', height: '20px'}} onClick={()=>this.props.changeEditStatus()}>
                        <i className="fa fa-window-close" aria-hidden="true" style={{fontSize: '20px'}} />
                    </span>
                    <form style={{padding: '0 1rem'}} onSubmit={(e)=>this.submitForm(e)}>
                        <div className="form-group">
                            <label htmlFor="noteTitle">Tiêu đề note</label>
                            <input type="text" className="form-control" name="noteTitle" id="noteTitle" defaultValue={this.props.dataEdit.noteTitle} onChange={(e)=>this.inputChange(e)} aria-describedby="helpId" placeholder="Tiêu đề note" />
                            <small id="helpId" className="form-text text-muted">Điền tiêu đề ở đây</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="noteContent">Nội dung note</label>
                            <textarea type="text" className="form-control" name="noteContent" defaultValue={this.props.dataEdit.noteContent} onChange={(e)=>this.inputChange(e)} id="noteContent" aria-describedby="helpId" placeholder="Nội dung note"/>
                            <small id="helpId" className="form-text text-muted">Nhập nội dung ở đây</small>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Lưu</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        dataEdit: state.dataEdit
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        changeEditStatus: ()=> dispatch({type:"CHANGE_EDIT"}),
        saveEdit: (note)=> dispatch({type:"SAVE_EDIT",note}),
        notifierOn: (msg)=> dispatch({type:"NOTIFIER_ON",msg,notifierType:"success"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditForm);