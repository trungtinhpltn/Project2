import db from '../Firebase/Firebase';
var redux = require('redux');
const noteInitialState = {
    isEdit: false,
    isShowForm: false,
    dataEdit: {},
    notifier: false,
    notifierContent: '',
    notifierType: ''
};
const allReducers = (state=noteInitialState,action) => {
    switch (action.type) {
        case "ADD_DATA": // Them du lieu vao firebase
            db.push(action.data);
            return state;
        case "CHANGE_EDIT": // thay doi trang thai hien thi form edit
            return {...state,isEdit: !state.isEdit}
        case "CHANGE_SHOW_FORM": // thay doi trang thai hien thi form tao ghi chu
            return {...state,isShowForm: !state.isShowForm,isEdit: false}
        case "EDIT": // lay du lieu can chinh sua va thiet lap k tao moi duoc
            return {...state,dataEdit: action.data,isShowForm:false}
        case "SAVE_EDIT": // day du lieu sua len firebase
            let note=action.note;
            db.child(note.id).set({
                noteTitle: note.noteTitle,
                noteContent: note.noteContent
            })
            return {...state,dataEdit:{}}
        case "DELETE_NOTE": // xoa ghi chu
            db.child(action.note.id).remove();
            return {...state,notifier:true,notifierContent:'Ban da xoa "'+action.note.noteTitle+'" thanh cong', notifierType: "danger"}
        case "NOTIFIER_ON": // hien thi thong bao them sua
            return {...state,notifier:true,notifierContent:action.msg, notifierType: action.notifierType}
        case "NOTIFIER_OFF": // tat hien thi thong bao
            return {...state,notifier: false}
        default:
            return state;
    }
}
var store = redux.createStore(allReducers);

export default store;