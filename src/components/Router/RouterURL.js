import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Contact from '../Contact/Contact';
import Content from '../Content/Content';
class RouterURL extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Content} /> 
                <Route path="/lien-he" component={Contact} />
                <Route component={Content} /> {/* // Nhập sai đường dẫn */}
            </Switch>
        );
    }
}

export default RouterURL;