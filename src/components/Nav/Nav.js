import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: '#1a2125'}}>
                <Link className="navbar-brand" to="/">MTT</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/lien-he">Liên hệ</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;