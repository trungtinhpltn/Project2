import React, { Component } from 'react';
import { connect } from 'react-redux'

class NoteItem extends Component {
    towAction = ()=>{
        this.props.changeEditStatus();
        this.props.dataEdit(this.props.item);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id={"note"+this.props.index}>
                <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#noteList" href={"#noteContent"+this.props.index} aria-expanded="true" aria-controls="noteContent1">
                    {this.props.children}
                    </a>
                    <div className="btn-group float-right">
                        <div className="btn btn-warning" onClick={()=>this.towAction()}>
                            <i className="fa fa-edit" />
                            Sua
                        </div>
                        <div className="btn btn-danger" onClick={ ()=>this.props.deleteNote(this.props.item)}>
                            <i className="fa fa-trash-o" aria-hidden="true" />
                            Xoa
                        </div>
                    </div>
                </h5>
                </div>
                <div id={"noteContent"+this.props.index} className="collapse in" role="tabpanel" aria-labelledby={"noteContent"+this.props.index}>
                <div className="card-body">
                    {this.props.noteContent}
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isEdit: state.isEdit
  })
  
  const mapDispatchToProps = (dispatch)=>{
    return {
        changeEditStatus: ()=> dispatch({type:"CHANGE_EDIT"}),
        dataEdit: (note)=> dispatch({type:"EDIT",data:note}),
        deleteNote: (note)=> dispatch({type:"DELETE_NOTE",note})
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(NoteItem);