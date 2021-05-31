import firebase from 'firebase/app'
require('firebase/database');
const firebaseConfig = {
    apiKey: "AIzaSyDS6WopsvQsatx_u3lYekpfPjv7VgMSRlA",
    authDomain: "notereact-69d9b.firebaseapp.com",
    databaseURL: "https://notereact-69d9b-default-rtdb.firebaseio.com",
    projectId: "notereact-69d9b",
    storageBucket: "notereact-69d9b.appspot.com",
    messagingSenderId: "10007184693",
    appId: "1:10007184693:web:47f5ac480334850f65f87c",
    measurementId: "G-YWWWNHRK3B"
};
firebase.initializeApp(firebaseConfig);
const db= firebase.database().ref('dataForNote');
export default  db;

//ham lay du lieu
//var data = firebase.database().ref('dataForNote');
// data.once('value').then(function(snapshot){ 
//     console.log(snapshot.val());
// })

//Sua du lieu
// var data = firebase.database().ref('dataForNote/note3');
// data.set({
//     id: 3,
//     content: "Hoc ma choi",
//     title: "Ghi chu so 03"
// })
// insertData = ()=>{
//     var connecData = firebaseconnec.database().ref('dataForNote');
//     connecData.push({
//       title: "Ghi so dung push",
//       content:"Noi dung la"
//     })
//     console.log("Da them vao firebase");
//   }
//   deletetData = (id)=>{
//     var connecData = firebaseconnec.database().ref('dataForNote');
//     connecData.child(id).remove();
//     console.log("Da xoa thanh cong");
//   }