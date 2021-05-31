import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import {BrowserRouter as Router} from "react-router-dom";
import RouterURL from '../Router/RouterURL';
import { connect } from 'react-redux';
import Notifier from '../Notifier/Notifier';
class App extends Component {
  componentDidMount() {
    const navLinks = document.querySelectorAll(".nav-item");
    navLinks.forEach((nav,index)=>{
      nav.onclick= ()=>{
        const navActive = document.querySelector(".nav-item.active");
        navActive.classList.remove("active")
        nav.classList.add("active")
      }
    })
}
  render() {
    return (
      <Router>
        <Nav></Nav>
        <RouterURL></RouterURL>
        <Notifier></Notifier>
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  isEdit: state.isEdit
})

const mapDispatchToProps = (dispatch)=>{
  return {
      changeEditStatus: ()=> dispatch({type:"CHANGE_EDIT"})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
