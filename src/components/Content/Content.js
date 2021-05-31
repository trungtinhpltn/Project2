import React, { Component } from 'react'
import Form from '../Form/Form'
import Note from '../Note/Note'
import { connect } from 'react-redux'
import EditForm from '../Form/EditForm'

class Content extends Component {
    showForm = ()=>{
        if(this.props.isShowForm){
            return <Form></Form>
        }
    }
    showEditForm = ()=>{
        if(this.props.isEdit){
            return <EditForm></EditForm>
        }
    }
    render() {
        return (
            <div className="container mt-3">
                <div className="row mb-3">
                    <div className="col">
                        <div className="btn-group">
                            <div className="btn btn-primary" onClick={ ()=>this.props.changeShowForm()}>
                                Tạo ghi chú
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Note></Note>
                    {
                        this.showForm()
                    }
                    {
                        this.showEditForm()
                    }
                </div>
        </div>
        )
    }
}
const mapStateToProps = (state) => ({
    isShowForm: state.isShowForm,
    isEdit: state.isEdit
})
  
const mapDispatchToProps = (dispatch)=>{
    return {
        changeShowForm: ()=> dispatch({type:"CHANGE_SHOW_FORM"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Content);