import React, { Component } from 'react'
import db from '../Firebase/Firebase';
import NoteItem from './NoteItem';

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listNotes: []
        };
    }
    
    UNSAFE_componentWillMount() {
        
        db.on('value',(notes)=>{
            var arrayData = [];
            notes.forEach((item)=>{  
                arrayData.push({
                    id: item.key,
                    noteTitle: item.val().noteTitle,
                    noteContent: item.val().noteContent
                })
            });
            this.setState({
                listNotes: arrayData
            });
        });
    }

    getData = ()=>{
        if( this.state.listNotes){
            return this.state.listNotes.map( (note,index)=>{
                return <NoteItem item={note} index={index+1} key={index} noteContent={note.noteContent}>{note.noteTitle}</NoteItem>
            })
        }
    }
    
    render() {
        return (
            <div className="col">
                
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {
                        this.getData()
                    }
                </div>
            </div>
        )
    }
}
